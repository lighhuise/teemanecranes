<?php

use App\Filament\Widgets\StatsOverview;
use App\Models\Faq;
use App\Models\Project;
use App\Models\Service;
use App\Models\User;
use Livewire\Livewire;

it('renders stats overview widget on the admin dashboard', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/admin');

    $response->assertSuccessful();
    $response->assertSee('Total Projects');
    $response->assertSee('Total Services');
    $response->assertSee('Total FAQs');
});

it('calculates and displays project, service, and faq stats', function () {
    Project::factory()->count(3)->create(['is_active' => true]);
    Project::factory()->count(1)->create(['is_active' => false]);

    Service::factory()->count(2)->create(['is_active' => true]);
    Service::factory()->count(1)->create(['is_active' => false]);

    Faq::create([
        'question' => 'What services do you provide?',
        'answer' => 'We provide crane hire and lifting solutions.',
        'is_active' => true,
    ]);
    Faq::create([
        'question' => 'Where are you located?',
        'answer' => 'In South Africa.',
        'is_active' => false,
    ]);

    Livewire::test(StatsOverview::class)
        ->assertSuccessful()
        ->assertSee('Total Projects')
        ->assertSee('4')
        ->assertSee('3 active')
        ->assertSee('Total Services')
        ->assertSee('3')
        ->assertSee('2 active')
        ->assertSee('Total FAQs')
        ->assertSee('2')
        ->assertSee('1 active');
});
