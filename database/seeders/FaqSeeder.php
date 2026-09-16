<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Faq;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = [
            [
                'question' => 'What is the maximum lifting capacity of your cranes?',
                'answer' => 'Our modern fleet of hydraulic cranes can handle capacities of up to 440 tons, allowing us to perform heavy lifting and complex operations on the most demanding worksites.',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'question' => 'Are your services available 24/7?',
                'answer' => 'Yes, our team is available 24 hours a day, 365 days a year for emergency response and specialized operations.',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'question' => 'What regions do you serve?',
                'answer' => 'We are headquartered in Bellville South, Cape Town, and serve clients across South Africa.',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'question' => 'Do you provide full turnkey lifting solutions?',
                'answer' => 'Absolutely. We are trusted by some of South Africa\'s most established companies as their sole provider for full turnkey lifting solutions, overseeing every stage from initial consultation and detailed site inspections to full project execution.',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'question' => 'Do you offer specialized transport in addition to crane hire?',
                'answer' => 'Yes, we provide heavy haulage and abnormal transport solutions for loads exceeding conventional size or weight limits.',
                'sort_order' => 5,
                'is_active' => true,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
