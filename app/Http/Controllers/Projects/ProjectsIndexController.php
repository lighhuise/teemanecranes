<?php

namespace App\Http\Controllers\Projects;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class ProjectsIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): Response
    {
        $projects = Cache::remember('projects_index', 86400, function () {
            return Project::query()
                ->with('media')
                ->where('is_active', true)
                ->latest()
                ->get()
                ->map(function (Project $project) {
                    $totalImages = count($project->gallery_image_urls)
                        + collect($project->galleries_with_urls)->sum(fn ($g) => count($g['image_urls'] ?? []));

                    return [
                        'id' => $project->id,
                        'title' => $project->title,
                        'slug' => $project->slug,
                        'description' => $project->description,
                        'featured_image_url' => $project->featured_image_url,
                        'gallery_image_urls' => $project->gallery_image_urls,
                        'galleries_with_urls' => $project->galleries_with_urls,
                        'total_images' => $totalImages,
                    ];
                })
                ->values()
                ->all();
        });

        return Inertia::render('projects/index', [
            'projects' => $projects,
        ]);
    }
}
