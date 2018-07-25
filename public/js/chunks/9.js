webpackJsonp([9],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      mainDatas: { fields: [] }
    };
  },

  watch: {
    '$route': function $route() {
      this.fetchData();
    }
  },
  methods: {
    goItem: function goItem(item) {
      if (item && item.type && item.type.id) {
        this.$go({ name: 'md.show', params: { id: item.type.id } });
      }
    },
    fetchData: function fetchData() {
      var _this = this;

      var options = {};
      this.$http.get('sys/entities/' + this.$route.params.id, { params: options }).then(function (response) {
        _this.mainDatas = response.data.data;
      }).catch(function (err) {
        _this.$toast(err);
      });
    }
  },
  mounted: function mounted() {
    this.fetchData();
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68d2f459\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.main-table[data-v-68d2f459] {\n  height: 100%;\n  width: 1000px;\n  max-width: 100%;\n  margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68d2f459\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68d2f459\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0a520e38", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68d2f459\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68d2f459\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-68d2f459\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-table",
    {
      staticClass: "main-table",
      attrs: { "md-card": "", "md-fixed-header": "" },
      scopedSlots: _vm._u([
        {
          key: "md-table-row",
          fn: function(ref) {
            var item = ref.item
            return _c(
              "md-table-row",
              {},
              [
                _c("md-table-cell", { attrs: { "md-label": "名称" } }, [
                  _c("span", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _vm.mainDatas.type == "entity" &&
                  item.field_name &&
                  item.name != item.field_name
                    ? _c("span", [
                        _vm._v(
                          "\n        (" + _vm._s(item.field_name) + ")\n      "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.collection
                    ? _c("span", [_vm._v("\n        :[]\n      ")])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("md-table-cell", { attrs: { "md-label": "类型" } }, [
                  item.type && item.type.type == "entity"
                    ? _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              _vm.goItem(item)
                            }
                          }
                        },
                        [_vm._v(_vm._s(item.type.name))]
                      )
                    : item.type && item.type.type == "enum"
                      ? _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                _vm.goItem(item)
                              }
                            }
                          },
                          [_vm._v(_vm._s(item.type.name))]
                        )
                      : _c("span", [_vm._v(_vm._s(item.type.name))])
                ]),
                _vm._v(" "),
                _c("md-table-cell", { attrs: { "md-label": "显示名称" } }, [
                  _vm._v(_vm._s(item.comment))
                ])
              ],
              1
            )
          }
        }
      ]),
      model: {
        value: _vm.mainDatas.fields,
        callback: function($$v) {
          _vm.$set(_vm.mainDatas, "fields", $$v)
        },
        expression: "mainDatas.fields"
      }
    },
    [
      _c("md-table-toolbar", { staticClass: "md-dense" }, [
        _c(
          "div",
          { staticClass: "md-toolbar-row class-title" },
          [
            _c("md-chip", { staticClass: "md-primary hide-xs" }, [
              _vm._v(_vm._s(_vm.mainDatas.type_name))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "md-chip" }, [
              _vm._v(_vm._s(_vm.mainDatas.comment))
            ]),
            _vm._v(" "),
            _vm.mainDatas.table_name
              ? _c("span", { staticClass: "md-chip" }, [
                  _vm._v("表名: " + _vm._s(_vm.mainDatas.table_name))
                ])
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("md-table-empty-state", { attrs: { "md-label": "没有元数据信息" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68d2f459", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68d2f459\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-68d2f459\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Md/Show.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68d2f459"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Md\\Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68d2f459", Component.options)
  } else {
    hotAPI.reload("data-v-68d2f459", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});