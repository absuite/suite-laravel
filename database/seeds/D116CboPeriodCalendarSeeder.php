<?php

use Suite\Cbo\Models;
use Gmf\Sys\Builder;
use Illuminate\Database\Seeder;

class D116CboPeriodCalendarSeeder extends Seeder {
	private $entId = '4f95c06028d511e7bb351569a8a51d7d';
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {

		Models\PeriodCalendar::where('ent_id', $this->entId)->delete();

		Models\PeriodCalendar::build(function (Builder $b) {$b->ent_id($this->entId)->code("month")->name("默认月度日历")->type_enum("months")->from_date("2017.01.01");});

	}
}
