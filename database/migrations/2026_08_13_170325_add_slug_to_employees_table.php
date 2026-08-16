<?php

use App\Models\Employee;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->string('slug')->nullable()->unique()->after('last_name');
        });

        // Populate slug for existing records
        Employee::all()->each(function (Employee $employee) {
            $base = Str::slug($employee->first_name.' '.$employee->last_name);
            $slug = $base;
            $count = 1;

            while (Employee::where('slug', $slug)->where('id', '!=', $employee->id)->exists()) {
                $slug = $base.'-'.$count++;
            }

            $employee->update(['slug' => $slug]);
        });

        Schema::table('employees', function (Blueprint $table) {
            $table->string('slug')->nullable(false)->change();
        });
    }

    public function down(): void
    {
        Schema::table('employees', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    }
};
