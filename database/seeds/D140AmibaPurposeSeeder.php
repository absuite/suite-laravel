<?php
use Suite\Amiba\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D140AmibaPurposeSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Models\Purpose::where('ent_id', $this->entId)->delete();

		Models\Purpose::build(function (Builder $b) {$b->ent_id($this->entId)->code("ob01")->name("主核算目的")->currency("CNY")->calendar("month");});
	}
}
