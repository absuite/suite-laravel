<?php

use Suite\Cbo\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D121CboItemSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
/**
 * Run the database seeds.
 *
 * @return void
 */
	public function run() {
		Models\Item::where('ent_id', $this->entId)->delete();

		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("DZ60")->name("108地质无缝管")->form_name("实体")->price("5.00 ")->unit("公斤")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("JT150")->name("150专用接头")->form_name("实体")->price("150.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("JT120")->name("120专用接头")->form_name("实体")->price("120.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("DXT001")->name("导向套")->form_name("实体")->price("200.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("F186")->name("防护筒")->form_name("实体")->price("220.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("G150")->name("150钻管")->form_name("实体")->price("1800.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("G120")->name("120钻管")->form_name("实体")->price("1200.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("KQG150")->name("150高风压潜孔钻杆")->form_name("实体")->price("2700.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("KQ120")->name("120船钻")->form_name("实体")->price("2000.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("NZ120")->name("120钻杆总成")->form_name("实体")->price("3500.00 ")->unit("件")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("机加质检")->name("机加质检")->form_name("服务")->price("200.00 ")->unit("小时")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("装配质检")->name("装配质检")->form_name("服务")->price("300.00 ")->unit("小时")->currency("CNY");});
		Models\Item::build(function (Builder $b) {$b->ent_id($this->entId)->code("采购质检")->name("采购质检")->form_name("服务")->price("400.00 ")->unit("小时")->currency("CNY");});

	}
}
