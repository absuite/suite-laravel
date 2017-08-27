<?php

use Suite\Cbo\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D121CboTraderCategorySeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
/**
 * Run the database seeds.
 *
 * @return void
 */
	public function run() {
		Models\TraderCategory::where('ent_id', $this->entId)->delete();

		Models\TraderCategory::build(function (Builder $b) {$b->ent_id($this->entId)->code("L01")->name("主供");});
		Models\TraderCategory::build(function (Builder $b) {$b->ent_id($this->entId)->code("L02")->name("辅供");});
		Models\TraderCategory::build(function (Builder $b) {$b->ent_id($this->entId)->code("D01")->name("大客户");});
		Models\TraderCategory::build(function (Builder $b) {$b->ent_id($this->entId)->code("D99")->name("其它客户");});

	}
}
