<?php

use Gmf\Sys\Builder;
use Gmf\Sys\Models;
use Illuminate\Database\Seeder;

class A022SysEntSeeder extends Seeder {

	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Models\Ent::where('id', $this->entId)->delete();
		$b = new Builder;
		$b->id($this->entId)->code('demo')->name('演示企业');
		Models\Ent::create($b->toArray());
	}
}
