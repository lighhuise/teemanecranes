<x-mail::message>
# Thank You for Contacting Teemane Cranes

Hi {{ $data['name'] }},

We have received your message and appreciate you taking the time to reach out to us. One of our team members will review your inquiry and get back to you as soon as possible.

Here is a copy of your message:
> {{ $data['message'] }}

<x-mail::button :url="config('app.url')">
Return to Website
</x-mail::button>

Best regards,<br>
The {{ config('app.name') }} Team
</x-mail::message>
