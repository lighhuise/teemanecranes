<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Project>
 */
class ProjectFactory extends Factory
{
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->unique()->sentence(3);

        return [
            'title' => ucwords(rtrim($title, '.')),
            'slug' => Str::slug($title),
            'description' => fake()->paragraph(),
            'content' => '<p>'.implode('</p><p>', fake()->paragraphs(3)).'</p>',
            'gallery' => [
                'projects/gallery/sample-1.jpg',
                'projects/gallery/sample-2.jpg',
            ],
            'galleries' => [
                [
                    'title' => 'Site Preparation',
                    'description' => 'Initial mobile crane staging and rigging.',
                    'images' => [
                        'projects/galleries/prep-1.jpg',
                        'projects/galleries/prep-2.jpg',
                    ],
                ],
                [
                    'title' => 'Heavy Lift Operation',
                    'description' => 'Tandem crane lift of structural components.',
                    'images' => [
                        'projects/galleries/lift-1.jpg',
                        'projects/galleries/lift-2.jpg',
                    ],
                ],
            ],
            'is_active' => true,
        ];
    }
}
