<?php

use Suite\Cbo\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D106CurrencySeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {

		Models\Currency::where('ent_id', $this->entId)->delete();

		Models\Currency::build(function (Builder $b) {$b->ent_id($this->entId)->code("CNY")->name("人民币")->symbol("￥");});
		Models\Currency::build(function (Builder $b) {$b->ent_id($this->entId)->code("EUR")->name("欧元")->symbol("€");});
		Models\Currency::build(function (Builder $b) {$b->ent_id($this->entId)->code("GBP")->name("英镑")->symbol("£");});
		Models\Currency::build(function (Builder $b) {$b->ent_id($this->entId)->code("HKD")->name("香港元")->symbol("$");});
		Models\Currency::build(function (Builder $b) {$b->ent_id($this->entId)->code("JPY")->name("日圆")->symbol("￥");});
		Models\Currency::build(function (Builder $b) {$b->ent_id($this->entId)->code("TWD")->name("新台币元")->symbol("NT$");});
		Models\Currency::build(function (Builder $b) {$b->ent_id($this->entId)->code("USD")->name("美元")->symbol("$");});

	}
}
