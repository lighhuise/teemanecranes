<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomePageIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('home', [
            'services' => Cache::remember('homepage_services', 86400, fn () => array_values(Service::with('media')->where('is_active', true)->take(3)->get()->toArray())),
        ]);
    }
}
