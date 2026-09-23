<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicesIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Service $services)
    {
        return Inertia::render('services/index', [
            'services' => \Illuminate\Support\Facades\Cache::remember('services_index', 86400, fn () => array_values($services::where('is_active', true)->get()->toArray())),
        ]);
    }
}
