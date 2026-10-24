<?php

namespace App\Listeners;

use App\Events\ContactMessageSubmitted;
use App\Mail\ContactNotification;
use Illuminate\Support\Facades\Mail;

class SendContactNotificationEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ContactMessageSubmitted $event): void
    {
        $contactEmail = env('CONTACT_EMAIL', 'admin@teemanecranes.test');
        Mail::to($contactEmail)->send(new ContactNotification($event->data));
    }
}
