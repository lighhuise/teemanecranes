<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'MOBILE CRANE HIRE',
                'short_description' => 'Reliable mobile cranes for construction, industrial and infrastructure projects.',
            ],
            [
                'title' => 'HEAVY LIFTING',
                'short_description' => 'Precision lifting solutions for demanding loads and complex environments.',
            ],
            [
                'title' => 'RIGGING SERVICES',
                'short_description' => 'Professional rigging, load handling and lifting support.',
            ],
            [
                'title' => 'CRANE TRUCK HIRE',
                'short_description' => 'Flexible lifting, loading and transport solutions.',
            ],
            [
                'title' => 'HEAVY HAULAGE',
                'short_description' => 'Specialised transport for oversized, overweight and high-value equipment.',
            ],
            [
                'title' => 'MACHINERY RELOCATION',
                'short_description' => 'Safe and efficient relocation of industrial machinery and specialised equipment.',
            ],
            [
                'title' => 'ABNORMAL TRANSPORT',
                'short_description' => 'Transport solutions for loads exceeding conventional size or weight limits.',
            ],
            [
                'title' => 'LIFT PLANNING',
                'short_description' => 'Detailed planning and technical expertise for complex lifting operations.',
            ]
        ];

        $faker = Faker::create();

        foreach ($services as $serviceData) {
            Service::create([
                'title' => ucwords(strtolower($serviceData['title'])),
                'slug' => Str::slug($serviceData['title']),
                'short_description' => $serviceData['short_description'],
                'description' => $faker->paragraphs(3, true),
                'icon' => null,
                'image' => null,
            ]);
        }
    }
}
