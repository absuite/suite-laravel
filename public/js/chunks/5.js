webpackJsonp([5],{2152:function(t,a,e){var n=e(0)(e(2211),e(2212),!1,function(t){e(2209)},"data-v-cb87a3cc",null);t.exports=n.exports},2209:function(t,a,e){var n=e(2210);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(2132)("be95ae14",n,!0,{})},2210:function(t,a,e){(t.exports=e(439)(!1)).push([t.i,".main-table[data-v-cb87a3cc]{height:100%;width:1000px;max-width:100%;margin:0 auto}",""])},2211:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{mainDatas:{fields:[]}}},watch:{$route:function(){this.fetchData()}},methods:{goItem:function(t){t&&t.type&&t.type.id&&this.$go({name:"md.show",params:{id:t.type.id}})},fetchData:function(){var t=this;this.$http.get("sys/entities/"+this.$route.params.id,{params:{}}).then(function(a){t.mainDatas=a.data.data}).catch(function(a){t.$toast(a)})}},mounted:function(){this.fetchData()}}},2212:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("md-table",{staticClass:"main-table",attrs:{"md-card":"","md-fixed-header":""},scopedSlots:t._u([{key:"md-table-row",fn:function(a){var n=a.item;return e("md-table-row",{},[e("md-table-cell",{attrs:{"md-label":"名称"}},[e("span",[t._v(t._s(n.name))]),t._v(" "),"entity"==t.mainDatas.type&&n.field_name&&n.name!=n.field_name?e("span",[t._v("\n        ("+t._s(n.field_name)+")\n      ")]):t._e(),t._v(" "),n.collection?e("span",[t._v("\n        :[]\n      ")]):t._e()]),t._v(" "),e("md-table-cell",{attrs:{"md-label":"类型"}},[n.type&&"entity"==n.type.type?e("a",{on:{click:function(a){t.goItem(n)}}},[t._v(t._s(n.type.name))]):n.type&&"enum"==n.type.type?e("a",{on:{click:function(a){t.goItem(n)}}},[t._v(t._s(n.type.name))]):e("span",[t._v(t._s(n.type.name))])]),t._v(" "),e("md-table-cell",{attrs:{"md-label":"显示名称"}},[t._v(t._s(n.comment))])],1)}}]),model:{value:t.mainDatas.fields,callback:function(a){t.$set(t.mainDatas,"fields",a)},expression:"mainDatas.fields"}},[e("md-table-toolbar",{staticClass:"md-dense"},[e("div",{staticClass:"md-toolbar-row class-title"},[e("md-chip",{staticClass:"md-primary hide-xs"},[t._v(t._s(t.mainDatas.type_name))]),t._v(" "),e("span",{staticClass:"md-chip"},[t._v(t._s(t.mainDatas.comment))]),t._v(" "),t.mainDatas.table_name?e("span",{staticClass:"md-chip"},[t._v("表名: "+t._s(t.mainDatas.table_name))]):t._e()],1)]),t._v(" "),e("md-table-empty-state",{attrs:{"md-label":"没有元数据信息"}})],1)},staticRenderFns:[]}}});