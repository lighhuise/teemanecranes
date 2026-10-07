<?php

use App\Models\Faq;
use Illuminate\Support\Facades\Cache;

it('clears cache when faq is created or updated', function () {
    Cache::put('test_key', 'test_value');
    
    expect(Cache::has('test_key'))->toBeTrue();

    $faq = Faq::create([
        'question' => 'Q1',
        'answer' => 'A1',
        'is_active' => true,
    ]);

    expect(Cache::has('test_key'))->toBeFalse();

    Cache::put('test_key', 'test_value');
    $faq->update(['question' => 'Q2']);

    expect(Cache::has('test_key'))->toBeFalse();

    Cache::put('test_key', 'test_value');
    $faq->delete();

    expect(Cache::has('test_key'))->toBeFalse();
});
