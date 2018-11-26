webpackJsonp([13],{2158:function(t,n,e){var a=e(0)(e(2199),e(2200),!1,null,null,null);t.exports=a.exports},2199:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,i=e(10),s=(a=i)&&a.__esModule?a:{default:a},r=e(50),o=e(51);function d(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){return function a(i,s){try{var r=n[i](s),o=r.value}catch(t){return void e(t)}if(!r.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})}}n.default={name:"GmfPagesAuthVerifyMail",mixins:[r.validationMixin],data:function(){return{mainDatas:{},loading:0,isSended:!1,sending:!1}},validations:{mainDatas:{token:{required:o.required,minLength:(0,o.minLength)(6),maxLength:(0,o.maxLength)(6)}}},computed:{routeQuery:function(){var t={};return this.$route.query&&this.$route.query.continue&&(t.continue=this.$route.query.continue),t},disabledSendBtn:function(){return this.sending||this.isSended||!!this.mainDatas.token},disabledConfirmBtn:function(){return this.sending||!this.mainDatas.token},tipLabel:function(){return"验证码将发送到 "+this.mainDatas.email}},methods:{getValidationClass:function(t){var n=this.$v.mainDatas[t];if(n)return{"md-invalid":n.$invalid&&n.$dirty}},onOtherClick:function(){this.$go(this.$route.query.continue?this.$route.query.continue:this.$root.configs.home)},onSendCode:function(){var t=this;this.sending=!0;var n={id:this.mainDatas.id,account:this.mainDatas.account,type:"verify-mail",mode:"mail"};this.$http.post("sys/auth/vcode-create",n).then(function(n){t.isSended=!0,t.sending=!1,t.$toast("验证码已发送到您的邮件上，请及时查收!")}).catch(function(n){t.sending=!1,t.$toast(n)})},validateForm:function(){this.$v.$touch(),this.$v.$invalid||this.submitPost()},submitPost:function(){var t=this;this.sending=!0;var n={id:this.mainDatas.id,account:this.mainDatas.account,token:this.mainDatas.token};this.$http.post("sys/auth/verify-mail",n).then(function(n){t.sending=!1,t.$go(t.$route.query.continue?t.$route.query.continue:t.$root.configs.home)}).catch(function(n){t.sending=!1,t.$toast(n)})},fetchData:function(){var t=d(s.default.mark(function t(){var n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.sending=!0,t.next=4,this.$http.post("sys/auth/checker",{id:this.$root.configs.user.id});case 4:n=t.sent,this.mainDatas=n.data.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),this.$toast(t.t0),this.$go(this.$route.query.continue?this.$route.query.continue:this.$root.configs.home);case 12:return t.prev=12,this.sending=!1,t.finish(12);case 15:case"end":return t.stop()}},t,this,[[0,8,12,15]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=d(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchData();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},2200:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("md-card",[e("md-card-header",[e("md-card-header-text",[e("div",{staticClass:"md-title"},[t._v("帐号认证")]),t._v(" "),e("div",{staticClass:"md-body-1"},[t._v("电子邮件账号认证")])])],1),t._v(" "),e("md-list",[e("md-list-item",[e("md-avatar",[e("md-image",{attrs:{"md-src":t.mainDatas.avatar}})],1),t._v(" "),e("div",{staticClass:"md-list-item-text"},[e("span",[t._v(t._s(t.mainDatas.name))]),t._v(" "),e("span",[t._v(t._s(t.mainDatas.email))])]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action",attrs:{to:{name:"auth.chooser",query:t.routeQuery}}},[e("md-icon",{staticClass:"md-primary"},[t._v("expand_more")])],1)],1)],1),t._v(" "),e("md-card-content",[e("p",[t._v(t._s(t.tipLabel))])]),t._v(" "),e("md-card-actions",[e("md-button",{staticClass:"md-primary md-raised",attrs:{disabled:t.disabledSendBtn},on:{click:t.onSendCode}},[t._v("发送验证码")])],1),t._v(" "),e("form",{attrs:{novalidate:""},on:{submit:function(n){return n.preventDefault(),t.validateForm(n)}}},[e("md-card-content",[e("md-layout",[e("md-field",{class:t.getValidationClass("token")},[e("label",[t._v("验证码")]),t._v(" "),e("md-input",{attrs:{autocomplete:"off",disabled:t.sending},model:{value:t.mainDatas.token,callback:function(n){t.$set(t.mainDatas,"token",n)},expression:"mainDatas.token"}}),t._v(" "),t.$v.mainDatas.token.required?t._e():e("span",{staticClass:"md-error"},[t._v("请输入验证码")]),t._v(" "),t.$v.mainDatas.token.minLength&&t.$v.mainDatas.token.maxLength?t._e():e("span",{staticClass:"md-error"},[t._v("验证码格式不符合要求")])],1)],1)],1),t._v(" "),e("md-card-actions",[e("md-button",{staticClass:"md-primary",on:{click:t.onOtherClick}},[t._v("不想认证了")]),t._v(" "),e("span",{staticClass:"flex"}),t._v(" "),e("md-button",{staticClass:"md-primary md-raised",attrs:{type:"submit",disabled:t.disabledConfirmBtn}},[t._v("认证")])],1)],1),t._v(" "),t.sending?e("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],1)},staticRenderFns:[]}}});