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
                'description' => '<p>Teemane Cranes offers a comprehensive fleet of mobile cranes designed to meet the demands of any construction, industrial, or infrastructure project. Whether you need a compact city crane for tight urban spaces or a high-capacity all-terrain crane for heavy lifting, our diverse fleet is meticulously maintained and ready to deploy.</p><p>Our operators are highly trained and certified, ensuring every lift is executed with the utmost safety and precision. We provide flexible hire options tailored to your project schedule, complete with rigorous safety protocols and ongoing technical support to keep your operations running smoothly.</p>',
            ],
            [
                'title' => 'HEAVY LIFTING',
                'short_description' => 'Precision lifting solutions for demanding loads and complex environments.',
                'description' => '<p>When standard lifting equipment falls short, our heavy lifting solutions provide the muscle and engineering required for your most demanding loads. We specialize in handling oversized and heavy components for sectors such as mining, energy, and heavy industry.</p><p>Our team utilizes state-of-the-art lifting technology and rigorous engineering assessments to execute complex lifts safely. From initial site surveys and lift planning to final execution, we bring specialized expertise to ensure that even the most challenging lifts are completed flawlessly and on time.</p>',
            ],
            [
                'title' => 'RIGGING SERVICES',
                'short_description' => 'Professional rigging, load handling and lifting support.',
                'description' => '<p>Our professional rigging services form the backbone of any successful lifting operation. We supply expert rigging crews equipped with top-tier hardware to secure, balance, and maneuver loads safely under all conditions.</p><p>From basic slinging and material handling to complex multi-crane lifts, our riggers are trained to identify and mitigate risks on site. We adhere to the highest international safety standards, ensuring that every load is perfectly balanced and safely handled from pick-up to placement.</p>',
            ],
            [
                'title' => 'CRANE TRUCK HIRE',
                'short_description' => 'Flexible lifting, loading and transport solutions.',
                'description' => '<p>For operations requiring both transport and lifting capabilities, our crane trucks provide the perfect dual-purpose solution. Also known as boom trucks or truck-mounted cranes, these versatile vehicles can load, transport, and unload heavy materials independently, significantly reducing your project costs and time.</p><p>Ideal for construction material delivery, equipment relocation, and site-to-site transfers, our crane trucks are operated by seasoned professionals who ensure quick setup and safe handling, keeping your logistics moving efficiently.</p>',
            ],
            [
                'title' => 'HEAVY HAULAGE',
                'short_description' => 'Specialised transport for oversized, overweight and high-value equipment.',
                'description' => '<p>Teemane Cranes is your trusted partner for heavy haulage and specialized transport. We operate a fleet of heavy-duty prime movers and multi-axle trailers designed specifically for transporting oversized, overweight, and extremely valuable cargo across challenging terrains.</p><p>Our dedicated transport logistics team handles everything from route planning and bridge surveys to acquiring necessary permits and organizing escort vehicles. We ensure that your critical infrastructure and heavy machinery reach their destination securely and exactly when required.</p>',
            ],
            [
                'title' => 'MACHINERY RELOCATION',
                'short_description' => 'Safe and efficient relocation of industrial machinery and specialised equipment.',
                'description' => '<p>Relocating industrial machinery requires more than just lifting power; it demands precision, planning, and specialized equipment. We offer comprehensive machinery relocation services, covering the entire process from dismantling and extraction to transport, offloading, and final positioning.</p><p>Using specialized skates, jacks, and compact lifting gear, our experienced crews can maneuver heavy machinery through confined spaces and tight factory layouts with minimal disruption to your ongoing operations.</p>',
            ],
            [
                'title' => 'ABNORMAL TRANSPORT',
                'short_description' => 'Transport solutions for loads exceeding conventional size or weight limits.',
                'description' => '<p>When your cargo exceeds standard legal dimensions or weight limits, our abnormal transport division steps in. We provide custom-engineered transport solutions for extremely long, wide, or tall loads that standard hauliers cannot accommodate.</p><p>We manage all regulatory compliance, escort coordination, and specialized trailer configurations. Whether it\'s a wind turbine blade, a massive pressure vessel, or modular construction units, we have the specialized equipment and expertise to deliver it safely.</p>',
            ],
            [
                'title' => 'LIFT PLANNING',
                'short_description' => 'Detailed planning and technical expertise for complex lifting operations.',
                'description' => '<p>A successful lift starts long before the crane arrives on site. Our comprehensive lift planning services provide the engineering assurance and risk mitigation required for complex, high-value, or high-risk lifting operations.</p><p>Our technical team utilizes advanced CAD software and 3D simulation to produce detailed lift plans, complete with swept path analyses, ground bearing pressure calculations, and rigging configurations. This meticulous preparation guarantees that every aspect of the lift is fully optimized for maximum safety and efficiency.</p>',
            ]
        ];

        foreach ($services as $serviceData) {
            Service::create([
                'title' => ucwords(strtolower($serviceData['title'])),
                'slug' => Str::slug($serviceData['title']),
                'short_description' => $serviceData['short_description'],
                'description' => $serviceData['description'],
                'icon' => null,
                'image' => null,
            ]);
        }
    }
}
