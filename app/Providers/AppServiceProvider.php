<?php

namespace App\Providers;

use App\Listeners\ProcessMediaMetadata;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Spatie\MediaLibrary\MediaCollections\Events\MediaHasBeenAddedEvent;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::listen(
            MediaHasBeenAddedEvent::class,
            ProcessMediaMetadata::class,
        );

        Media::deleted(function () {
            Cache::flush();
        });

        config(['inertia.ssr.timeout' => 2]);

        if (Vite::isRunningHot()) {
            config(['inertia.ssr.enabled' => false]);
        }

        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
    }
}
