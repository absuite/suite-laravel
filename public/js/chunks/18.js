webpackJsonp([18],{2151:function(t,e,n){var r=n(0)(n(2196),n(2197),!1,null,null,null);t.exports=r.exports},2196:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,s=n(10),u=(r=s)&&r.__esModule?r:{default:r};function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(s,u){try{var a=e[s](u),i=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(i).then(function(t){r("next",t)},function(t){r("throw",t)});t(i)}("next")})}}e.default={name:"GmfPagesAuthLogout",data:function(){return{sending:!0}},methods:{fetchData:function(){var t=a(u.default.mark(function t(){return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.post("sys/auth/logout");case 3:return t.sent,t.next=6,this.$root.$loadConfigs();case 6:this.$go({name:"auth.login"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.$toast(t.t0);case 12:return t.prev=12,this.sending=!1,t.finish(12);case 15:case"end":return t.stop()}},t,this,[[0,9,12,15]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=a(u.default.mark(function t(){return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchData();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},2197:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.sending?e("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):this._e()],1)},staticRenderFns:[]}}});