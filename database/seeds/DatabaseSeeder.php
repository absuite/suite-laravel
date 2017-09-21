<?php

//use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
	protected $seeders = [
		
	];
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		//Model::unguard();
		foreach ($this->seeders as $seedClass) {
			$this->call($seedClass);
		}
		//Model::reguard();
	}
}
