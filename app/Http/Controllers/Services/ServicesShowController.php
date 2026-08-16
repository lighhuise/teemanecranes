<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicesShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Service $service)
    {
        return Inertia::render('services/show', [
            'service' => $service,
        ]);
    }
}
