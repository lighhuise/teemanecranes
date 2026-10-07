<?php

use App\Models\Employee;

it('loads the our team page successfully', function () {
    $response = $this->get('/our-team');
    $response->assertStatus(200);
});

it('displays employees on the team page', function () {
    Employee::factory()->create();
    
    $response = $this->get('/our-team');
    $response->assertStatus(200);
});
