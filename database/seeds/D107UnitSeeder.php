<?php

use Suite\Cbo\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D107UnitSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {

		Models\Unit::where('ent_id', $this->entId)->delete();
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("Day")->name("天")->type_enum("time");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("Hour")->name("小时")->type_enum("time");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("Minute")->name("分")->type_enum("time");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("Second")->name("秒")->type_enum("time");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("km")->name("千米")->type_enum("length");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("m")->name("米")->type_enum("length");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("cm")->name("厘米")->type_enum("length");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("ton")->name("吨")->type_enum("weight");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("kg")->name("千克")->type_enum("weight");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("g")->name("克")->type_enum("weight");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("m2")->name("平方米")->type_enum("area");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("m3")->name("立方米")->type_enum("volume");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("l")->name("升")->type_enum("volume");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("ml")->name("毫升")->type_enum("volume");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("pcs")->name("件")->type_enum("quantity");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("ea")->name("个")->type_enum("quantity");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("set")->name("台套")->type_enum("quantity");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("liang")->name("辆")->type_enum("quantity");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("Roll")->name("卷")->type_enum("quantity");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("pair")->name("双")->type_enum("quantity");});
		Models\Unit::build(function (Builder $b) {$b->ent_id($this->entId)->code("dozen")->name("打")->type_enum("quantity");});

	}
}
