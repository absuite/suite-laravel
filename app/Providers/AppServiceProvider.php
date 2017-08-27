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
