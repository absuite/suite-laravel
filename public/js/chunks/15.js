webpackJsonp([15],{2148:function(t,a,e){var n=e(0)(e(2178),e(2179),!1,null,null,null);t.exports=n.exports},2178:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(50),s=e(51);a.default={name:"GmfPagesAuthRegister",props:{},mixins:[n.validationMixin],data:function(){return{mainDatas:{},loading:0,sending:!1}},validations:{mainDatas:{name:{required:s.required},account:{required:s.required,minLength:(0,s.minLength)(3),maxLength:(0,s.maxLength)(30)},password:{required:s.required,minLength:(0,s.minLength)(3),maxLength:(0,s.maxLength)(30)}}},computed:{routeQuery:function(){var t={};return this.$route.query&&this.$route.query.continue&&(t.continue=this.$route.query.continue),t},appName:function(){return this.$root.appName?" "+this.$root.appName+" ":""}},methods:{getValidationClass:function(t){var a=this.$v.mainDatas[t];if(a)return{"md-invalid":a.$invalid&&a.$dirty}},validateForm:function(){if(this.$v.$touch(),!this.$v.$invalid){if(!/^1[358][0123456789]\d{8}$/.test(this.mainDatas.account)&&!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this.mainDatas.account))return alert("账号需要是电子邮件或者手机号!"),!1;this.submitPost()}},submitPost:function(){var t=this;this.sending=!0,this.$http.post("sys/auth/register",this.mainDatas).then(function(a){t.sending=!1,t.$go(t.$route.query.continue?t.$route.query.continue:{name:"app.users.show",params:{id:"0"}})}).catch(function(a){t.sending=!1,t.$toast(a)})},fetchData:function(){}},created:function(){},mounted:function(){this.fetchData()}}},2179:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("md-card",[e("form",{attrs:{novalidate:""},on:{submit:function(a){return a.preventDefault(),t.validateForm(a)}}},[e("md-card-header",[e("md-card-header-text",[e("div",{staticClass:"md-title"},[t._v("创建新的"+t._s(t.appName)+"帐号")])])],1),t._v(" "),e("md-card-content",[e("md-layout",[e("md-field",{class:t.getValidationClass("name"),attrs:{"md-clearable":""}},[e("label",[t._v("输入您的真实姓名")]),t._v(" "),e("md-input",{attrs:{autocomplete:"off",disabled:t.sending},model:{value:t.mainDatas.name,callback:function(a){t.$set(t.mainDatas,"name",a)},expression:"mainDatas.name"}}),t._v(" "),t.$v.mainDatas.name.required?t._e():e("span",{staticClass:"md-error"},[t._v("姓名")])],1)],1),t._v(" "),e("md-layout",[e("md-field",{class:t.getValidationClass("account"),attrs:{"md-clearable":""}},[e("label",[t._v("账号")]),t._v(" "),e("md-input",{attrs:{autocomplete:"off",disabled:t.sending},model:{value:t.mainDatas.account,callback:function(a){t.$set(t.mainDatas,"account",a)},expression:"mainDatas.account"}}),t._v(" "),e("span",{staticClass:"md-helper-text"},[t._v("输入电子邮件地址或者手机号。")]),t._v(" "),t.$v.mainDatas.account.required?t._e():e("span",{staticClass:"md-error"},[t._v("请输入输入电子邮件地址或者手机号。!")])],1)],1),t._v(" "),e("md-layout",[e("md-field",{class:t.getValidationClass("password")},[e("label",[t._v("密码")]),t._v(" "),e("md-input",{attrs:{autocomplete:"off",type:"password",disabled:t.sending},model:{value:t.mainDatas.password,callback:function(a){t.$set(t.mainDatas,"password",a)},expression:"mainDatas.password"}}),t._v(" "),t.$v.mainDatas.password.required?t._e():e("span",{staticClass:"md-error"},[t._v("请输入密码")]),t._v(" "),e("span",{staticClass:"md-helper-text"},[t._v("请至少使用 6 个字符。请勿使用您用于登录其他网站的密码或容易被猜到的密码")])],1)],1)],1),t._v(" "),e("md-card-actions",[e("md-button",{staticClass:"md-primary md-raised",attrs:{type:"submit",disabled:t.sending}},[t._v("注册")])],1),t._v(" "),e("md-card-actions",{staticClass:"login-memo"},[e("router-link",{attrs:{to:{name:"auth.login",query:t.routeQuery}}},[t._v("我有帐号，直接登录")])],1),t._v(" "),t.sending?e("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],1)])},staticRenderFns:[]}}});