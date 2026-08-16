<?php

namespace App\Http\Controllers;

use App\Events\ContactMessageSubmitted;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Honeypot\Honeypot;

class ContactController extends Controller
{
    public function index(Honeypot $honeypot): Response
    {
        return Inertia::render('contact-us', [
            'honeypot' => $honeypot->toArray(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'message' => 'required|string',
        ]);

        ContactMessageSubmitted::dispatch($validated);

        return back()->with('success', 'Thank you for contacting us. We will get back to you shortly.');
    }
}
