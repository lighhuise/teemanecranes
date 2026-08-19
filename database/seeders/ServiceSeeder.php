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
                'description' => '<p>Teemane Cranes offers a comprehensive fleet of mobile cranes designed to meet the demands of any construction or industrial project.</p>',
                'content_blocks' => [
                    ['type' => 'rich_text', 'data' => ['content' => '<h3>Versatile Lifting Solutions</h3><p>Whether you need a compact city crane for tight urban spaces or a high-capacity all-terrain crane, our fleet is meticulously maintained and ready to deploy.</p>']],
                    ['type' => 'image', 'data' => ['image' => 'https://images.unsplash.com/photo-1541888052528-7694901b08ce?auto=format&fit=crop&q=80&w=1200&h=600', 'alt' => 'Mobile Crane on site', 'caption' => 'High capacity mobile crane in action']],
                ],
            ],
            [
                'title' => 'HEAVY LIFTING',
                'short_description' => 'Precision lifting solutions for demanding loads and complex environments.',
                'description' => '<p>When standard lifting equipment falls short, our heavy lifting solutions provide the muscle and engineering required for your most demanding loads.</p>',
                'content_blocks' => [
                    ['type' => 'rich_text', 'data' => ['content' => '<h3>Engineering and Muscle</h3><p>We specialize in handling oversized components for mining, energy, and heavy industry using state-of-the-art lifting technology.</p>']],
                    ['type' => 'image', 'data' => ['image' => 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=1200&h=600', 'alt' => 'Heavy Lifting', 'caption' => 'Complex heavy lifting operation']],
                ],
            ],
            [
                'title' => 'RIGGING SERVICES',
                'short_description' => 'Professional rigging, load handling and lifting support.',
                'description' => '<p>Our professional rigging services form the backbone of any successful lifting operation, ensuring ultimate safety and balance.</p>',
                'content_blocks' => [
                    ['type' => 'rich_text', 'data' => ['content' => '<h3>Safety First</h3><p>From basic slinging to complex multi-crane lifts, our riggers identify and mitigate risks on site, adhering to international safety standards.</p>']],
                    ['type' => 'image', 'data' => ['image' => 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=1200&h=600', 'alt' => 'Rigging equipment', 'caption' => 'Professional rigging gear']],
                ],
            ],
            [
                'title' => 'CRANE TRUCK HIRE',
                'short_description' => 'Flexible lifting, loading and transport solutions.',
                'description' => '<p>For operations requiring both transport and lifting capabilities, our versatile crane trucks provide the perfect dual-purpose solution.</p>',
                'content_blocks' => [
                    ['type' => 'rich_text', 'data' => ['content' => '<h3>Dual-Purpose Efficiency</h3><p>Also known as boom trucks, these vehicles can load, transport, and unload heavy materials independently, reducing your project costs.</p>']],
                    ['type' => 'image', 'data' => ['image' => 'https://images.unsplash.com/photo-1581094369796-03487c653eb6?auto=format&fit=crop&q=80&w=1200&h=600', 'alt' => 'Crane Truck', 'caption' => 'Crane truck delivering materials']],
                ],
            ],
            [
                'title' => 'HEAVY HAULAGE',
                'short_description' => 'Specialised transport for oversized, overweight and high-value equipment.',
                'description' => '<p>Teemane Cranes is your trusted partner for heavy haulage, operating a fleet of heavy-duty prime movers and multi-axle trailers.</p>',
                'content_blocks' => [
                    ['type' => 'rich_text', 'data' => ['content' => '<h3>Logistics Handled</h3><p>Our dedicated transport logistics team handles route planning, permits, and escorts to ensure your cargo reaches its destination securely.</p>']],
                    ['type' => 'image', 'data' => ['image' => 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200&h=600', 'alt' => 'Heavy Haulage', 'caption' => 'Oversized transport on the highway']],
                ],
            ],
            [
                'title' => 'MACHINERY RELOCATION',
                'short_description' => 'Safe and efficient relocation of industrial machinery and specialised equipment.',
                'description' => '<p>We offer comprehensive machinery relocation services, covering dismantling, extraction, transport, and final positioning.</p>',
                'content_blocks' => [
                    ['type' => 'rich_text', 'data' => ['content' => '<h3>Precision Moves</h3><p>Using specialized skates and jacks, our crews maneuver heavy machinery through confined spaces with minimal disruption.</p>']],
                    ['type' => 'image', 'data' => ['image' => 'https://images.unsplash.com/photo-1565439390124-b5f7e7f7bb10?auto=format&fit=crop&q=80&w=1200&h=600', 'alt' => 'Factory Machinery', 'caption' => 'Industrial equipment relocation']],
                ],
            ],
            [
                'title' => 'ABNORMAL TRANSPORT',
                'short_description' => 'Transport solutions for loads exceeding conventional size or weight limits.',
                'description' => '<p>When your cargo exceeds standard legal dimensions, our abnormal transport division provides custom-engineered transport solutions.</p>',
                'content_blocks' => [
                    ['type' => 'rich_text', 'data' => ['content' => '<h3>Custom Configurations</h3><p>Whether it\'s a wind turbine blade or a pressure vessel, we manage regulatory compliance and specialized trailer configurations.</p>']],
                    ['type' => 'image', 'data' => ['image' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200&h=600', 'alt' => 'Abnormal Transport', 'caption' => 'Transporting oversized industrial parts']],
                ],
            ],
            [
                'title' => 'LIFT PLANNING',
                'short_description' => 'Detailed planning and technical expertise for complex lifting operations.',
                'description' => '<p>Our comprehensive lift planning services provide the engineering assurance required for complex, high-risk operations.</p>',
                'content_blocks' => [
                    ['type' => 'rich_text', 'data' => ['content' => '<h3>3D Simulation</h3><p>Our technical team utilizes advanced CAD software and 3D simulation to produce detailed lift plans and rigging configurations.</p>']],
                    ['type' => 'image', 'data' => ['image' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200&h=600', 'alt' => 'Engineering Plans', 'caption' => 'CAD models for complex lift planning']],
                ],
            ]
        ];

        foreach ($services as $serviceData) {
            Service::create([
                'title' => ucwords(strtolower($serviceData['title'])),
                'slug' => Str::slug($serviceData['title']),
                'short_description' => $serviceData['short_description'],
                'description' => $serviceData['description'],
                'content_blocks' => $serviceData['content_blocks'] ?? null,
                'icon' => null,
                'image' => null,
            ]);
        }
    }
}
