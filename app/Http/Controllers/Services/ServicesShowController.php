<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Support\Facades\Storage as StorageBlock;
use Inertia\Inertia;

class ServicesShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Service $service)
    {
        abort_if(! $service->is_active, 404);

        $cacheKey = 'service_show_' . $service->id;

        $serviceData = \Illuminate\Support\Facades\Cache::remember($cacheKey, 86400, function () use ($service) {
            $service->load('media');

            $featuredImage = $service->getFirstMediaUrl('featured_image', 'webp')
                ?: $service->getFirstMediaUrl('featured_image');

            if (! $featuredImage && $service->image) {
                $featuredImage = str_starts_with($service->image, 'http')
                    ? $service->image
                    : StorageBlock::disk('public')->url($service->image);
            }

            // Resolve public storage URLs for file-based block images
            $blocks = collect($service->content_blocks ?? [])->map(function (array $block) {
                $data = $block['data'] ?? [];

                return match ($block['type']) {
                    'image' => array_merge($block, [
                        'data' => array_merge($data, [
                            'image_url' => isset($data['image'])
                                ? (str_starts_with($data['image'], 'http') ? $data['image'] : StorageBlock::disk('public')->url($data['image']))
                                : null,
                        ]),
                    ]),
                    'gallery', 'media_text' => array_merge($block, [
                        'data' => array_merge($data, [
                            'image_urls' => collect($data['images'] ?? [])->map(
                                fn ($path) => str_starts_with($path, 'http') ? $path : StorageBlock::disk('public')->url($path)
                            )->values()->toArray(),
                        ]),
                    ]),
                    default => $block,
                };
            })->values()->toArray();

            return [
                'id' => $service->id,
                'title' => $service->title,
                'slug' => $service->slug,
                'short_description' => $service->short_description,
                'description' => $service->description,
                'featured_image_url' => $featuredImage ?: null,
                'content_blocks' => $blocks,
            ];
        });

        return Inertia::render('services/show', [
            'service' => $serviceData,
        ]);
    }
}
