<?php

namespace App\Http\Controllers;
use Auth;
use Gmf\Sys\Builder;
use Gmf\Sys\Libs\APIResult;
use Gmf\Sys\Libs\InputHelper;
use Gmf\Sys\Models\Ent;
use Illuminate\Http\Request;
use Log;
use Suite\Amiba\Models as AmibaModels;
use Suite\Cbo\Models as CboModels;

class HomeController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->middleware('auth')->except('test', 'getConfig');
		//$this->middleware(['auth:api', 'ent_check'])->only('getConfig');
		$this->middleware(['auth', 'ent_check'])->only('getConfig');
	}
	public function test(Request $request) {
		$names = [];
		$names = InputHelper::fillEntity($names, $request, [
			'p1' => 'Suite\Cbo\Models\Org',
			'p2',
			'p3' => ['type' => 'Suite\Cbo\Models\Org', 'matchs' => ['code', 'ent_id' => '${ent_id}']]],
			['ent_id' => '123']);
		dd($names);

		$paramsStr = '{"aa":"12"}';
		$paramsObj = false;

		$paramsObj = json_decode($paramsStr);
		foreach ($paramsObj as $pk => $pv) {
			$paramsObj->{$pk} = $pv . "122";
		}
		return json_encode($paramsObj);
	}
	/**
	 * Show the application dashboard.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request) {
		$user = Auth::user();
		$config = $this->issueConfig($request, $user);
		if ($request->input('getconfig') == "1") {
			return json_encode($config);
		}
		return view('gmf::app', ['config' => $config]);
	}
	public function getConfig(Request $request) {
		$user = Auth::user();
		$config = $this->issueConfig($request, $user);
		return APIResult::json($config);
	}
	private function issueDcToken(Request $request) {
		$user = Auth::user();
		$token = false;
		$token = $user->createToken($user->type);
		$data = new Builder();
		$data->expires_in(time($token->token->expires_at));
		$data->access_token($token->accessToken);
		return $data;
	}

	private function issueConfig(Request $request, $user) {
		$config = new Builder();
		$entId = $request->oauth_ent_id;
		if (empty($entId)) {
			$entId = session(config('gmf.ent_session_name'));
			Log::error('get current ent id:' . $entId);
			if ($entId && empty(Ent::find($entId))) {
				$entId = null;
			}
		}
		if (empty($entId)) {
			$entId = config('gmf.ent.id');
		}
		$config->entId($entId);
		session([config('gmf.ent_session_name') => $entId]);
		Log::error('set current ent id:' . $entId);

		$item = false;
		$tmp = CboModels\Currency::where('ent_id', $config->entId)->where('code', 'CNY')->first();
		if (empty($tmp)) {
			$tmp = CboModels\Currency::where('ent_id', $config->entId)->first();
		}
		if ($tmp) {
			$item = new Builder();
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name)->symbol($tmp->symbol);
		}
		$config->currency($item);

		$item = false;
		$tmp = CboModels\Country::where('code', 'CHN')->first();

		if ($tmp) {
			$item = new Builder();
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name);
		}
		$config->country($item);

		$item = false;
		$tmp = AmibaModels\Purpose::where('ent_id', $config->entId)->with('calendar')->where('code', 'ob01')->first();
		if (empty($tmp)) {
			$tmp = AmibaModels\Purpose::where('ent_id', $config->entId)->with('calendar')->first();
		}
		if ($tmp) {
			$item = new Builder();
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name)->calendar_id($tmp->calendar_id);
		}
		$config->purpose($item);

		$item = false;
		if (!empty($config->purpose->calendar_id)) {
			$item = new Builder();
			$tmp = CboModels\PeriodCalendar::where('ent_id', $config->entId)->where('id', $config->purpose->calendar_id)->first();
		} else {
			$item = new Builder();
			$tmp = CboModels\PeriodCalendar::where('ent_id', $config->entId)->where('code', 'month')->first();
		}
		if ($tmp) {
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name);
		}
		$config->calendar($item);

		$item = false;
		if (!empty($config->calendar_id)) {
			$tmp = CboModels\PeriodAccount::where('ent_id', $config->entId)->where('code', date('Ym'))->where('calendar_id', $config->calendar_id)->first();
		} else {
			$tmp = CboModels\PeriodAccount::where('ent_id', $config->entId)->where('code', date('Ym'))->first();
		}
		if ($tmp) {
			$item = new Builder();
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name)->from_date($tmp->from_date)->to_date($tmp->to_date);
		}
		$config->period($item);

		$config->date(date('Y-m-d'));

		$config->user($user);

		if (stripos($_SERVER['HTTP_USER_AGENT'], "android") != false || stripos($_SERVER['HTTP_USER_AGENT'], "ios") != false || stripos($_SERVER['HTTP_USER_AGENT'], "wp") != false) {
			$config->is_mobile(true);
		}
		$token = $this->issueDcToken($request);
		$config->token($token);
		return $config;
	}
	public function home(Request $request) {
		return redirect(config('gmf.auth_redirect'));
	}
}
