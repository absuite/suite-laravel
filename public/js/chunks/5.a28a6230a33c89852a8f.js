webpackJsonp([5],{Aldi:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("md-table",{staticClass:"main-table",attrs:{"md-card":"","md-fixed-header":""},scopedSlots:t._u([{key:"md-table-row",fn:function(a){var s=a.item;return e("md-table-row",{},[e("md-table-cell",{attrs:{"md-label":"名称"}},[e("span",[t._v(t._s(s.name))]),t._v(" "),"entity"==t.mainDatas.type&&s.field_name&&s.name!=s.field_name?e("span",[t._v("\n        ("+t._s(s.field_name)+")\n      ")]):t._e(),t._v(" "),s.collection?e("span",[t._v("\n        :[]\n      ")]):t._e()]),t._v(" "),e("md-table-cell",{attrs:{"md-label":"类型"}},[s.type&&"entity"==s.type.type?e("a",{on:{click:function(a){t.goItem(s)}}},[t._v(t._s(s.type.name))]):s.type&&"enum"==s.type.type?e("a",{on:{click:function(a){t.goItem(s)}}},[t._v(t._s(s.type.name))]):e("span",[t._v(t._s(s.type.name))])]),t._v(" "),e("md-table-cell",{attrs:{"md-label":"显示名称"}},[t._v(t._s(s.comment))])],1)}}]),model:{value:t.mainDatas.fields,callback:function(a){t.$set(t.mainDatas,"fields",a)},expression:"mainDatas.fields"}},[e("md-table-toolbar",{staticClass:"md-dense"},[e("div",{staticClass:"md-toolbar-row class-title"},[e("md-chip",{staticClass:"md-primary hide-xs"},[t._v(t._s(t.mainDatas.type_name))]),t._v(" "),e("span",{staticClass:"md-chip"},[t._v(t._s(t.mainDatas.comment))]),t._v(" "),t.mainDatas.table_name?e("span",{staticClass:"md-chip"},[t._v("表名: "+t._s(t.mainDatas.table_name))]):t._e()],1)]),t._v(" "),e("md-table-empty-state",{attrs:{"md-label":"没有元数据信息"}})],1)},staticRenderFns:[]}},HRe1:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{mainDatas:{fields:[]}}},watch:{$route:function(){this.fetchData()}},methods:{goItem:function(t){t&&t.type&&t.type.id&&this.$go({name:"md.show",params:{id:t.type.id}})},fetchData:function(){var t=this;this.$http.get("sys/entities/"+this.$route.params.id,{params:{}}).then(function(a){t.mainDatas=a.data.data}).catch(function(a){t.$toast(a)})}},mounted:function(){this.fetchData()}}},"PF/s":function(t,a,e){var s=e("VU/8")(e("HRe1"),e("Aldi"),!1,function(t){e("sFGT")},"data-v-cb87a3cc",null);t.exports=s.exports},VvMr:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".main-table[data-v-cb87a3cc]{height:100%;width:1000px;max-width:100%;margin:0 auto}",""])},sFGT:function(t,a,e){var s=e("VvMr");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("be95ae14",s,!0,{})}});