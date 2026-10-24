<?php

namespace App\Http\Controllers\Projects;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class ProjectsShowController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Project $project): Response
    {
        abort_if(! $project->is_active, 404);

        $cacheKey = 'project_show_'.$project->id;

        $data = Cache::remember($cacheKey, 86400, function () use ($project) {
            $project->load('media');

            $related = Project::query()
                ->where('is_active', true)
                ->where('id', '!=', $project->id)
                ->latest()
                ->limit(3)
                ->get()
                ->map(fn (Project $p) => [
                    'id' => $p->id,
                    'title' => $p->title,
                    'slug' => $p->slug,
                    'description' => $p->description,
                    'featured_image_url' => $p->featured_image_url,
                ])
                ->values()
                ->all();

            return [
                'project' => [
                    'id' => $project->id,
                    'title' => $project->title,
                    'slug' => $project->slug,
                    'description' => $project->description,
                    'content' => $project->content,
                    'featured_image_url' => $project->featured_image_url,
                    'gallery_image_urls' => $project->gallery_image_urls,
                    'galleries_with_urls' => $project->galleries_with_urls,
                    'created_at' => $project->created_at?->format('F Y'),
                ],
                'related_projects' => $related,
            ];
        });

        return Inertia::render('projects/show', [
            'project' => $data['project'],
            'relatedProjects' => $data['related_projects'],
        ]);
    }
}
