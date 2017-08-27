<?php
use Suite\Amiba\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D144AmibaDataInitSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
/**
 * Run the database seeds.
 *
 * @return void
 */
	public function run() {

		Models\DataInit::where('ent_id', $this->entId)->delete();
		Models\DataInit::build(function (Builder $b) {$b->ent_id($this->entId)->purpose("ob01")->period("201701")->currency("CNY")->id("02f31e005e3111e7992ff19c3fee0876");});

		Models\DataInitLine::where('ent_id', $this->entId)->delete();
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb0101")->profit("10000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb0102")->profit("30000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb0103")->profit("11000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb0201")->profit("5000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb020301")->profit("60000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb020302")->profit("50000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb0204")->profit("36000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb03")->profit("45000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb0402")->profit("32000");});
		Models\DataInitLine::build(function (Builder $b) {$b->ent_id($this->entId)->init_id("02f31e005e3111e7992ff19c3fee0876")->group("amb0403")->profit("50000");});

	}
}
