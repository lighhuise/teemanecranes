<?php

namespace App\Models;

use App\Traits\ClearsCache;
use App\Traits\HasAdvancedMediaConversions;
use Database\Factories\ServiceFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Service extends Model implements HasMedia
{
    /** @use HasFactory<ServiceFactory> */
    use ClearsCache, HasAdvancedMediaConversions, HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $appends = [
        'featured_image_url',
        'featured_image_conversions',
        'featured_image_orientation',
        'featured_image_aspect_ratio',
    ];

    protected $casts = [
        'content_blocks' => 'array',
    ];

    /**
     * Resolve the featured image URL from Spatie Media Library or fallback column/blocks.
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

                if (! $url && $this->image) {
                    $url = str_starts_with($this->image, 'http')
                        ? $this->image
                        : Storage::disk('public')->url($this->image);
                }

                if (! $url && ! empty($this->content_blocks) && is_array($this->content_blocks)) {
                    foreach ($this->content_blocks as $block) {
                        $type = $block['type'] ?? '';
                        $data = $block['data'] ?? [];
                        if ($type === 'image' && ! empty($data['image'])) {
                            $url = str_starts_with($data['image'], 'http')
                                ? $data['image']
                                : Storage::disk('public')->url($data['image']);
                            break;
                        }
                        if (($type === 'gallery' || $type === 'media_text') && ! empty($data['images']) && is_array($data['images'])) {
                            $first = array_values(array_filter($data['images']))[0] ?? null;
                            if ($first) {
                                $url = str_starts_with($first, 'http')
                                    ? $first
                                    : Storage::disk('public')->url($first);
                                break;
                            }
                        }
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

                if ($this->image) {
                    return self::resolveImageItemMeta($this->image)['orientation'];
                }

                if (! empty($this->content_blocks) && is_array($this->content_blocks)) {
                    foreach ($this->content_blocks as $block) {
                        $type = $block['type'] ?? '';
                        $data = $block['data'] ?? [];
                        if ($type === 'image' && ! empty($data['image'])) {
                            return self::resolveImageItemMeta($data['image'])['orientation'];
                        }
                        if (($type === 'gallery' || $type === 'media_text') && ! empty($data['images']) && is_array($data['images'])) {
                            $first = array_values(array_filter($data['images']))[0] ?? null;
                            if ($first) {
                                return self::resolveImageItemMeta($first)['orientation'];
                            }
                        }
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

                if ($this->image) {
                    return (float) self::resolveImageItemMeta($this->image)['aspect_ratio'];
                }

                if (! empty($this->content_blocks) && is_array($this->content_blocks)) {
                    foreach ($this->content_blocks as $block) {
                        $type = $block['type'] ?? '';
                        $data = $block['data'] ?? [];
                        if ($type === 'image' && ! empty($data['image'])) {
                            return (float) self::resolveImageItemMeta($data['image'])['aspect_ratio'];
                        }
                        if (($type === 'gallery' || $type === 'media_text') && ! empty($data['images']) && is_array($data['images'])) {
                            $first = array_values(array_filter($data['images']))[0] ?? null;
                            if ($first) {
                                return (float) self::resolveImageItemMeta($first)['aspect_ratio'];
                            }
                        }
                    }
                }

                return 1.778;
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

    public function registerMediaCollections(): void
    {
        // Single featured / hero image managed by Spatie
        $this->addMediaCollection('featured_image')->singleFile();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->registerAdvancedMediaConversions($media);
    }
}
