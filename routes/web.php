<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Backend\AuthController;
use App\Http\Controllers\Backend\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index']);
Route::get('about', [HomeController::class, 'about']);
Route::get('blog', [HomeController::class, 'blog']);
Route::get('blog-post', [HomeController::class, 'blogPost']);
Route::get('contact', [HomeController::class, 'contact']);
Route::get('portfolio', [HomeController::class, 'portfolio']);
//Auth
Route::get('login', [AuthController::class, 'login']);
Route::get('forgot', [AuthController::class, 'forgot']);
Route::get('admin/dashboard', [DashboardController::class, 'dashboard']);
