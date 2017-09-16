<?php

//use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
	protected $seeders = [
		// 'A022SysEntSeeder',
		// 'A020SysClientSeeder',
		// 'A021SysUserSeeder',

		'A202CreateMenuSysSeeder',
		'A203CreateMenuCboSeeder',
		'A204CreateMenuAmibaSeeder',
		'A205CreateMenuBecSeeder',
		'A208CreateMenuMySeeder',

		'B202CreateQuerySysSeeder',
		'B203CreateQueryCboSeeder',
		'B203CreateQueryOauthSeeder',
		'B204CreateQueryAmibaSeeder',

		'B302CreateRefSysSeeder',
		'B303CreateRefCboSeeder',
		'B304CreateRefAmibaSeeder',

		// 'B401CreateReportAmibaSeeder',

		// 'D101CountrySeeder',
		// 'D102AreaSeeder',
		// 'D104ProvinceSeeder',
		// 'D105DivisionSeeder',
		// 'D106CurrencySeeder',
		// 'D107UnitSeeder',

		// 'D116CboPeriodCalendarSeeder',
		// 'D117CboPeriodAccountSeeder',

		// 'D111CboOrgOrgSeeder',
		// 'D112CboOrgDeptSeeder',

		// 'D113CboOrgWorkSeeder',

		// 'D121CboWhSeeder',

		// 'D121CboTraderCategorySeeder',
		// 'D121CboTraderSeeder',

		// 'D121CboItemSeeder',

		// 'D1401AmibaDtiCategorySeeder',
		// 'D1402AmibaDtiSeeder',
		// 'D1401AmibaDtiParamSeeder',

		// 'D140AmibaPurposeSeeder',
		// 'D141AmibaElementSeeder',
		// 'D143AmibaGroupSeeder',
		// 'D144AmibaAllotMethodSeeder',
		// 'D144AmibaAllotRuleSeeder',
		// 'D144AmibaDataInitSeeder',
		// 'D144AmibaDataSeeder',
		// 'D144AmibaDataTargetSeeder',
		// 'D144AmibaPriceSeeder',
		// 'D144AmibaTimeSeeder',
		// 'D145AmibaDataDocSeeder',

		// 'D1502BecPriceSeeder',
		// 'D1504BecPostSeeder',
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
