webpackJsonp([6],{"2IEo":function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"GmfPagesAuthSns",props:{title:{type:String,default:"使用合作账号登录"},type:{type:String,default:"login"}},data:function(){return{sending:!1}},computed:{canSns:function(){return!(!this.$root.configs.auth||!this.$root.configs.auth.sns)&&this.$root.configs.auth.sns},snsQQ:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.qq)},snsWeixin:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.weixin)},snsWeibo:function(){return!!this.canSns&&this.makeUrl(this.$root.configs.auth.sns.weibo)}},methods:{fetchData:function(){},makeUrl:function(t){var n=!1;return t&&this.type?n=t.indexOf("?")>0?t+"&type="+this.type:t+"?type="+this.type:t&&(n=t),n&&this.$route.query.continue&&(n=n.indexOf("?")>0?n+"&continue="+this.$route.query.continue:n+"?continue="+this.$route.query.continue),n}},mounted:function(){this.fetchData()}}},"5q6g":function(t,n,s){(t.exports=s("UTlt")(!1)).push([t.i,".login-sns[data-v-5d705ed4]{text-align:center}.login-sns .md-icon-button[data-v-5d705ed4]{margin:20px 36px 0 0;min-width:auto;box-shadow:none;width:50px;height:50px}.login-sns .md-icon-button .md-icon[data-v-5d705ed4]{transition:all .345s;width:30px;height:30px;font-size:30px}.login-sns .md-icon-button:hover .md-icon[data-v-5d705ed4]{transform:scale(1.3)}",""])},"E+Q+":function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.canSns?s("md-card-content",{staticClass:"login-sns"},[s("div",{staticClass:"md-subheading"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"layout-row layout-align-center-center"},[t.snsQQ?s("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsQQ}},[s("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-qq.svg"}})],1):t._e(),t._v(" "),t.snsWeixin?s("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsWeixin}},[s("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-weixin.svg"}})],1):t._e(),t._v(" "),t.snsWeibo?s("md-button",{staticClass:"md-icon-button md-raised md-primary",attrs:{href:t.snsWeibo}},[s("md-icon",{attrs:{"md-src":"/assets/vendor/gmf-sys/svg/auth-weibo.svg"}})],1):t._e()],1)]):t._e()},staticRenderFns:[]}},GH7E:function(t,n,s){var e=s("Z0/y")(s("jDCu"),s("qlA8"),!1,null,null,null);t.exports=e.exports},STpj:function(t,n,s){var e=s("5q6g");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("FIqI")("6a759087",e,!0,{})},dQ4b:function(t,n,s){var e=s("Z0/y")(s("2IEo"),s("E+Q+"),!1,function(t){s("STpj")},"data-v-5d705ed4",null);t.exports=e.exports},jDCu:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o(s("lC5x")),a=o(s("dQ4b")),i=s("GbOV"),r=s("rIWJ");function o(t){return t&&t.__esModule?t:{default:t}}function u(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,s){return function e(a,i){try{var r=n[a](i),o=r.value}catch(t){return void s(t)}if(!r.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});t(o)}("next")})}}n.default={name:"GmfPagesAuthPassword",components:{AuthSns:a.default},props:{},mixins:[i.validationMixin],data:function(){return{mainDatas:{},loading:0,sending:!1}},validations:{mainDatas:{password:{required:r.required,minLength:(0,r.minLength)(3),maxLength:(0,r.maxLength)(30)}}},computed:{routeQuery:function(){var t={};return this.$route.query&&this.$route.query.continue&&(t.continue=this.$route.query.continue),t}},methods:{getValidationClass:function(t){var n=this.$v.mainDatas[t];if(n)return{"md-invalid":n.$invalid&&n.$dirty}},validateForm:function(){this.$v.$touch(),this.$v.$invalid||this.submitPost()},submitPost:function(){var t=u(e.default.mark(function t(){var n;return e.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.sending=!0,t.next=4,this.$http.post("sys/auth/login",this.mainDatas);case 4:return n=t.sent,this.sending=!1,this.$setConfigs({user:n.data.data,token:n.data.token}),t.next=9,this.$root.$loadConfigs();case 9:this.$go(this.$route.query.continue?this.$route.query.continue:this.$root.configs.home),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),this.sending=!1,this.$toast(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,12]])}));return function(){return t.apply(this,arguments)}}(),fetchData:function(){var t=u(e.default.mark(function t(){var n,s;return e.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.sending=!0,(n=this.$route.params.id)||this.$go({name:"auth.chooser",query:this.routeQuery}),t.next=6,this.$http.post("sys/auth/checker",{id:n});case 6:s=t.sent,s.data.data,this.mainDatas=s.data.data,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),this.$toast(t.t0),this.$go({name:"auth.identifier",query:this.routeQuery});case 15:return t.prev=15,this.sending=!1,t.finish(15);case 18:case"end":return t.stop()}},t,this,[[0,11,15,18]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=u(e.default.mark(function t(){return e.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchData();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},qlA8:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("md-card",[s("form",{attrs:{novalidate:""},on:{submit:function(n){return n.preventDefault(),t.validateForm(n)}}},[s("md-card-header",[s("md-card-header-text",[s("div",{staticClass:"md-title"},[t._v("欢迎")])])],1),t._v(" "),s("md-list",[s("md-list-item",[s("md-avatar",[s("md-image",{attrs:{"md-src":t.mainDatas.avatar}})],1),t._v(" "),s("div",{staticClass:"md-list-item-text"},[s("span",[t._v(t._s(t.mainDatas.name))]),t._v(" "),s("span",[t._v(t._s(t.mainDatas.account))])]),t._v(" "),s("md-button",{staticClass:"md-icon-button md-list-action",attrs:{to:{name:"auth.chooser",query:t.routeQuery}}},[s("md-icon",{staticClass:"md-primary"},[t._v("expand_more")])],1)],1)],1),t._v(" "),s("md-card-content",[s("md-layout",[s("md-field",{class:t.getValidationClass("password")},[s("label",[t._v("输入您的密码")]),t._v(" "),s("md-input",{attrs:{autocomplete:"off",type:"password",disabled:t.sending},model:{value:t.mainDatas.password,callback:function(n){t.$set(t.mainDatas,"password",n)},expression:"mainDatas.password"}}),t._v(" "),t.$v.mainDatas.password.required?t._e():s("span",{staticClass:"md-error"},[t._v("请输入密码")])],1)],1)],1),t._v(" "),s("md-card-actions",[s("router-link",{attrs:{to:{name:"auth.password.find",params:{id:t.mainDatas.id},query:t.routeQuery}}},[t._v("忘记了密码")]),t._v(" "),s("span",{staticClass:"flex"}),t._v(" "),s("md-button",{staticClass:"md-primary md-raised",attrs:{type:"submit",disabled:t.sending}},[t._v("登 录")])],1),t._v(" "),s("md-divider"),t._v(" "),s("auth-sns"),t._v(" "),t.sending?s("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],1)])},staticRenderFns:[]}}});