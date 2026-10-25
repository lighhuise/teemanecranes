<?php

use App\Models\Project;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Inertia\Testing\AssertableInertia as Assert;

it('can create a project with title, description, content, and galleries', function () {
    $project = Project::factory()->create([
        'title' => 'Harbour Crane Installation',
        'slug' => 'harbour-crane-installation',
        'description' => 'A complex maritime lift operation at the harbour.',
        'content' => '<p>Detailed case study of the crane installation.</p>',
        'gallery' => [
            'projects/gallery/lift-1.jpg',
            'projects/gallery/lift-2.jpg',
            'projects/gallery/lift-3.jpg',
        ],
        'galleries' => [
            [
                'title' => 'Site Preparation',
                'description' => 'Staging the 500-ton crane.',
                'images' => [
                    'projects/galleries/prep-1.jpg',
                    'projects/galleries/prep-2.jpg',
                ],
            ],
            [
                'title' => 'Tandem Lift Operation',
                'description' => 'Hoisting the harbor crane boom.',
                'images' => [
                    'projects/galleries/lift-1.jpg',
                    'projects/galleries/lift-2.jpg',
                    'projects/galleries/lift-3.jpg',
                ],
            ],
        ],
        'is_active' => true,
    ]);

    expect($project->title)->toBe('Harbour Crane Installation')
        ->and($project->slug)->toBe('harbour-crane-installation')
        ->and($project->description)->toBe('A complex maritime lift operation at the harbour.')
        ->and($project->content)->toBe('<p>Detailed case study of the crane installation.</p>')
        ->and($project->gallery)->toBeArray()->toHaveCount(3)
        ->and($project->galleries)->toBeArray()->toHaveCount(2)
        ->and($project->galleries[0]['title'])->toBe('Site Preparation')
        ->and($project->galleries[0]['images'])->toHaveCount(2)
        ->and($project->galleries[1]['title'])->toBe('Tandem Lift Operation')
        ->and($project->galleries[1]['images'])->toHaveCount(3)
        ->and($project->is_active)->toBeTrue();

    expect($project->gallery_image_urls)->toBeArray()->toHaveCount(3)
        ->and($project->galleries_with_urls)->toBeArray()->toHaveCount(2)
        ->and($project->galleries_with_urls[0]['image_urls'])->toHaveCount(2);
});

it('strictly preserves the exact order of images in main gallery and custom galleries', function () {
    $project = Project::factory()->create([
        'gallery' => [
            'projects/gallery/third.jpg',
            'projects/gallery/first.jpg',
            'projects/gallery/second.jpg',
        ],
        'galleries' => [
            [
                'title' => 'Phase 2',
                'description' => 'Second phase',
                'images' => [
                    'projects/galleries/b.jpg',
                    'projects/galleries/a.jpg',
                ],
            ],
            [
                'title' => 'Phase 1',
                'description' => 'First phase',
                'images' => [
                    'projects/galleries/z.jpg',
                    'projects/galleries/y.jpg',
                ],
            ],
        ],
    ]);

    expect($project->gallery_image_urls[0])->toContain('third.jpg')
        ->and($project->gallery_image_urls[1])->toContain('first.jpg')
        ->and($project->gallery_image_urls[2])->toContain('second.jpg');

    expect($project->galleries_with_urls[0]['title'])->toBe('Phase 2')
        ->and($project->galleries_with_urls[0]['image_urls'][0])->toContain('b.jpg')
        ->and($project->galleries_with_urls[0]['image_urls'][1])->toContain('a.jpg')
        ->and($project->galleries_with_urls[1]['title'])->toBe('Phase 1')
        ->and($project->galleries_with_urls[1]['image_urls'][0])->toContain('z.jpg')
        ->and($project->galleries_with_urls[1]['image_urls'][1])->toContain('y.jpg');
});

it('loads the projects index page with active projects', function () {
    Project::factory()->create(['title' => 'Active Project', 'is_active' => true]);
    Project::factory()->create(['title' => 'Hidden Project', 'is_active' => false]);

    $response = $this->get('/projects');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('projects/index')
        ->has('projects', 1)
        ->where('projects.0.title', 'Active Project')
    );
});

it('orders projects by project_date descending on the projects index page', function () {
    Cache::flush();

    Project::factory()->create([
        'title' => 'Older Project',
        'project_date' => '2023-01-15',
        'is_active' => true,
    ]);
    Project::factory()->create([
        'title' => 'Newest Project',
        'project_date' => '2026-03-20',
        'is_active' => true,
    ]);
    Project::factory()->create([
        'title' => 'Middle Project',
        'project_date' => '2024-06-10',
        'is_active' => true,
    ]);

    $response = $this->get('/projects');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('projects/index')
        ->has('projects', 3)
        ->where('projects.0.title', 'Newest Project')
        ->where('projects.1.title', 'Middle Project')
        ->where('projects.2.title', 'Older Project')
    );
});

it('orders projects by project_date descending on the homepage', function () {
    Cache::flush();

    Project::factory()->create([
        'title' => 'Oldest Crane Job',
        'project_date' => '2022-05-01',
        'is_active' => true,
    ]);
    Project::factory()->create([
        'title' => 'Latest Crane Job',
        'project_date' => '2026-08-10',
        'is_active' => true,
    ]);
    Project::factory()->create([
        'title' => 'Recent Crane Job',
        'project_date' => '2025-11-20',
        'is_active' => true,
    ]);

    $response = $this->get('/');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('home')
        ->has('projects', 3)
        ->where('projects.0.title', 'Latest Crane Job')
        ->where('projects.1.title', 'Recent Crane Job')
        ->where('projects.2.title', 'Oldest Crane Job')
    );
});

it('loads the single project showcase page', function () {
    $project = Project::factory()->create([
        'title' => 'Cape Town Port Crane Lift',
        'slug' => 'cape-town-port-crane-lift',
        'is_active' => true,
    ]);

    $response = $this->get('/projects/cape-town-port-crane-lift');

    $response->assertStatus(200);
    $response->assertInertia(fn (Assert $page) => $page
        ->component('projects/show')
        ->has('project')
        ->where('project.title', 'Cape Town Port Crane Lift')
        ->has('relatedProjects')
    );
});

it('returns 404 when viewing an inactive project', function () {
    Project::factory()->create([
        'slug' => 'secret-project',
        'is_active' => false,
    ]);

    $response = $this->get('/projects/secret-project');
    $response->assertStatus(404);
});

it('clears project cache when a project is updated', function () {
    Cache::put('projects_index', 'cached_data');
    expect(Cache::has('projects_index'))->toBeTrue();

    $project = Project::factory()->create();
    expect(Cache::has('projects_index'))->toBeFalse();

    Cache::put('projects_index', 'cached_data');
    $project->update(['title' => 'Updated Project Title']);
    expect(Cache::has('projects_index'))->toBeFalse();
});

it('redirects guests attempting to access admin projects', function () {
    $this->get('/admin/projects')->assertRedirect('/admin/login');
    $this->get('/admin/projects/create')->assertRedirect('/admin/login');
});

it('allows authenticated users to view admin projects list and create pages', function () {
    $user = User::factory()->create();
    $project = Project::factory()->create();

    $this->actingAs($user)
        ->get('/admin/projects')
        ->assertSuccessful();

    $this->actingAs($user)
        ->get('/admin/projects/create')
        ->assertSuccessful();

    $this->actingAs($user)
        ->get("/admin/projects/{$project->id}/edit")
        ->assertSuccessful();
});
