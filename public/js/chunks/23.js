webpackJsonp([23],{"1KJb":function(t,e,n){var a=n("VU/8")(n("9eyL"),n("j72Y"),!1,null,null,null);t.exports=a.exports},"9eyL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"GmfPagesAuthAccountDashboard",components:{},data:function(){return{mainDatas:[],loading:0,sending:!1}},computed:{routeQuery:function(){return this.$route.query&&this.$route.query.continue&&(p.continue=this.$route.query.continue),{}},userName:function(){return this.$root.configs&&this.$root.configs.user&&this.$root.configs.user.nick_name}},beforeRouteEnter:function(t,e,n){n(function(t){t.fetchData()})},beforeRouteUpdate:function(t,e,n){this.fetchData(),n()},methods:{removeItem:function(t){var e=this;this.sending=!0,this.$http.delete("sys/auth/joins",{data:{to_user_id:t.id}}).then(function(t){e.fetchData()}).catch(function(t){e.$toast(t),e.sending=!1})},fetchData:function(){var t=this;this.$http.get("sys/auth/joins").then(function(e){t.mainDatas=e.data.data,t.sending=!1}).catch(function(e){t.$toast(e),t.sending=!1})}}}},j72Y:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("我的账号关联")]),t._v(" "),n("div",{staticClass:"md-body-1"},[t._v(t._s(t.userName))])]),t._v(" "),n("md-button",{staticClass:"md-icon-button md-list-action",attrs:{to:{name:"auth.account.join",query:t.routeQuery}}},[n("md-icon",{staticClass:"md-primary"},[t._v("expand_more")])],1)],1),t._v(" "),n("md-list",[t._l(t.mainDatas,function(e){return n("md-list-item",{key:e.id},[n("md-avatar",[n("md-image",{attrs:{"md-src":e.avatar}})],1),t._v(" "),n("div",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",[t._v(t._s(e.account))])]),t._v(" "),n("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(n){t.removeItem(e)}}},[n("md-icon",[t._v("clear")])],1)],1)}),t._v(" "),n("md-list-item",{attrs:{to:{name:"auth.account.join"}}},[n("md-avatar",[n("md-icon",{staticClass:"md-size-2x"},[t._v("account_circle")])],1),t._v(" "),n("div",{staticClass:"md-list-item-text"},[t._v("\n        添加账号关联\n      ")])],1)],2),t._v(" "),n("md-card-actions",{attrs:{"md-alignment":"left"}},[n("router-link",{attrs:{to:{name:"home"}}},[t._v("返回首页")])],1),t._v(" "),t.sending?n("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],1)},staticRenderFns:[]}}});