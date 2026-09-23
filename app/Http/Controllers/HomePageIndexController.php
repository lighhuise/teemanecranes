<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

use App\Models\Service;

class HomePageIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('home', [
            'services' => Cache::remember('homepage_services', 86400, fn () => array_values(Service::take(4)->get()->toArray())),
        ]);
    }
}
