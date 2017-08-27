<?php
use Suite\Amiba\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D144AmibaAllotRuleSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
/**
 * Run the database seeds.
 *
 * @return void
 */
	public function run() {

		Models\AllotRule::where('ent_id', $this->entId)->delete();
		Models\AllotRule::build(function (Builder $b) {$b->ent_id($this->entId)->purpose("ob01")->group("amb0101")->code("FF01")->name("方法1")->element("302")->method("FF01");});

		Models\AllotRuleLine::where('ent_id', $this->entId)->delete();
		Models\AllotRuleLine::build(function (Builder $b) {$b->ent_id($this->entId)->rule("FF01")->group("amb0103")->element("302");});
		Models\AllotRuleLine::build(function (Builder $b) {$b->ent_id($this->entId)->rule("FF01")->group("amb0201")->element("302");});
		Models\AllotRuleLine::build(function (Builder $b) {$b->ent_id($this->entId)->rule("FF01")->group("amb0402")->element("302");});
		Models\AllotRuleLine::build(function (Builder $b) {$b->ent_id($this->entId)->rule("FF01")->group("amb0403")->element("302");});

	}
}
