<?php

use Gmf\Sys\Builder;
use Gmf\Sys\Models;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class B203CreateQueryOauthSeeder extends Seeder {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function run() {
		$this->down();

		$exception = DB::transaction(function () {
			$id = "8271fae02aa311e7aab3577bf0ded100";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.oauth.client.list')->entity('gmf.oauth.client');
			});
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Models\Query::where('name', 'like', 'gmf.oauth.%.list')->delete();
	}
}
