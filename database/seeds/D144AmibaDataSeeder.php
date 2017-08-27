<?php
use Suite\Amiba\Models;
use Illuminate\Database\Seeder;

class D144AmibaDataSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
/**
 * Run the database seeds.
 *
 * @return void
 */
	public function run() {
		Models\ResultAccount::where('ent_id', $this->entId)->delete();
		Models\ResultProfit::where('ent_id', $this->entId)->delete();
	}
}
