<?php

use App\Http\Controllers\MovieController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [NewsController::class, 'index']);

Route::resource('news', NewsController::class)->except('index');

Route::get('/nowShow', function () {
    return Inertia::render('nowShow', ['data' => 'Now Show']);
});
Route::get('/comingUp', function () {
    return Inertia::render('comingUp', ['data' => 'Coming Up']);
});

Route::get('/about', function () {
    return Inertia::render('about', ['data' => 'About']);
});

// CLEAN SIMPLE PAGE ONLY WITH NO DATA
// Route::inertia('/', 'home');