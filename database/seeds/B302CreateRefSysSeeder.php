<?php

use Gmf\Sys\Builder;
use Gmf\Sys\Models;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class B302CreateRefSysSeeder extends Seeder {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function run() {
		$this->down();

		$exception = DB::transaction(function () {
			$id = "d0ff895063b311e7bce1b7401e9f5acb";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.language.ref')->entity('gmf.sys.language')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});
			$id = "d0ff8d4063b311e78facf704b370d18b";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.ent.ref')->entity('gmf.sys.ent')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "d0ff8e5063b311e798c5671dd1c0dabd";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.profile.ref')->entity('gmf.sys.profile')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "d0ff8f2063b311e79321632fc50f04a4";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.user.ref')->entity('gmf.sys.user')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "d0ff900063b311e7b62433eee05701ba";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.role.ref')->entity('gmf.sys.role')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "d0ff907063b311e7af991d9a1697ca99";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.permit.ref')->entity('gmf.sys.permit')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "d0ff90d063b311e7b2bf4ff8d8ec2648";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.menu.ref')->entity('gmf.sys.menu')
					->fields(['id', 'code' => '编码', 'name' => '名称', 'memo' => '备注']);
			});

			$id = "d0ff914063b311e7892a7951a6863a58";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.entity.ref')->entity('gmf.sys.entity')
					->fields(['id', 'name' => '名称', 'comment' => '备注']);
			});

			$id = "d0ff91b063b311e78eef316ddf8761c7";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.component.ref')->entity('gmf.sys.component')
					->fields(['id', 'code' => '编码', 'name' => '名称']);
			});

			$id = "d0ff924063b311e780683beb931cc0f1";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.query.ref')->entity('gmf.sys.query')
					->fields(['id', 'code' => '编码', 'name' => '名称']);
			});

			$id = "d0ff92a063b311e7be5eb721b51c7cd2";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.dti.category.ref')->entity('gmf.sys.dti.category')
					->fields(['id', 'code', 'name']);
			});

			$id = "d0ff930063b311e7a13213da5f61b954";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.dti.ref')->entity('gmf.sys.dti')
					->fields(['id', 'code', 'name', 'memo']);
			});

			$id = "d0ff938063b311e7a27ff9a87f126443";
			Models\Query::build(function (Builder $builder) use ($id) {
				$builder->id($id)->name('gmf.sys.dti.log.ref')->entity('gmf.sys.dti.log')
					->fields(['id', 'dti.name', 'memo', 'state_enum', 'created_at', 'session']);
			});
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Models\Query::where('name', 'like', 'gmf.sys.%.ref')->delete();
	}
}
