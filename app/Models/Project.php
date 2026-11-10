<?php

namespace App\Models;

use App\Traits\ClearsCache;
use App\Traits\HasAdvancedMediaConversions;
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
    use ClearsCache, HasAdvancedMediaConversions, HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $appends = [
        'featured_image_url',
        'featured_image_conversions',
        'featured_image_orientation',
        'featured_image_aspect_ratio',
        'gallery_image_urls',
        'gallery_images',
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
            'content_blocks' => 'array',
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
                $url = $this->getFirstMediaUrl('featured_image', 'large')
                    ?: $this->getFirstMediaUrl('featured_image', 'display')
                    ?: $this->getFirstMediaUrl('featured_image', 'medium')
                    ?: $this->getFirstMediaUrl('featured_image', 'webp')
                    ?: $this->getFirstMediaUrl('featured_image')
                    ?: $this->getFirstMediaUrl('featured_image', 'thumb');

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
     * Resolve all available image conversion URLs.
     *
     * @return Attribute<array{original: ?string, thumb: ?string, medium: ?string, display: ?string, large: ?string}, never>
     */
    protected function featuredImageConversions(): Attribute
    {
        return Attribute::make(
            get: function (): array {
                $media = $this->getFirstMedia('featured_image');
                if (! $media) {
                    $default = $this->featured_image_url;

                    return [
                        'original' => $default,
                        'thumb' => $default,
                        'medium' => $default,
                        'display' => $default,
                        'large' => $default,
                    ];
                }

                return [
                    'original' => $media->getUrl(),
                    'thumb' => $media->getUrl('thumb') ?: $media->getUrl(),
                    'medium' => $media->getUrl('medium') ?: $media->getUrl(),
                    'display' => $media->getUrl('display') ?: $media->getUrl(),
                    'large' => $media->getUrl('large') ?: $media->getUrl(),
                ];
            },
        );
    }

    /**
     * Resolve the featured image orientation ('portrait' | 'landscape' | 'square').
     */
    protected function featuredImageOrientation(): Attribute
    {
        return Attribute::make(
            get: function (): string {
                $media = $this->getFirstMedia('featured_image');
                if ($media && $media->hasCustomProperty('orientation')) {
                    return (string) $media->getCustomProperty('orientation');
                }

                if (! empty($this->gallery) && is_array($this->gallery)) {
                    $ordered = array_values(array_filter($this->gallery));
                    if (! empty($ordered[0])) {
                        return self::resolveImageItemMeta($ordered[0])['orientation'];
                    }
                }

                return 'landscape';
            },
        );
    }

    /**
     * Resolve the featured image aspect ratio.
     */
    protected function featuredImageAspectRatio(): Attribute
    {
        return Attribute::make(
            get: function (): float {
                $media = $this->getFirstMedia('featured_image');
                if ($media && $media->hasCustomProperty('aspect_ratio')) {
                    return (float) $media->getCustomProperty('aspect_ratio');
                }

                if (! empty($this->gallery) && is_array($this->gallery)) {
                    $ordered = array_values(array_filter($this->gallery));
                    if (! empty($ordered[0])) {
                        return (float) self::resolveImageItemMeta($ordered[0])['aspect_ratio'];
                    }
                }

                return 1.778;
            },
        );
    }

    /**
     * Resolve full gallery images with orientation and dimension metadata.
     *
     * @return array<int, array{url: string, orientation: string, aspect_ratio: float, width: ?int, height: ?int}>
     */
    protected function galleryImages(): Attribute
    {
        return Attribute::make(
            get: function (): array {
                $items = [];

                // 1. Spatie media collection ordered by order_column
                $mediaItems = $this->getMedia('gallery')->sortBy('order_column');
                if ($mediaItems->isNotEmpty()) {
                    foreach ($mediaItems as $media) {
                        $url = $media->getUrl('large') ?: $media->getUrl('webp') ?: $media->getUrl();
                        $orientation = $media->getCustomProperty('orientation') ?? 'landscape';
                        $aspectRatio = (float) ($media->getCustomProperty('aspect_ratio') ?? 1.333);
                        $items[] = [
                            'url' => $url,
                            'orientation' => $orientation,
                            'aspect_ratio' => $aspectRatio,
                            'width' => $media->getCustomProperty('width'),
                            'height' => $media->getCustomProperty('height'),
                        ];
                    }
                }

                // 2. Direct paths stored in json column in exact array order
                if (! empty($this->gallery) && is_array($this->gallery)) {
                    foreach (array_values($this->gallery) as $path) {
                        if ($path) {
                            $items[] = self::resolveImageItemMeta($path);
                        }
                    }
                }

                // Deduplicate by URL
                $unique = [];
                foreach ($items as $item) {
                    if (! isset($unique[$item['url']])) {
                        $unique[$item['url']] = $item;
                    }
                }

                return array_values($unique);
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
     * Resolve galleries with full image URLs and metadata for frontend use.
     *
     * @return array<int, array{title: string, description: ?string, images: array<int, string>, image_urls: array<int, string>, images_meta: array<int, array{url: string, orientation: string, aspect_ratio: float, width: ?int, height: ?int}>}>
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
                    $imagesMeta = array_values(array_map(function ($path) {
                        return self::resolveImageItemMeta($path);
                    }, $images));
                    $imageUrls = array_values(array_map(fn ($m) => $m['url'], $imagesMeta));

                    return [
                        'title' => (string) ($gallery['title'] ?? ''),
                        'description' => isset($gallery['description']) ? (string) $gallery['description'] : null,
                        'images' => $images,
                        'image_urls' => $imageUrls,
                        'images_meta' => $imagesMeta,
                    ];
                }, array_values($this->galleries)));
            },
        );
    }

    /**
     * Resolve image metadata (orientation, aspect_ratio, width, height) from disk or URL.
     *
     * @return array{url: string, orientation: string, aspect_ratio: float, width: ?int, height: ?int}
     */
    public static function resolveImageItemMeta(string $pathOrUrl): array
    {
        $url = str_starts_with($pathOrUrl, 'http')
            ? $pathOrUrl
            : Storage::disk('public')->url($pathOrUrl);

        $orientation = 'landscape';
        $aspectRatio = 1.778;
        $width = null;
        $height = null;

        if (! str_starts_with($pathOrUrl, 'http')) {
            $fullPath = Storage::disk('public')->path($pathOrUrl);
            if (file_exists($fullPath)) {
                $size = @getimagesize($fullPath);
                if ($size && $size[0] > 0 && $size[1] > 0) {
                    $width = (int) $size[0];
                    $height = (int) $size[1];

                    // Check EXIF orientation if available
                    $exifOrientation = 0;
                    if (function_exists('exif_read_data')) {
                        $exif = @exif_read_data($fullPath);
                        if (is_array($exif) && ! empty($exif['Orientation'])) {
                            $exifOrientation = (int) $exif['Orientation'];
                        }
                    }

                    if (in_array($exifOrientation, [5, 6, 7, 8], true)) {
                        $effectiveWidth = $height;
                        $effectiveHeight = $width;
                    } else {
                        $effectiveWidth = $width;
                        $effectiveHeight = $height;
                    }

                    $orientation = $effectiveWidth > $effectiveHeight ? 'landscape' : ($effectiveHeight > $effectiveWidth ? 'portrait' : 'square');
                    $aspectRatio = $effectiveHeight > 0 ? round($effectiveWidth / $effectiveHeight, 3) : 1.0;
                }
            }
        }

        return [
            'url' => $url,
            'orientation' => $orientation,
            'aspect_ratio' => $aspectRatio,
            'width' => $effectiveWidth ?? $width,
            'height' => $effectiveHeight ?? $height,
        ];
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
            get: fn (): ?string => ($this->project_date ?? $this->created_at)?->format('F Y'),
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
        $this->registerAdvancedMediaConversions($media);
    }
}
