<?php

use App\Models\Service;

it('loads the services index page successfully', function () {
    $response = $this->get('/services');
    $response->assertStatus(200);
});

it('loads a single service page successfully', function () {
    $service = Service::factory()->create(['is_active' => true]);
    
    $response = $this->get('/services/' . $service->slug);
    $response->assertStatus(200);
});
