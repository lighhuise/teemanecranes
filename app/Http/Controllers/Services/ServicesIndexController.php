<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage as StorageBlock;
use Inertia\Inertia;

class ServicesIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Service $services)
    {
        return Inertia::render('services/index', [
            'services' => Cache::remember('services_index', 86400, function () use ($services) {
                return $services::with('media')
                    ->where('is_active', true)
                    ->get()
                    ->map(function (Service $service) {
                        $blocks = collect($service->content_blocks ?? [])->map(function (array $block) {
                            $data = $block['data'] ?? [];

                            return match ($block['type'] ?? '') {
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

                        $array = $service->toArray();
                        $array['content_blocks'] = $blocks;

                        return $array;
                    })
                    ->values()
                    ->toArray();
            }),
        ]);
    }
}
