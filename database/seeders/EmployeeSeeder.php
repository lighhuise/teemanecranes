<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 10 Executives/Managers
        $managers = Employee::factory(10)->create([
            'role' => 'Senior Manager',
        ]);

        // Create 90 regular employees, assigning them to random managers
        Employee::factory(90)->create()->each(function ($employee) use ($managers) {
            // 80% chance they have a superior
            if (rand(1, 100) <= 80) {
                $employee->superior_id = $managers->random()->id;
                $employee->save();
            }
        });
    }
}
