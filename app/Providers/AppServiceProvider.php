<?php

namespace App\Providers;
use DB;
use Illuminate\Support\ServiceProvider;
use Log;

class AppServiceProvider extends ServiceProvider {
	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot() {
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST');
		header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization,VCode, X-Request-With');
		header('Access-Control-Allow-Credentials: true');
		if (env('APP_DEBUG')) {
			DB::listen(function ($query) {
				$bin = collect($query->bindings)->toJson();
				Log::info($query->time . ' ' . $query->sql . ':' . $bin);
			});
		}
	}

	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register() {
		//
	}
}
