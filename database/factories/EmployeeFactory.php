<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Employee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $departments = ['Operations', 'Engineering', 'Safety', 'Administration', 'Sales', 'Logistics'];
        $locations = ['Johannesburg HQ', 'Cape Town Branch', 'Durban Depot', 'Pretoria Site'];
        
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'nickname' => fake()->optional(0.3)->firstName(), // 30% chance of nickname
            'birthday' => fake()->dateTimeBetween('-60 years', '-20 years')->format('Y-m-d'),
            'branch_location' => fake()->randomElement($locations),
            'role' => fake()->jobTitle(),
            'bio' => fake()->optional(0.7)->paragraphs(2, true),
            'department' => fake()->randomElement($departments),
            'superior_id' => null, // Will be set in seeder
        ];
    }
}
