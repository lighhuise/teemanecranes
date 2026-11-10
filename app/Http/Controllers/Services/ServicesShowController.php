<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Support\Facades\Cache;
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

        $cacheKey = 'service_show_'.$service->id;

        $serviceData = Cache::remember($cacheKey, 86400, function () use ($service) {
            $service->load('media');

            // Resolve public storage URLs and metadata for file-based block images
            $blocks = collect($service->content_blocks ?? [])->map(function (array $block) {
                $data = $block['data'] ?? [];

                return match ($block['type']) {
                    'image' => array_merge($block, [
                        'data' => array_merge($data, [
                            'image_url' => isset($data['image'])
                                ? (str_starts_with($data['image'], 'http') ? $data['image'] : StorageBlock::disk('public')->url($data['image']))
                                : null,
                            'image_meta' => isset($data['image'])
                                ? Service::resolveImageItemMeta($data['image'])
                                : null,
                        ]),
                    ]),
                    'gallery', 'media_text' => array_merge($block, [
                        'data' => array_merge($data, [
                            'image_urls' => collect($data['images'] ?? [])->map(
                                fn ($path) => str_starts_with($path, 'http') ? $path : StorageBlock::disk('public')->url($path)
                            )->values()->toArray(),
                            'images_meta' => collect($data['images'] ?? [])->map(
                                fn ($path) => Service::resolveImageItemMeta($path)
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
                'featured_image_url' => $service->featured_image_url,
                'featured_image_conversions' => $service->featured_image_conversions,
                'featured_image_orientation' => $service->featured_image_orientation,
                'featured_image_aspect_ratio' => $service->featured_image_aspect_ratio,
                'content_blocks' => $blocks,
            ];
        });

        return Inertia::render('services/show', [
            'service' => $serviceData,
        ]);
    }
}
