<?php

it('loads the privacy policy page successfully', function () {
    $response = $this->get('/privacy-policy');
    $response->assertStatus(200);
});

it('loads the terms of service page successfully', function () {
    $response = $this->get('/terms-of-service');
    $response->assertStatus(200);
});
