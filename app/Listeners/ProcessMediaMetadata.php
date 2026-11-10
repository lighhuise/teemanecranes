<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Cache;
use Spatie\Image\Image;
use Spatie\MediaLibrary\MediaCollections\Events\MediaHasBeenAddedEvent;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ProcessMediaMetadata
{
    /**
     * Handle the event when media is added to the library.
     */
    public function handle(MediaHasBeenAddedEvent $event): void
    {
        static::process($event->media);
    }

    /**
     * Safely extract EXIF and orientation metadata and store in custom properties.
     */
    public static function process(Media $media): void
    {
        if (! $media->mime_type || ! str_starts_with($media->mime_type, 'image/')) {
            return;
        }

        try {
            $path = $media->getPath();
        } catch (\Throwable) {
            return;
        }

        if (! $path || ! file_exists($path)) {
            return;
        }

        try {
            $image = Image::load($path);
            $rawWidth = $image->getWidth();
            $rawHeight = $image->getHeight();

            $exifOrientation = 0;
            if (function_exists('exif_read_data')) {
                $exif = @exif_read_data($path);
                if (is_array($exif) && ! empty($exif['Orientation'])) {
                    $exifOrientation = (int) $exif['Orientation'];
                }
            }

            // EXIF orientations 5, 6, 7, 8 swap physical width and height
            if (in_array($exifOrientation, [5, 6, 7, 8], true)) {
                $width = $rawHeight;
                $height = $rawWidth;
            } else {
                $width = $rawWidth;
                $height = $rawHeight;
            }

            $type = 'square';
            if ($width > $height) {
                $type = 'landscape';
            } elseif ($height > $width) {
                $type = 'portrait';
            }

            $aspectRatio = $height > 0 ? round($width / $height, 3) : 1.0;

            $media->setCustomProperty('width', $width);
            $media->setCustomProperty('height', $height);
            $media->setCustomProperty('orientation', $type);
            $media->setCustomProperty('aspect_ratio', $aspectRatio);
            $media->setCustomProperty('mime_type', $media->mime_type);
            $media->setCustomProperty('exif_orientation', $exifOrientation);
            $media->saveQuietly();

            Cache::flush();
        } catch (\Throwable) {
            // Silently fall back if the file cannot be parsed
        }
    }
}
