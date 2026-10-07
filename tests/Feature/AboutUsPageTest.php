<?php

it('loads the about us page successfully', function () {
    $response = $this->get('/about-us');
    $response->assertStatus(200);
});
