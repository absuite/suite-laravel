webpackJsonp([0],{"+m4t":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(n("dQ4b")),i=a(n("jajg"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={name:"AppAuthRemove",components:{AuthSns:s.default},data:function(){return{mainDatas:[],sending:!1}},computed:{routeQuery:function(){var t={};return this.$route.query&&this.$route.query.continue&&(t.continue=this.$route.query.continue),t}},methods:{removeItem:function(t){i.default.remove(t),this.fetchData()},fetchData:function(){this.mainDatas=i.default.get()||[]}},mounted:function(){this.fetchData()}}},"5jJ7":function(t,e,n){var s=n("x7MG");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("49f71455",s,!0,{})},OMg4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("从此浏览器中移除")])])],1),t._v(" "),n("md-list",[t._l(t.mainDatas,function(e){return n("md-list-item",{key:e.id},[n("md-avatar",[n("md-image",{attrs:{"md-src":e.avatar}})],1),t._v(" "),n("div",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.account))])]),t._v(" "),n("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(n){t.removeItem(e)}}},[n("md-icon",[t._v("clear")])],1)],1)}),t._v(" "),n("md-list-item",{attrs:{to:{name:"auth.identifier",query:t.routeQuery}}},[n("md-avatar",[n("md-icon",{staticClass:"md-size-2x"},[t._v("account_circle")])],1),t._v(" "),n("div",{staticClass:"md-list-item-text"},[t._v("\n        使用其他帐号\n      ")])],1)],2),t._v(" "),n("md-divider"),t._v(" "),n("md-card-content",{staticClass:"layout layout-align-center-center"},[n("md-button",{attrs:{to:{name:"auth.login",query:t.routeQuery}}},[n("md-icon",[t._v("完成")])],1)],1),t._v(" "),t.sending?n("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],1)},staticRenderFns:[]}},"UZ/6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"GmfPagesAuthSns",props:{title:{type:String,default:"使用合作账号登录"},type:{type:String,default:"login"}},data:function(){return{sending:!1}},computed:{canSns:function(){return!(!this.$root.configs.auth||!this.$root.configs.auth.sns)&&this.$root.configs.auth.sns},snsQQ:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.qq)},snsWeixin:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.weixin)},snsWeibo:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.weibo)}},methods:{fetchData:function(){},makeUrl:function(t){var e=!1;return t&&this.type?e=t.indexOf("?")>0?t+"&type="+this.type:t+"?type="+this.type:t&&(e=t),e&&this.$route.query.continue&&(e=e.indexOf("?")>0?e+"&continue="+encodeURIComponent(this.$route.query.continue):e+"?continue="+encodeURIComponent(this.$route.query.continue)),e}},mounted:function(){this.fetchData()}}},dQ4b:function(t,e,n){var s=n("VU/8")(n("UZ/6"),n("rzOg"),!1,function(t){n("5jJ7")},"data-v-2b9eec19",null);t.exports=s.exports},jajg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.storageKey="gmf.sys.auth."+window.location.host}return s(t,[{key:"get",value:function(){return JSON.parse(localStorage.getItem(this.storageKey))||[]}},{key:"has",value:function(t){return!1}},{key:"remove",value:function(t){if(t){for(var e=this.get(),n=0;n<e.length;n++)if(e[n].id==t.id){n;break}n>=0&&(e.splice(n,1),localStorage.removeItem(this.storageKey),localStorage.setItem(this.storageKey,JSON.stringify(e)))}}},{key:"add",value:function(t){if(t){var e=this.get(),n=!1;e.forEach(function(e){e.id==t.id&&(n=!0)}),n||e.push(t),localStorage.removeItem(this.storageKey),localStorage.setItem(this.storageKey,JSON.stringify(e))}}}]),t}();e.default=new i},rzOg:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.canSns?n("md-card-content",{staticClass:"login-sns"},[n("div",{staticClass:"md-subheading"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"layout-row layout-align-center-center"},[t.snsQQ?n("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsQQ}},[n("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-qq.svg"}})],1):t._e(),t._v(" "),t.snsWeixin?n("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsWeixin}},[n("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-weixin.svg"}})],1):t._e(),t._v(" "),t.snsWeibo?n("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsWeibo}},[n("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-weibo.svg"}})],1):t._e()],1)]):t._e()},staticRenderFns:[]}},x7MG:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".login-sns[data-v-2b9eec19]{text-align:center}.login-sns .md-icon-button[data-v-2b9eec19]{margin:20px 36px 0 0;min-width:auto;box-shadow:none;width:50px;height:50px}.login-sns .md-icon-button .md-icon[data-v-2b9eec19]{transition:all .345s;width:30px;height:30px;font-size:30px}.login-sns .md-icon-button:hover .md-icon[data-v-2b9eec19]{transform:scale(1.3)}",""])},yOzW:function(t,e,n){var s=n("VU/8")(n("+m4t"),n("OMg4"),!1,null,null,null);t.exports=s.exports}});