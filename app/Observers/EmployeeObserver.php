<?php

namespace App\Observers;

use App\Models\Employee;
use Illuminate\Support\Str;

class EmployeeObserver
{
    /**
     * Generate a unique slug before the employee is created.
     */
    public function creating(Employee $employee): void
    {
        if (empty($employee->slug)) {
            $base = Str::slug($employee->first_name.' '.$employee->last_name);
            $slug = $base;
            $count = 1;

            while (Employee::where('slug', $slug)->exists()) {
                $slug = $base.'-'.$count++;
            }

            $employee->slug = $slug;
        }
    }
}
