webpackJsonp([16],{"4nvn":function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return this.sending?t("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):this._e()},staticRenderFns:[]}},"7xJY":function(e,t,n){var r=n("Z0/y")(n("MkS1"),n("4nvn"),!1,null,null,null);e.exports=r.exports},MkS1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("jajg"),i=(r=o)&&r.__esModule?r:{default:r};t.default={name:"GmfPagesAuthLogin",data:function(){return{sending:!0}},methods:{fetchData:function(){}},computed:{routeQuery:function(){var e={};return this.$route.query&&this.$route.query.continue&&(e.continue=this.$route.query.continue),e}},mounted:function(){var e=i.default.get();e&&e.length>1?this.$go({name:"auth.chooser",query:this.routeQuery}):e&&1==e.length?this.$go({name:"auth.password",params:{id:e[0].id},query:this.routeQuery}):this.$go({name:"auth.identifier",query:this.routeQuery})}}},jajg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storageKey="gmf.sys.auth."+window.location.host}return r(e,[{key:"get",value:function(){return JSON.parse(localStorage.getItem(this.storageKey))||[]}},{key:"has",value:function(e){return!1}},{key:"remove",value:function(e){if(e){for(var t=this.get(),n=0;n<t.length;n++)if(t[n].id==e.id){n;break}n>=0&&(t.splice(n,1),localStorage.removeItem(this.storageKey),localStorage.setItem(this.storageKey,JSON.stringify(t)))}}},{key:"add",value:function(e){if(e){var t=this.get(),n=!1;t.forEach(function(t){t.id==e.id&&(n=!0)}),n||t.push(e),localStorage.removeItem(this.storageKey),localStorage.setItem(this.storageKey,JSON.stringify(t))}}}]),e}();t.default=new o}});