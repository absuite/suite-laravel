webpackJsonp([0],{"6+Qy":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(n("lC5x")),i=s(n("wYXR"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t){return function(){var a=t.apply(this,arguments);return new Promise(function(t,n){return function e(i,s){try{var r=a[i](s),o=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});t(o)}("next")})}}a.default={components:{PostEdit:i.default},data:function(){return{loading:!1,navs:[],mainProduct:{},mainPost:{}}},watch:{"$route.params.id":function(t,a){this.fetchPostData()},"$route.params.product":function(t,a){this.fetchProductData(),this.fetchNavDatas()}},methods:{onItemAdd:function(){this.$refs.postEdit.open({product_id:this.$route.params.product,parent_id:this.$route.params.id})},onItemEdit:function(){this.$refs.postEdit.open({product_id:this.$route.params.product,id:this.$route.params.id})},onItemRemove:function(){var t=r(e.default.mark(function t(){return e.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$route.params.id){t.next=12;break}return t.prev=1,t.next=4,this.$http.delete("docs/posts/"+this.$route.params.id);case 4:return t.next=6,this.fetchNavDatas();case 6:this.$go({name:"docs.product",params:{product:mainProduct.id}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),this.$toast(t.t0);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(){return t.apply(this,arguments)}}(),fetchNavDatas:function(){var t=r(e.default.mark(function t(){var a;return e.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("docs/posts/catalogs",{params:{product:this.$route.params.product}});case 3:a=t.sent,this.navs=a.data.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.$toast(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}(),fetchPostData:function(){var t=r(e.default.mark(function t(){var a;return e.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$route.params.id){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,this.$http.get("docs/posts/"+this.$route.params.id);case 5:a=t.sent,this.mainPost=a.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.$toast(t.t0);case 12:case"end":return t.stop()}},t,this,[[2,9]])}));return function(){return t.apply(this,arguments)}}(),fetchProductData:function(){var t=r(e.default.mark(function t(){var a;return e.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$route.params.product){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,this.$http.get("docs/products/"+this.$route.params.product);case 5:a=t.sent,this.mainProduct=a.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.$toast(t.t0);case 12:case"end":return t.stop()}},t,this,[[2,9]])}));return function(){return t.apply(this,arguments)}}()},created:function(){},mounted:function(){var t=this;window.setTimeout(function(){t.message=!0},2e3),this.fetchProductData(),this.fetchNavDatas(),this.fetchPostData()}}},"86e0":function(t,a,n){var e=n("Z0/y")(n("6+Qy"),n("rAmz"),!1,function(t){n("CYXN")},"data-v-9f40621a",null);t.exports=e.exports},CYXN:function(t,a,n){var e=n("egr+");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("FIqI")("47750cce",e,!0,{})},GOtF:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("md-dialog",{staticClass:"suite-docs-post-edit",attrs:{"md-active":t.showDialog,"md-click-outside-to-close":!1,"md-close-on-esc":!1,"md-fullscreen":""},on:{"update:mdActive":function(a){t.showDialog=a},"md-opened":t.fetchData,"md-closed":t.onClosed}},[n("md-dialog-title",[n("md-field",{staticClass:"post-title"},[n("label",[t._v("标题")]),t._v(" "),n("md-input",{model:{value:t.mainData.title,callback:function(a){t.$set(t.mainData,"title",a)},expression:"mainData.title"}})],1)],1),t._v(" "),n("md-dialog-content",[n("md-editor",{attrs:{height:300,placeholder:"详细内容!"},model:{value:t.mainData.content,callback:function(a){t.$set(t.mainData,"content",a)},expression:"mainData.content"}})],1),t._v(" "),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",on:{click:function(a){t.showDialog=!1}}},[t._v("取消")]),t._v(" "),n("md-button",{staticClass:"md-primary",on:{click:t.onSave}},[n("md-icon",[t._v("save")]),t._v(" "),n("span",[t._v("保存")])],1)],1),t._v(" "),n("md-loading",{attrs:{loading:t.loading}})],1)},staticRenderFns:[]}},a0cJ:function(t,a,n){var e=n("bSY1");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("FIqI")("533957ce",e,!0,{})},bSY1:function(t,a,n){(t.exports=n("UTlt")(!1)).push([t.i,".suite-docs-post-edit{width:100%}",""])},"egr+":function(t,a,n){(t.exports=n("UTlt")(!1)).push([t.i,".container-wrapper[data-v-9f40621a]{flex:1;padding-left:270px}@media (max-width:600px){.container-wrapper[data-v-9f40621a]{padding-left:0!important}}.main-nav[data-v-9f40621a]{width:270px;padding:0;display:flex;align-items:flex-start;flex-direction:column;overflow:auto;position:fixed;top:64px;bottom:0;left:0;z-index:2;transition:.3s cubic-bezier(.4,0,.2,1);transition-property:top}@media (max-width:944px){.main-nav[data-v-9f40621a]{top:56px}}@media (max-width:600px){.main-nav[data-v-9f40621a]{top:56px}}.main-nav .nav-list[data-v-9f40621a]{padding:20px;overflow:auto;width:100%}.main-nav .nav-list a[data-v-9f40621a]{display:block;color:inherit;font-size:16px;line-height:2em}.main-nav .nav-list a.router-link-active[data-v-9f40621a]{color:var(--md-theme-default-primary,#0f9d58);font-weight:500}.main-nav .nav-list .main-nav-level[data-v-9f40621a]{margin-left:20px}.nav-leave-active[data-v-9f40621a]{display:none}.nav-enter-active[data-v-9f40621a]{opacity:0;transform:translate3d(-100%,0,0);transition:.4s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform;will-change:opacity,transform}.nav-enter-to[data-v-9f40621a]{opacity:1;transform:translateZ(0)}.main-container[data-v-9f40621a]{flex:1;padding:10px}.main-container>.md-card[data-v-9f40621a]{margin:0 auto;max-width:890px}",""])},rAmz:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container-wrapper md-layout-row"},[n("div",{staticClass:"main-nav-container"},[n("transition",{attrs:{name:"nav",appear:""}},[n("md-content",{staticClass:"main-nav layout lauout-column"},[n("md-toolbar",{attrs:{"md-elevation":"1"}},[n("router-link",{attrs:{to:{name:"docs.product",params:{product:t.mainProduct.id}}}},[t._v(t._s(t.mainProduct.title))])],1),t._v(" "),n("div",{staticClass:"flex nav-list md-scrollbar"},[t._l(t.navs,function(a){return[n("router-link",{attrs:{to:{name:"docs.product",params:{product:t.mainProduct.id,id:a.id}}}},[t._v(t._s(a.title))]),t._v(" "),a.childs&&a.childs.length?n("div",{staticClass:"main-nav-level"},[t._l(a.childs,function(a){return[n("router-link",{attrs:{to:{name:"docs.product",params:{product:t.mainProduct.id,id:a.id}}}},[t._v(t._s(a.title))]),t._v(" "),a.childs&&a.childs.length?n("div",{staticClass:"main-nav-level"},[t._l(a.childs,function(a){return[n("router-link",{attrs:{to:{name:"docs.product",params:{product:t.mainProduct.id,id:a.id}}}},[t._v(t._s(a.title))])]})],2):t._e()]})],2):t._e()]})],2),t._v(" "),n("md-toolbar",{attrs:{"md-elevation":"1"}},[n("div",{staticClass:"md-toolbar-row"},[n("div",{staticClass:"md-toolbar-section-start"},[n("md-button",{staticClass:"md-icon-button",on:{click:t.onItemAdd}},[n("md-icon",[t._v("add")])],1)],1),t._v(" "),n("span",{staticClass:"flex"}),t._v(" "),n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-icon-button",attrs:{disabled:!t.mainPost.id},on:{click:t.onItemEdit}},[n("md-icon",[t._v("edit")])],1),t._v(" "),n("md-button",{staticClass:"md-icon-button",attrs:{disabled:!t.mainPost.id},on:{click:t.onItemRemove}},[n("md-icon",[t._v("clear")])],1)],1)])])],1)],1)],1),t._v(" "),n("div",{staticClass:"main-container"},[t.mainPost&&t.mainPost.id?n("md-card",{staticClass:"md-elevation-0 ql-snow"},[n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(t.mainPost.title))])]),t._v(" "),n("md-divider"),t._v(" "),n("md-card-content",{staticClass:"ql-editor"},[n("div",{domProps:{innerHTML:t._s(t.mainPost.content)}})])],1):t._e()],1),t._v(" "),n("post-edit",{ref:"postEdit",on:{"md-closed":t.fetchNavDatas}})],1)},staticRenderFns:[]}},tjFh:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e,i=n("lC5x"),s=(e=i)&&e.__esModule?e:{default:e};function r(t){return function(){var a=t.apply(this,arguments);return new Promise(function(t,n){return function e(i,s){try{var r=a[i](s),o=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});t(o)}("next")})}}a.default={name:"DocsPostEdit",props:{mdParent:String,mdId:String,mdProduct:String},data:function(){return{showDialog:!1,mainData:{title:"",content:""},loading:0}},methods:{open:function(t){this.mainData={title:"",content:""},t&&(this.mainData=Object.assign({},this.mainData,t)),this.showDialog=!0},onSave:function(){var t=r(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.mainData.title&&!(this.mainData.title.replace(/(^\s*)|(\s*$)/g,"").length<1)){t.next=3;break}return alert("标题至少需要2个字符！"),t.abrupt("return");case 3:if(t.prev=3,this.loading++,a=null,!this.mainData.id){t.next=12;break}return t.next=9,this.$http.put("docs/posts/"+this.mainData.id,this.mainData);case 9:a=t.sent,t.next=15;break;case 12:return t.next=14,this.$http.post("docs/posts",this.mainData);case 14:a=t.sent;case 15:this.mainData=a.data.data,this.showDialog=!1,t.next=23;break;case 19:t.prev=19,t.t0=t.catch(3),this.mainData.id="",this.$toast(t.t0);case 23:return t.prev=23,this.loading--,t.finish(23);case 26:case"end":return t.stop()}},t,this,[[3,19,23,26]])}));return function(){return t.apply(this,arguments)}}(),fetchData:function(){var t=r(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.mainData.id){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,this.$http.get("docs/posts/"+this.mainData.id);case 5:a=t.sent,this.mainData=a.data.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),this.$toast(t.t0);case 12:return t.prev=12,t.finish(12);case 14:case"end":return t.stop()}},t,this,[[2,9,12,14]])}));return function(){return t.apply(this,arguments)}}(),onClosed:function(){this.$emit("md-closed",this.mainData.id?this.mainData:null)}},created:function(){},mounted:function(){}}},wYXR:function(t,a,n){var e=n("Z0/y")(n("tjFh"),n("GOtF"),!1,function(t){n("a0cJ")},null,null);t.exports=e.exports}});