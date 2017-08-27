<?php

use Suite\Cbo\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D111CboOrgOrgSeeder extends Seeder {

	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Models\Org::where('ent_id', $this->entId)->delete();

		Models\Org::build(function (Builder $b) {$b->ent_id($this->entId)->code("org800")->name("800集团公司");});
		Models\Org::build(function (Builder $b) {$b->ent_id($this->entId)->code("org810")->name("810生产公司");});
		Models\Org::build(function (Builder $b) {$b->ent_id($this->entId)->code("org820")->name("820新品公司");});
		Models\Org::build(function (Builder $b) {$b->ent_id($this->entId)->code("org830")->name("830销售公司");});

	}
}
