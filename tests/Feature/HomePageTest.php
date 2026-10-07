<?php

use App\Models\Service;
use App\Models\Faq;

it('loads the home page successfully', function () {
    $response = $this->get('/');
    $response->assertStatus(200);
});

it('displays active services on the home page', function () {
    $service = Service::factory()->create(['is_active' => true]);
    
    $response = $this->get('/');
    $response->assertStatus(200);
});
