<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmployeeController extends Controller
{
    public function index(Request $request): Response
    {
        $search = $request->input('search');

        $employees = Employee::with('media')
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('first_name', 'like', "%{$search}%")
                        ->orWhere('last_name', 'like', "%{$search}%")
                        ->orWhere('role', 'like', "%{$search}%")
                        ->orWhere('department', 'like', "%{$search}%");
                });
            })
            ->orderBy('last_name')
            ->orderBy('id')
            ->cursorPaginate(16)
            ->withQueryString()
            ->through(function ($employee) {
                return [
                    'id' => $employee->id,
                    'slug' => $employee->slug,
                    'first_name' => $employee->first_name,
                    'last_name' => $employee->last_name,
                    'role' => $employee->role,
                    'department' => $employee->department,
                    'branch_location' => $employee->branch_location,
                    'image_url' => ($media = $employee->getFirstMedia('default')) ? ($media->hasGeneratedConversion('webp') ? $media->getUrl('webp') : $media->getUrl()) : null,
                ];
            });

        return Inertia::render('employees/index', [
            'employees' => Inertia::scroll($employees),
            'filters' => $request->only('search'),
        ]);
    }

    public function show(Employee $employee): Response
    {
        $employee->load(['superior', 'media']);

        return Inertia::render('employees/show', [
            'employee' => [
                'id' => $employee->id,
                'slug' => $employee->slug,
                'first_name' => $employee->first_name,
                'last_name' => $employee->last_name,
                'nickname' => $employee->nickname,
                'birthday' => $employee->birthday?->format('F j, Y'),
                'role' => $employee->role,
                'department' => $employee->department,
                'branch_location' => $employee->branch_location,
                'bio' => $employee->bio,
                'image_url' => ($media = $employee->getFirstMedia('default')) ? ($media->hasGeneratedConversion('webp') ? $media->getUrl('webp') : $media->getUrl()) : null,
                'superior' => $employee->superior ? [
                    'id' => $employee->superior->id,
                    'slug' => $employee->superior->slug,
                    'first_name' => $employee->superior->first_name,
                    'last_name' => $employee->superior->last_name,
                    'role' => $employee->superior->role,
                ] : null,
            ],
        ]);
    }
}
