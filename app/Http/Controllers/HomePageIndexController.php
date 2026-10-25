<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class HomePageIndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return Inertia::render('home', [
            'services' => Cache::remember('homepage_services', 86400, fn () => array_values(Service::with('media')->where('is_active', true)->take(3)->get()->toArray())),
            'projects' => Cache::remember('homepage_projects', 86400, function () {
                return Project::query()
                    ->with('media')
                    ->where('is_active', true)
                    ->orderedByProjectDate()
                    ->take(3)
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
                            'video_url' => $project->video_url,
                            'embed_video_url' => $project->embed_video_url,
                            'project_date' => $project->formatted_project_date,
                            'project_date_raw' => $project->project_date?->toDateString(),
                            'total_images' => $totalImages,
                        ];
                    })
                    ->values()
                    ->all();
            }),
        ]);
    }
}
