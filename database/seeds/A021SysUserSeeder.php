<?php

use Gmf\Sys\Builder;
use Gmf\Sys\Models\User;
use Illuminate\Database\Seeder;

class A021SysUserSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {

		$b = new Builder;
		$id = config('gmf.admin_user_id');
		$email = config('gmf.admin_user_email');
		$secret = config('gmf.admin_user_pwd');
		if (!$id) {
			return;
		}
		//用户
		$b = new Builder;
		$b->user_id($id)->account($email)->name($email)->password($secret);
		User::registerByAccount('sys', $b->toArray());

		for ($i = 1; $i <= 10; $i++) {
			$b = new Builder;
			$b->account('amb' . $i . '@amb.com')->name('amb' . $i . '@amb.com')->password('amb' . $i . '@amb.com');
			User::registerByAccount('sys', $b->toArray());
		}

	}
}
