<?php

namespace App\Http\Controllers;
use Auth;
use GAuth;
use Gmf\Sys\Builder;
use Gmf\Sys\Http\Resources\User as ResUser;
use Gmf\Sys\Libs\APIResult;
use Gmf\Sys\Models as SysModels;
use Gmf\Sys\Models\Ent\Ent;
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
    //$this->middleware('auth')->except('test', 'getConfig', 'demo');
  }
  public function demo(Request $request) {
    if (env('DEMO_ENT_ID') && env('DEMO_USER_ID')) {
      $user = SysModels\User::where('id', env('DEMO_USER_ID'))->first();
      session([config('gmf.ent.session') => env('DEMO_ENT_ID')]);
      if ($user) {
        Auth::login($user);
      }
    }
    return $this->index($request);
  }
  public function home(Request $request) {
    return view('gmf::app');
  }
  public function index(Request $request) {
    return redirect(config('gmf.auth.redirect'));
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
          "type" => "client_credentials",
          "client_id" => config('gmf.client.id'),
          "client_secret" => config('gmf.client.secret'),
        ];
        $pv = app('Gmf\Sys\Bp\Auth\Token')->issueClientToken($params);
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

    $config->home(config('gmf.auth.redirect'));

    $config->date(date('Y-m-d'));
    $config->loadEnums(true);
    if ($user && $user->account == config('gmf.admin.account')) {
      $config->isSysUser(true);
    }
    $config->user(new ResUser($user));

    if (stripos($_SERVER['HTTP_USER_AGENT'], "android") != false || stripos($_SERVER['HTTP_USER_AGENT'], "ios") != false || stripos($_SERVER['HTTP_USER_AGENT'], "wp") != false) {
      $config->is_mobile(true);
    }
    $token = $this->issueToken($request);
    $config->token($token);

    $entId = GAuth::entId();
    if (empty($entId) && $user) {
      $entId = session(config('gmf.ent.session'));
      if (!in_array($entId, GAuth::entIds())) {
        $entId = false;
      }
      if (!$entId && count(GAuth::entIds())) {
        $entId = GAuth::entIds()[0];
      }
    }
    if (empty($entId)) {
      return $config;
    }
    $config->ent(Ent::find($entId));

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

    return $config;
  }

}
