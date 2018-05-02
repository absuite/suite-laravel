webpackJsonp([19],{AFgN:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("ESwS"),n=e("+cKO");t.default={name:"GmfPagesAuthRegister",props:{},mixins:[s.validationMixin],data:function(){return{mainDatas:{},loading:0,sending:!1}},validations:{mainDatas:{name:{required:n.required},account:{required:n.required,email:n.email,minLength:(0,n.minLength)(3),maxLength:(0,n.maxLength)(30)},password:{required:n.required,minLength:(0,n.minLength)(3),maxLength:(0,n.maxLength)(30)}}},computed:{},methods:{getValidationClass:function(a){var t=this.$v.mainDatas[a];if(t)return{"md-invalid":t.$invalid&&t.$dirty}},validateForm:function(){this.$v.$touch(),this.$v.$invalid||this.submitPost()},submitPost:function(){var a=this;this.sending=!0,this.$http.post("sys/auth/register",this.mainDatas).then(function(t){a.sending=!1}).catch(function(t){a.sending=!1,a.$toast(t)})},fetchData:function(){}},created:function(){},mounted:function(){this.fetchData()}}},XZ8i:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("md-card",[e("form",{attrs:{novalidate:""},on:{submit:function(t){t.preventDefault(),a.validateForm(t)}}},[e("md-card-header",[e("md-card-header-text",[e("div",{staticClass:"md-title"},[a._v("创建新帐号")])])],1),a._v(" "),e("md-card-content",[e("md-layout",[e("md-field",{class:a.getValidationClass("name"),attrs:{"md-clearable":""}},[e("label",[a._v("输入您的真实姓名")]),a._v(" "),e("md-input",{attrs:{autocomplete:"off",disabled:a.sending},model:{value:a.mainDatas.name,callback:function(t){a.$set(a.mainDatas,"name",t)},expression:"mainDatas.name"}}),a._v(" "),a.$v.mainDatas.name.required?a._e():e("span",{staticClass:"md-error"},[a._v("姓名")])],1)],1),a._v(" "),e("md-layout",[e("md-field",{class:a.getValidationClass("account"),attrs:{"md-clearable":""}},[e("label",[a._v("电子邮件地址")]),a._v(" "),e("md-input",{attrs:{autocomplete:"off",disabled:a.sending},model:{value:a.mainDatas.account,callback:function(t){a.$set(a.mainDatas,"account",t)},expression:"mainDatas.account"}}),a._v(" "),e("span",{staticClass:"md-helper-text"},[a._v("我们会向此地址发送一封电子邮件，验证您是否佣有该邮件地址。")]),a._v(" "),a.$v.mainDatas.account.required?a.$v.mainDatas.account.email?a._e():e("span",{staticClass:"md-error"},[a._v("请输入有效的电子邮件地址!")]):e("span",{staticClass:"md-error"},[a._v("请输入电子邮件地址!")])],1)],1),a._v(" "),e("md-layout",[e("md-field",{class:a.getValidationClass("password")},[e("label",[a._v("密码")]),a._v(" "),e("md-input",{attrs:{autocomplete:"off",type:"password",disabled:a.sending},model:{value:a.mainDatas.password,callback:function(t){a.$set(a.mainDatas,"password",t)},expression:"mainDatas.password"}}),a._v(" "),a.$v.mainDatas.password.required?a._e():e("span",{staticClass:"md-error"},[a._v("请输入密码")]),a._v(" "),e("span",{staticClass:"md-helper-text"},[a._v("请至少使用 6 个字符。请勿使用您用于登录其他网站的密码或容易被猜到的密码")])],1)],1)],1),a._v(" "),e("md-card-actions",[e("md-button",{staticClass:"md-primary md-raised",attrs:{type:"submit",disabled:a.sending}},[a._v("注册")])],1),a._v(" "),e("md-card-actions",{staticClass:"login-memo"},[e("router-link",{attrs:{to:{name:"auth.login"}}},[a._v("我有帐号，直接登录")])],1),a._v(" "),a.sending?e("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):a._e()],1)])},staticRenderFns:[]}},uKT0:function(a,t,e){var s=e("VU/8")(e("AFgN"),e("XZ8i"),!1,null,null,null);a.exports=s.exports}});