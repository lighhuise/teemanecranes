<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faq;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class FaqController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $faqs = Cache::remember('faqs_index', 86400, function () {
            return array_values(Faq::where('is_active', true)
                ->orderBy('sort_order')
                ->get()
                ->toArray());
        });

        return Inertia::render('faq', [
            'faqs' => $faqs
        ]);
    }
}
