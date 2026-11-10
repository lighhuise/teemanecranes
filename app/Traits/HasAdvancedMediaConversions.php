<?php

namespace App\Traits;

use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

trait HasAdvancedMediaConversions
{
    /**
     * Register conversions for Spatie Media Library models.
     */
    public function registerAdvancedMediaConversions(?Media $media = null): void
    {
        $this->addStandardConversions($media);
    }

    protected function addStandardConversions(?Media $media = null): void
    {
        // Thumb (Max 600x600: preserves 100% full uncropped image content)
        $this->addMediaConversion('thumb')
            ->orientation()
            ->width(600)
            ->height(600)
            ->fit(Fit::Max, 600, 600)
            ->format('webp')
            ->quality(82)
            ->nonQueued();

        // Medium (Max 1000x1000: preserves 100% full uncropped image content)
        $this->addMediaConversion('medium')
            ->orientation()
            ->width(1000)
            ->height(1000)
            ->fit(Fit::Max, 1000, 1000)
            ->format('webp')
            ->quality(85)
            ->nonQueued();

        // Display (Max 1600x1600: preserves 100% full uncropped image content)
        $this->addMediaConversion('display')
            ->orientation()
            ->width(1600)
            ->height(1600)
            ->fit(Fit::Max, 1600, 1600)
            ->format('webp')
            ->quality(85)
            ->nonQueued();

        // Large (Max 1920x1920: preserves 100% full uncropped image content, never upscale)
        $this->addMediaConversion('large')
            ->orientation()
            ->width(1920)
            ->height(1920)
            ->fit(Fit::Max, 1920, 1920)
            ->format('webp')
            ->quality(88)
            ->nonQueued();
    }
}
