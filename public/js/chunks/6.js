webpackJsonp([6],{2161:function(t,a,e){var n=e(0)(e(2217),e(2218),!1,function(t){e(2215)},"data-v-66252ba6",null);t.exports=n.exports},2215:function(t,a,e){var n=e(2216);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(2142)("4761129e",n,!0,{})},2216:function(t,a,e){(t.exports=e(441)(!1)).push([t.i,".main-table[data-v-66252ba6]{height:100%;width:1000px;max-width:100%;margin:0 auto}",""])},2217:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{mainDatas:[]}},watch:{$route:function(){this.fetchData()}},methods:{goItem:function(t){this.$go({name:"md.show",params:{id:t.id}})},fetchData:function(){var t=this,a={q:this.$route.params.q};this.mainDatas=[],this.$http.get("sys/entities",{params:a}).then(function(a){t.mainDatas=a.data.data}).catch(function(a){t.$toast(a)})}},mounted:function(){this.fetchData()}}},2218:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("md-table",{staticClass:"main-table",attrs:{"md-card":"","md-fixed-header":""},scopedSlots:t._u([{key:"md-table-row",fn:function(a){var n=a.item;return e("md-table-row",{},[e("md-table-cell",{attrs:{"md-label":"类型"}},[e("a",{on:{click:function(a){t.goItem(n)}}},[t._v(t._s(n.name))])]),t._v(" "),e("md-table-cell",{attrs:{"md-label":"名称"}},[e("a",{on:{click:function(a){t.goItem(n)}}},[t._v(t._s(n.comment))])])],1)}}]),model:{value:t.mainDatas,callback:function(a){t.mainDatas=a},expression:"mainDatas"}},[e("md-table-empty-state",{attrs:{"md-label":"没有元数据信息"}})],1)},staticRenderFns:[]}}});