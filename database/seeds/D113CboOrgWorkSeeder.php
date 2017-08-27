<?php

use Suite\Cbo\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D113CboOrgWorkSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Models\Work::where('ent_id', $this->entId)->delete();

		Models\Work::build(function (Builder $b) {$b->ent_id($this->entId)->code("wc8100501")->name("车工中心")->org("org810")->dept("dp81005");});
		Models\Work::build(function (Builder $b) {$b->ent_id($this->entId)->code("wc8100502")->name("铣工中心")->org("org810")->dept("dp81005");});

	}
}
