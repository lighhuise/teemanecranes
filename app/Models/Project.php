<?php

namespace App\Models;

use App\Traits\ClearsCache;
use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Builder;
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
        'embed_video_url',
        'formatted_project_date',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'project_date' => 'date',
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
                    $orderedGallery = array_values(array_filter($this->gallery));
                    $first = $orderedGallery[0] ?? null;
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
     * Resolve all URLs for main gallery images strictly preserving order.
     */
    protected function galleryImageUrls(): Attribute
    {
        return Attribute::make(
            get: function (): array {
                $urls = [];

                // 1. Spatie media collection ordered by order_column
                $mediaItems = $this->getMedia('gallery')->sortBy('order_column');
                if ($mediaItems->isNotEmpty()) {
                    foreach ($mediaItems as $media) {
                        $urls[] = $media->getUrl('thumb') ?: $media->getUrl();
                    }
                }

                // 2. Direct paths stored in json column in exact array order
                if (! empty($this->gallery) && is_array($this->gallery)) {
                    foreach (array_values($this->gallery) as $path) {
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
     * Resolve galleries with full image URLs for frontend use, strictly preserving gallery and image order.
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

                return array_values(array_map(function ($gallery) {
                    $images = array_values(array_filter((array) ($gallery['images'] ?? [])));
                    $imageUrls = array_values(array_map(function ($path) {
                        return str_starts_with($path, 'http')
                            ? $path
                            : Storage::disk('public')->url($path);
                    }, $images));

                    return [
                        'title' => (string) ($gallery['title'] ?? ''),
                        'description' => isset($gallery['description']) ? (string) $gallery['description'] : null,
                        'images' => $images,
                        'image_urls' => $imageUrls,
                    ];
                }, array_values($this->galleries)));
            },
        );
    }

    /**
     * Resolve YouTube or Vimeo embed URL if a valid video link is present.
     */
    protected function embedVideoUrl(): Attribute
    {
        return Attribute::make(
            get: function (): ?string {
                if (empty($this->video_url)) {
                    return null;
                }

                $url = trim($this->video_url);

                // YouTube: standard watch, short URL, embed, or shorts
                if (preg_match('/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i', $url, $matches)) {
                    return 'https://www.youtube-nocookie.com/embed/'.$matches[1];
                }

                // Vimeo: standard, channels, groups, or player
                if (preg_match('/(?:vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/[^\/]*\/videos\/|album\/\d+\/video\/|video\/)?|player\.vimeo\.com\/video\/)([0-9]+)/i', $url, $matches)) {
                    $vimeoId = end($matches);

                    return 'https://player.vimeo.com/video/'.$vimeoId;
                }

                return null;
            },
        );
    }

    /**
     * Resolve formatted project execution date.
     */
    protected function formattedProjectDate(): Attribute
    {
        return Attribute::make(
            get: fn (): ?string => $this->project_date?->format('F Y'),
        );
    }

    /**
     * Scope a query to order projects by project_date descending with fallback to created_at descending.
     */
    public function scopeOrderedByProjectDate(Builder $query): Builder
    {
        return $query->orderByDesc('project_date')->latest('created_at');
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
