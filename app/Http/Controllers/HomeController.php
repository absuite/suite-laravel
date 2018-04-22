<?php

namespace App\Http\Controllers;
use GAuth;
use Gmf\Sys\Builder;
use Gmf\Sys\Libs\APIResult;
use Gmf\Sys\Models as SysModels;
use Gmf\Sys\Models\Ent;
use GuzzleHttp;
use Illuminate\Http\Request;
use Suite\Amiba\Models as AmibaModels;
use Suite\Cbo\Models as CboModels;

class HomeController extends Controller {
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct() {
		//$this->middleware('auth')->except('test', 'getConfig', 'login');
		//$this->middleware(['web'])->only('getConfig');
	}
	public function login(Request $request) {
		$user = GAuth::user();
		$config = $this->issueConfig($request, $user);
		if ($request->input('getconfig') == "1") {
			return json_encode($config);
		}
		return view('gmf::app', ['config' => $config]);
	}
	/**
	 * Show the application dashboard.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(Request $request) {
		$user = GAuth::user();
		$config = $this->issueConfig($request, $user);
		if ($request->input('getconfig') == "1") {
			return json_encode($config);
		}
		return view('gmf::app', ['config' => $config]);
	}
	public function getConfig(Request $request) {
		$user = GAuth::user();
		$config = $this->issueConfig($request, $user);
		return APIResult::json($config);
	}
	private function issueToken(Request $request) {
		$user = GAuth::user();
		if (empty($user)) {
			$pk = config('gmf.client.id') . config('gmf.client.secret');
			$pv = SysModels\Profile::getValue($pk);
			if ($pv) {
				$pv = json_decode($pv);
			}
			if (empty($pv)) {
				$params = [
					"grant_type" => "client_credentials",
					"client_id" => config('gmf.client.id'),
					"client_secret" => config('gmf.client.secret'),
				];

				$client = new GuzzleHttp\Client(['base_uri' => $request->root()]);
				$res = $client->post('oauth/token', ['json' => $params]);
				$body = (String) $res->getBody();
				if ($body) {
					$pv = json_decode($body);
				}
				SysModels\Profile::setValue($pk, json_encode($pv));
			}
			return $pv;
		}
		$token = false;
		$token = $user->createToken($user->type);
		$data = new Builder();
		$data->expires_in(time($token->token->expires_at));
		$data->access_token($token->accessToken);
		return $data;
	}

	private function issueConfig(Request $request, $user) {
		$config = new Builder();
		$config->auth(['theme' => 'blue', 'register' => false, 'sns' => false, 'route' => '/auth/login']);
		$entId = GAuth::entId();
		if (empty($entId) && $user) {
			$entId = session(config('gmf.ent_session_name'));
			$ent = SysModels\Ent::find($entId);
			if (empty($ent)) {
				$entId = false;
			}
			if (!$entId) {
				$entId = SysModels\EntUser::where('user_id', $user->id)->orderBy('is_default', 'desc')->orderBy('created_at', 'desc')->value('ent_id');
			}
			if (empty($entId)) {
				$entId = config('gmf.ent.id');
			}
		}
		if ($entId) {
			$config->ent(Ent::find($entId));
		}
		$item = null;
		$tmp = CboModels\Currency::where('ent_id', $entId)->where('code', 'CNY')->first();
		if (empty($tmp)) {
			$tmp = CboModels\Currency::where('ent_id', $entId)->first();
		}
		if ($tmp) {
			$item = new Builder();
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name)->symbol($tmp->symbol);
		}
		$config->currency($item);

		$item = null;
		$tmp = CboModels\Country::where('code', 'CHN')->first();

		if ($tmp) {
			$item = new Builder();
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name);
		}
		$config->country($item);

		$item = null;
		$tmp = AmibaModels\Purpose::where('ent_id', $entId)->with('calendar')->orderBy('updated_at', 'desc')->orderBy('code')->first();
		if (empty($tmp)) {
			$tmp = AmibaModels\Purpose::where('ent_id', $entId)->with('calendar')->first();
		}
		if ($tmp) {
			$item = new Builder();
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name)->calendar_id($tmp->calendar_id);
		}
		$config->purpose($item);

		$item = null;
		if (!empty($config->purpose->calendar_id)) {
			$item = new Builder();
			$tmp = CboModels\PeriodCalendar::where('ent_id', $entId)->where('id', $config->purpose->calendar_id)->first();
		} else {
			$item = new Builder();
			$tmp = CboModels\PeriodCalendar::where('ent_id', $entId)->where('code', 'month')->first();
		}
		if ($tmp) {
			$item->id($tmp->id)->code($tmp->code)->name($tmp->name);
		}
		$config->calendar($item);

		$item = null;
		if (!empty($config->calendar_id)) {
			$tmp = CboModels\PeriodAccount::where('ent_id', $entId)->where('code', date('Ym'))->where('calendar_id', $config->calendar_id)->first();
		} else {
			$tmp = CboModels\PeriodAccount::where('ent_id', $entId)->where('code', date('Ym'))->first();
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
		$token = $this->issueToken($request);
		$config->token($token);
		return $config;
	}
	public function home(Request $request) {
		return redirect(config('gmf.auth_redirect'));
	}
}
