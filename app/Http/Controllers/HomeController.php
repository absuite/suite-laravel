<?php

namespace App\Http\Controllers;
use Auth;
use Gmf\Sys\Builder;
use Illuminate\Http\Request;
use Suite\Amiba\Models as AmibaModels;
use Suite\Cbo\Models as SysModels;

class HomeController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		$this->middleware('auth')->except('test');
	}
	public function test(Request $request) {
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
		$config = $this->getConfig($request, $user);
		$request->session()->put(config('gmf.ent_session_name'), '4f95c06028d511e7bb351569a8a51d7d');
		if (stripos($_SERVER['HTTP_USER_AGENT'], "android") != false || stripos($_SERVER['HTTP_USER_AGENT'], "ios") != false || stripos($_SERVER['HTTP_USER_AGENT'], "wp") != false) {
			$config->is_mobile(true);
		}
		$token = $this->issueDcToken($request, $config);
		$config->token($token);
		return view('gmf::app', ['config' => $config]);
	}
	private function issueDcToken(Request $request, $config) {
		$user = Auth::user();
		$token = false;
		$token = $user->createToken($user->type);

		$data = new Builder();
		$data->expires_in(time($token->token->expires_at));
		$data->access_token($token->accessToken);
		return $data;
	}
	private function getConfig(Request $request, $user) {
		$config = new Builder();
		$item = new Builder();
		$tmp = SysModels\Currency::where('code', 'CNY')->first();
		if ($tmp) {
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name)->symbol($tmp->symbol);
		}
		$config->currency($item);

		$item = new Builder();
		$tmp = SysModels\Country::where('code', 'CHN')->first();
		if ($tmp) {
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name);
		}
		$config->country($item);

		$item = new Builder();
		$tmp = AmibaModels\Purpose::with('calendar')->where('code', 'ob01')->first();
		if ($tmp) {
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name)->calendar_id($tmp->calendar_id);
		}
		$config->purpose($item);

		$item = new Builder();
		$item = new Builder();
		if (!empty($config->purpose->calendar_id)) {
			$tmp = SysModels\PeriodCalendar::where('id', $config->purpose->calendar_id)->first();
		} else {
			$tmp = SysModels\PeriodCalendar::where('code', 'month')->first();
		}
		if ($tmp) {
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name);
		}
		$config->calendar($item);

		$item = new Builder();
		if (!empty($config->calendar_id)) {
			$tmp = SysModels\PeriodAccount::where('code', date('Ym'))->where('calendar_id', $config->calendar_id)->first();
		} else {
			$tmp = SysModels\PeriodAccount::where('code', date('Ym'))->first();
		}
		if ($tmp) {
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name);
		}
		$config->period($item);

		$config->date(date('Y-m-d'));

		$user = Auth::user();

		if ($user) {
			$config->user($user);
		}
		return $config;
	}
	public function home(Request $request) {
		return redirect(config('gmf.auth_redirect'));
	}
}
