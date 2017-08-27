<?php

use Suite\Cbo\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D102AreaSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {

		Models\Area::where('ent_id', $this->entId)->delete();

		Models\Area::build(function (Builder $b) {$b->ent_id($this->entId)->code("HZ")->name("华中")->country("CHN");});
		Models\Area::build(function (Builder $b) {$b->ent_id($this->entId)->code("HN")->name("华南")->country("CHN");});
		Models\Area::build(function (Builder $b) {$b->ent_id($this->entId)->code("HB")->name("华北")->country("CHN");});
		Models\Area::build(function (Builder $b) {$b->ent_id($this->entId)->code("HD")->name("华东")->country("CHN");});
		Models\Area::build(function (Builder $b) {$b->ent_id($this->entId)->code("DB")->name("东北")->country("CHN");});
		Models\Area::build(function (Builder $b) {$b->ent_id($this->entId)->code("XB")->name("西北")->country("CHN");});
		Models\Area::build(function (Builder $b) {$b->ent_id($this->entId)->code("XN")->name("西南")->country("CHN");});

	}
}
