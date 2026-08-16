<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomePageIndexController;
use App\Http\Controllers\Services\ServicesIndexController;
use App\Http\Controllers\Services\ServicesShowController;
use Illuminate\Support\Facades\Route;
use Spatie\Honeypot\ProtectAgainstSpam;

Route::get('/', HomePageIndexController::class)->name('home');
Route::get('/about-us', AboutUsController::class)->name('about');

Route::get('/contact-us', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contact-us', [ContactController::class, 'store'])->name('contact.store')->middleware(ProtectAgainstSpam::class);

Route::get('/services', ServicesIndexController::class)->name('services.index');
Route::get('/services/{service:slug}', ServicesShowController::class)->name('services.show');

Route::resource('our-team', EmployeeController::class)->parameters(['our-team' => 'employee'])->only(['index', 'show']);
