webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue":
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

exports.default = {
  props: {
    pager: Object,
    options: {
      type: [Array, Boolean],
      default: function _default() {
        return [5, 10, 20, 50];
      }
    }
  },
  data: function data() {
    return {
      subTotal: 0,
      totalItems: 0,
      currentPage: 1,
      currentSize: 0
    };
  },

  watch: {
    'pager.total': function pagerTotal(val) {
      this.totalItems = isNaN(val) ? Number.MAX_SAFE_INTEGER : parseInt(val, 10);
    },
    'pager.size': function pagerSize(val) {
      this.currentSize = parseInt(val, 10);
    },
    'pager.page': function pagerPage(val) {
      this.currentPage = parseInt(val, 10);
    },
    'currentSize': function currentSize(val) {
      this.changeSize();
    }
  },
  computed: {
    lastPage: function lastPage() {
      return false;
    },
    shouldDisable: function shouldDisable() {
      return this.currentSize * this.currentPage >= this.totalItems;
    },
    pageInfo: function pageInfo() {
      if (!this.pager.total) {
        return '0' + '/' + this.pager.total;
      }
      var sub = this.currentPage * this.currentSize;
      sub = sub > this.pager.total ? this.pager.total : sub;
      return (this.currentPage - 1) * this.currentSize + 1 + '-' + sub + '/' + this.pager.total;
    }
  },
  methods: {
    emitPaginationEvent: function emitPaginationEvent() {
      if (this.canFireEvents) {
        this.$emit('pagination', { size: this.currentSize, page: this.currentPage });
      }
    },
    changeSize: function changeSize() {
      if (this.canFireEvents) {
        this.currentPage = 1;
        this.$emit('size', this.currentSize);
        this.emitPaginationEvent();
      }
    },
    previousPage: function previousPage() {
      if (this.canFireEvents) {
        this.currentPage--;
        this.$emit('page', this.currentPage);
        this.emitPaginationEvent();
      }
    },
    nextPage: function nextPage() {
      if (this.canFireEvents) {
        this.currentPage++;
        this.$emit('page', this.currentPage);
        this.emitPaginationEvent();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.currentSize && this.pager) this.currentSize = this.pager.size;
    if (!this.currentSize && this.options) this.currentSize = parseInt(this.options[0]);
    this.$nextTick(function () {
      _this.canFireEvents = true;
    });
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39f3186b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/**\r\n * The layout system breakpoints\r\n * ---\r\n * @access private\r\n * @type layout\r\n * @group layout\r\n */\n/**\r\n * The available gutter sizes\r\n * ---\r\n * @access private\r\n * @type layout\r\n * @group layout\r\n */\n/**\r\n * Breakpoint\r\n */\n/**\r\n * Base\r\n */\n/**\r\n * Layout Item\r\n */\n/**\r\n * Hide Element\r\n */\n.md-menu-content.md-select-menu.md-pagination-menu {\n  width: auto;\n}\n.md-pagination {\n  color: #404040;\n}\n.md-pagination .md-select {\n    width: auto;\n    min-width: 20px;\n    margin: 0 1px;\n}\n@media (max-width: 600px) {\n.md-pagination .md-pagination-label,\n    .md-pagination .md-pagination-select {\n      display: none;\n}\n}\n.md-pagination .md-field {\n    margin: 0px 10px;\n    min-height: 0px;\n    padding: 0;\n    min-width: auto;\n    width: auto;\n}\n.md-pagination .md-field.md-pagination-select {\n      width: 50px;\n}\n.md-pagination .md-pagination-info {\n    min-width: 74px;\n    text-align: center;\n}\n.md-pagination .md-button {\n    min-width: 15px;\n    margin: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39f3186b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39f3186b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("5d26275e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39f3186b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./mdPagination.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39f3186b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./mdPagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-39f3186b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.pager
    ? _c(
        "div",
        { staticClass: "md-pagination layout-row layout-align-center-center" },
        [
          _c(
            "md-button",
            {
              staticClass: "md-icon-button md-pagination-previous",
              attrs: { disabled: _vm.currentPage === 1 },
              nativeOn: {
                click: function($event) {
                  _vm.previousPage($event)
                }
              }
            },
            [_c("md-icon", [_vm._v("keyboard_arrow_left")])],
            1
          ),
          _vm._v(" "),
          _c("span", { staticClass: "md-pagination-info" }, [
            _vm._v(_vm._s(_vm.pageInfo))
          ]),
          _vm._v(" "),
          _c(
            "md-button",
            {
              staticClass: "md-icon-button md-pagination-next",
              attrs: { disabled: _vm.shouldDisable },
              nativeOn: {
                click: function($event) {
                  _vm.nextPage($event)
                }
              }
            },
            [_c("md-icon", [_vm._v("keyboard_arrow_right")])],
            1
          ),
          _vm._v(" "),
          _c("span", { staticClass: "md-pagination-label nowrap" }, [
            _vm._v("每页:")
          ]),
          _vm._v(" "),
          _c(
            "md-field",
            { staticClass: "md-pagination-select" },
            [
              _vm.options
                ? _c(
                    "md-select",
                    {
                      staticClass: "md-pagination-select",
                      attrs: { "md-class": "md-pagination-menu" },
                      model: {
                        value: _vm.currentSize,
                        callback: function($$v) {
                          _vm.currentSize = $$v
                        },
                        expression: "currentSize"
                      }
                    },
                    _vm._l(_vm.options, function(amount) {
                      return _c(
                        "md-option",
                        { key: amount, attrs: { value: amount } },
                        [_vm._v(_vm._s(amount))]
                      )
                    })
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-39f3186b", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-39f3186b\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-39f3186b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/components/MdGrid/mdPagination.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\components\\MdGrid\\mdPagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39f3186b", Component.options)
  } else {
    hotAPI.reload("data-v-39f3186b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});