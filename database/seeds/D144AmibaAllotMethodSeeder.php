<?php
use Suite\Amiba\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D144AmibaAllotMethodSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
/**
 * Run the database seeds.
 *
 * @return void
 */
	public function run() {

		Models\AllotMethod::where('ent_id', $this->entId)->delete();
		Models\AllotMethod::build(function (Builder $b) {$b->ent_id($this->entId)->purpose("ob01")->code("FF01")->name("方法1");});

		Models\AllotMethodLine::where('ent_id', $this->entId)->delete();
		Models\AllotMethodLine::build(function (Builder $b) {$b->ent_id($this->entId)->method("FF01")->group("amb0103")->rate("9");});
		Models\AllotMethodLine::build(function (Builder $b) {$b->ent_id($this->entId)->method("FF01")->group("amb0201")->rate("6");});
		Models\AllotMethodLine::build(function (Builder $b) {$b->ent_id($this->entId)->method("FF01")->group("amb0402")->rate("30");});
		Models\AllotMethodLine::build(function (Builder $b) {$b->ent_id($this->entId)->method("FF01")->group("amb0403")->rate("15");});
		Models\AllotMethodLine::build(function (Builder $b) {$b->ent_id($this->entId)->method("FF01")->group("amb03")->rate("10");});

	}
}
