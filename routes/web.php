<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', ['uses' => 'HomeController@index']);
Route::any('/test', ['uses' => 'HomeController@test']);
Route::any('/demo', ['uses' => 'HomeController@demo']);
Route::get('/site/configs', ['uses' => 'HomeController@getConfig']);

Route::get('/app', ['uses' => 'HomeController@index']);
Route::get('/docs', ['uses' => 'HomeController@index']);
Route::get('/{page?}', ['uses' => 'HomeController@home'])->where('page', '^(app|docs|auth|md)\/.*$');
