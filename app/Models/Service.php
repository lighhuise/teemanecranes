<?php

namespace App\Models;

use App\Traits\ClearsCache;
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
    use ClearsCache, HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $appends = [
        'featured_image_url',
    ];

    protected $casts = [
        'content_blocks' => 'array',
    ];

    /**
     * Resolve the featured image URL from Spatie Media Library or fallback column.
     */
    protected function featuredImageUrl(): Attribute
    {
        return Attribute::make(
            get: function (): ?string {
                $url = $this->getFirstMediaUrl('featured_image', 'thumb')
                    ?: $this->getFirstMediaUrl('featured_image', 'webp')
                    ?: $this->getFirstMediaUrl('featured_image');

                if (! $url && $this->image) {
                    $url = str_starts_with($this->image, 'http')
                        ? $this->image
                        : Storage::disk('public')->url($this->image);
                }

                return $url ?: null;
            },
        );
    }

    public function registerMediaCollections(): void
    {
        // Single featured / hero image managed by Spatie
        $this->addMediaCollection('featured_image')->singleFile();
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
