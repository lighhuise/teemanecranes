<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

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
            'password' => Hash::make('lighthousedev')
        ]);

        User::factory()->create([
            'name' => 'MW',
            'email' => 'mv@designbycode.co.za',
            'password' => Hash::make('lighthousedev')
        ]);


        $this->call([
//            EmployeeSeeder::class,
            ServiceSeeder::class,
        ]);

    }
}
