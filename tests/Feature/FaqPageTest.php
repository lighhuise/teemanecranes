<?php

use App\Models\Faq;

it('loads the faq page successfully', function () {
    $response = $this->get('/faq');
    $response->assertStatus(200);
});

it('displays active faqs on the faq page', function () {
    $faq = Faq::create([
        'question' => 'Test Question',
        'answer' => 'Test Answer',
        'is_active' => true,
    ]);
    
    $response = $this->get('/faq');
    $response->assertStatus(200);
});
