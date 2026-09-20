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

        $users = config('seeder.users', []);
        $password = config('seeder.default_password', 'password');

        foreach ($users as $user) {
            User::factory()->create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => $password,
            ]);
        }

        $this->call([
            //            EmployeeSeeder::class,
//            ServiceSeeder::class,
            FaqSeeder::class,
        ]);

    }
}
