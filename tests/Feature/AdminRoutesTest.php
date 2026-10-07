<?php

use App\Models\User;

it('redirects guests to login when accessing admin panel', function () {
    $response = $this->get('/admin');
    $response->assertRedirect('/admin/login');
});

it('allows authenticated users to access admin panel', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/admin');
    $response->assertStatus(200);
});
