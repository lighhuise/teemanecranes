<?php

namespace App\Models;

use App\Traits\ClearsCache;
use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Project extends Model implements HasMedia
{
    /** @use HasFactory<ProjectFactory> */
    use ClearsCache, HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $appends = [
        'featured_image_url',
        'gallery_image_urls',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'gallery' => 'array',
            'galleries' => 'array',
            'is_active' => 'boolean',
        ];
    }

    /**
     * Resolve the featured image URL from Spatie Media Library or fallback.
     */
    protected function featuredImageUrl(): Attribute
    {
        return Attribute::make(
            get: function (): ?string {
                $url = $this->getFirstMediaUrl('featured_image', 'thumb')
                    ?: $this->getFirstMediaUrl('featured_image', 'webp')
                    ?: $this->getFirstMediaUrl('featured_image');

                if (! $url && ! empty($this->gallery) && is_array($this->gallery)) {
                    $first = $this->gallery[0] ?? null;
                    if ($first) {
                        $url = str_starts_with($first, 'http')
                            ? $first
                            : Storage::disk('public')->url($first);
                    }
                }

                return $url ?: null;
            },
        );
    }

    /**
     * Resolve all URLs for main gallery images.
     */
    protected function galleryImageUrls(): Attribute
    {
        return Attribute::make(
            get: function (): array {
                $urls = [];

                // 1. Spatie media collection
                $mediaItems = $this->getMedia('gallery');
                if ($mediaItems->isNotEmpty()) {
                    foreach ($mediaItems as $media) {
                        $urls[] = $media->getUrl('thumb') ?: $media->getUrl();
                    }
                }

                // 2. Direct paths stored in json column
                if (! empty($this->gallery) && is_array($this->gallery)) {
                    foreach ($this->gallery as $path) {
                        if ($path) {
                            $urls[] = str_starts_with($path, 'http')
                                ? $path
                                : Storage::disk('public')->url($path);
                        }
                    }
                }

                return array_values(array_unique($urls));
            },
        );
    }

    /**
     * Resolve galleries with full image URLs for frontend use.
     *
     * @return array<int, array{title: string, description: ?string, images: array<int, string>, image_urls: array<int, string>}>
     */
    protected function galleriesWithUrls(): Attribute
    {
        return Attribute::make(
            get: function (): array {
                if (empty($this->galleries) || ! is_array($this->galleries)) {
                    return [];
                }

                return array_map(function ($gallery) {
                    $images = (array) ($gallery['images'] ?? []);
                    $imageUrls = array_map(function ($path) {
                        return str_starts_with($path, 'http')
                            ? $path
                            : Storage::disk('public')->url($path);
                    }, $images);

                    return [
                        'title' => (string) ($gallery['title'] ?? ''),
                        'description' => isset($gallery['description']) ? (string) $gallery['description'] : null,
                        'images' => $images,
                        'image_urls' => $imageUrls,
                    ];
                }, $this->galleries);
            },
        );
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('featured_image')->singleFile();
        $this->addMediaCollection('gallery');
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('webp')
            ->format('webp')
            ->nonQueued();

        $this->addMediaConversion('thumb')
            ->width(800)
            ->format('webp')
            ->nonQueued();
    }
}
