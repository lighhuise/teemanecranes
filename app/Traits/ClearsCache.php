<?php

namespace App\Traits;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;

trait ClearsCache
{
    /**
     * Boot the trait and register event listeners.
     */
    public static function bootClearsCache(): void
    {
        static::saved(function () {
            Cache::flush();
        });

        static::deleted(function () {
            Cache::flush();
        });
    }
}
