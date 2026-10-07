<?php

use App\Events\ContactMessageSubmitted;
use Illuminate\Support\Facades\Event;

it('loads the contact page successfully', function () {
    $response = $this->get('/contact-us');
    $response->assertStatus(200);
});

it('can submit the contact form', function () {
    Event::fake();

    $response = $this->post('/contact-us', [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'phone' => '1234567890',
        'message' => 'This is a test message.',
    ]);

    $response->assertRedirect();
    $response->assertSessionHas('success');

    Event::assertDispatched(ContactMessageSubmitted::class);
});
