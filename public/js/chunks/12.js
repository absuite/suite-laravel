webpackJsonp([12],{"08ct":function(t,e,a){var n=a("rCeE");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("71ac5d60",n,!0)},"139G":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"GmfPagesAuthSns",data:function(){return{sending:!1}},methods:{fetchData:function(){}},mounted:function(){this.fetchData()}}},"9dRT":function(t,e,a){var n=a("VU/8")(a("139G"),a("bvQk"),!1,function(t){a("08ct")},"data-v-0b1adff6",null);t.exports=n.exports},"9w2o":function(t,e,a){var n=a("VU/8")(a("Htv5"),a("TRKS"),!1,null,null,null);t.exports=n.exports},Htv5:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(a("9dRT")),i=n(a("jFJc"));e.default={name:"AppAuthChooser",components:{AuthSns:s.default},data:function(){return{mainDatas:[],sending:!1}},computed:{},methods:{removeItem:function(t){},goItem:function(t){var e=this;this.sending=!0,this.$http.post("sys/auth/checker",t).then(function(t){e.sending=!1;var a=t.data.data;a&&e.$go({name:"auth.password",params:{id:a.id}})}).catch(function(t){e.sending=!1,e.$toast(t)})},fetchData:function(){this.mainDatas=i.default.get()||[]}},mounted:function(){this.fetchData()}}},TRKS:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",[a("md-card-header",[a("md-card-header-text",[a("div",{staticClass:"md-title"},[t._v("选择帐号")])])],1),t._v(" "),a("md-list",[t._l(t.mainDatas,function(e){return a("md-list-item",{key:e.id,on:{click:function(a){t.goItem(e)}}},[a("md-avatar",[a("md-image",{attrs:{"md-src":e.avatar}})],1),t._v(" "),a("div",{staticClass:"md-list-item-text"},[a("span",[t._v(t._s(e.name))]),t._v(" "),a("span",[t._v(t._s(e.account))])])],1)}),t._v(" "),a("md-list-item",{attrs:{to:{name:"auth.identifier"}}},[a("md-avatar",[a("md-icon",{staticClass:"md-size-2x"},[t._v("account_circle")])],1),t._v(" "),a("div",{staticClass:"md-list-item-text"},[a("span",[t._v("使用其他帐号")]),t._v(" "),a("span",[t._v("使用新的账号登录")])])],1)],2),t._v(" "),a("md-divider"),t._v(" "),a("auth-sns"),t._v(" "),t.mainDatas&&t.mainDatas.length?[a("md-divider"),t._v(" "),a("md-card-content",[a("md-button",{attrs:{to:{name:"auth.remove"}}},[t._v("\n        移除账号\n      ")])],1)]:t._e(),t._v(" "),t.sending?a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],2)},staticRenderFns:[]}},bvQk:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("md-card-content",{staticClass:"login-sns"},[e("div",{staticClass:"md-body-1"},[this._v("使用合作账号登录")]),this._v(" "),e("div",{staticClass:"layout-row"},[e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-ripple",[e("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-qq.svg"}})],1)],1),this._v(" "),e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-ripple",[e("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-weixin.svg"}})],1)],1),this._v(" "),e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-ripple",[e("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-weibo.svg"}})],1)],1)],1)])},staticRenderFns:[]}},jFJc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.storageKey="gmf.sys.auth."+window.location.host}return n(t,[{key:"get",value:function(){return JSON.parse(localStorage.getItem(this.storageKey))||[]}},{key:"has",value:function(t){return!1}},{key:"remove",value:function(t){if(t){for(var e=this.get(),a=0;a<e.length;a++)e[a].id==t.id&&a;a>=0&&(e.slice(a,1),localStorage.setItem(this.storageKey,JSON.stringify(e)))}}},{key:"add",value:function(t){if(t){var e=this.get(),a=!1;e.forEach(function(e){e.id==t.id&&(a=!0)}),a||e.push(t),localStorage.setItem(this.storageKey,JSON.stringify(e))}}}]),t}();e.default=new s},rCeE:function(t,e,a){(t.exports=a("FZ+f")(void 0)).push([t.i,".login-sns .md-avatar-icon[data-v-0b1adff6]{margin:10px 16px 0 0}",""])}});