<?php

namespace App\Providers;
use Gmf\Sys\Sys;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;
use Suite\Amiba\Amiba;
use Suite\Bec\Bec;
use Suite\Cbo\Cbo;
use Suite\Mobile\Mobile;

class RouteServiceProvider extends ServiceProvider {
	/**
	 * This namespace is applied to your controller routes.
	 *
	 * In addition, it is set as the URL generator's root namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'App\Http\Controllers';

	/**
	 * Define your route model bindings, pattern filters, etc.
	 *
	 * @return void
	 */
	public function boot() {
		Sys::routes();
		Cbo::routes();
		Amiba::routes();
		Bec::routes();
		Mobile::routes();
		parent::boot();
	}

	/**
	 * Define the routes for the application.
	 *
	 * @return void
	 */
	public function map() {
		$this->mapApiRoutes();

		$this->mapWebRoutes();

		//
	}

	/**
	 * Define the "web" routes for the application.
	 *
	 * These routes all receive session state, CSRF protection, etc.
	 *
	 * @return void
	 */
	protected function mapWebRoutes() {
		Route::middleware('web')
			->namespace($this->namespace)
			->group(base_path('routes/web.php'));
	}

	/**
	 * Define the "api" routes for the application.
	 *
	 * These routes are typically stateless.
	 *
	 * @return void
	 */
	protected function mapApiRoutes() {
		Route::prefix('api')
			->middleware('api')
			->namespace($this->namespace)
			->group(base_path('routes/api.php'));
	}
}
