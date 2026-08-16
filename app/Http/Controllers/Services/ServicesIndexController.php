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
            'services' => $services::all(),
        ]);
    }
}
