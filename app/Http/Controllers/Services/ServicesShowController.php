<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ServicesShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Service $service)
    {
        $service->load('media');

        $featuredImage = $service->getFirstMediaUrl('featured_image', 'webp')
            ?: $service->getFirstMediaUrl('featured_image');

        if (! $featuredImage && $service->image) {
            $featuredImage = str_starts_with($service->image, 'http')
                ? $service->image
                : Storage::disk('public')->url($service->image);
        }

        // Resolve public storage URLs for file-based block images
        $blocks = collect($service->content_blocks ?? [])->map(function (array $block) {
            $data = $block['data'] ?? [];

            return match ($block['type']) {
                'image' => array_merge($block, [
                    'data' => array_merge($data, [
                        'image_url' => isset($data['image'])
                            ? (str_starts_with($data['image'], 'http') ? $data['image'] : Storage::disk('public')->url($data['image']))
                            : null,
                    ]),
                ]),
                'gallery', 'media_text' => array_merge($block, [
                    'data' => array_merge($data, [
                        'image_urls' => collect($data['images'] ?? [])->map(
                            fn ($path) => str_starts_with($path, 'http') ? $path : Storage::disk('public')->url($path)
                        )->values()->toArray(),
                    ]),
                ]),
                default => $block,
            };
        })->values()->toArray();

        return Inertia::render('services/show', [
            'service' => [
                'id' => $service->id,
                'title' => $service->title,
                'slug' => $service->slug,
                'short_description' => $service->short_description,
                'description' => $service->description,
                'featured_image_url' => $featuredImage ?: null,
                'content_blocks' => $blocks,
            ],
        ]);
    }
}
