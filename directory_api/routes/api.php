<?php

use Illuminate\Http\Request;
use App\Contact;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Contacts routing
Route::get('contacts', 'ContactController@index');
Route::get('contacts/{contact}', 'ContactController@show');
Route::post('contacts', 'ContactController@store');
Route::put('contacts/{contact}', 'ContactController@update');
Route::delete('contacts/{contact}', 'ContactController@delete');

// Phones routing
Route::get('phones', 'PhoneController@index');
Route::get('phones/{phone}', 'PhoneController@show');
Route::post('phones', 'PhoneController@store');
Route::put('phones/{phone}', 'PhoneController@update');
Route::delete('phones/{phone}', 'PhoneController@delete');
