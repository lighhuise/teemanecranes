<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Claude',
            'email' => 'claude@designbycode.co.za',
            'password' => bcrypt('lighthousedev')
        ]);

        User::factory()->create([
            'name' => 'MW',
            'email' => 'mv@designbycode.co.za',
            'password' => bcrypt('lighthousedev')
        ]);


        $this->call([
//            EmployeeSeeder::class,
            ServiceSeeder::class,
        ]);

    }
}
