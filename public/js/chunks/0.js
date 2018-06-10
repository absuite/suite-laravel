webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/suite-docs/components/PostEdit.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
  name: 'DocsPostEdit',
  props: {
    mdParent: String,
    mdId: String,
    mdProduct: String
  },
  data: function data() {
    return {
      showDialog: false,
      mainData: { title: '', content: '' },
      loading: 0
    };
  },

  methods: {
    open: function open(data) {
      this.mainData = { title: '', content: '' };
      if (data) {
        this.mainData = Object.assign({}, this.mainData, data);
      }
      this.showDialog = true;
    },
    onSave: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.mainData.title || this.mainData.title.replace(/(^\s*)|(\s*$)/g, "").length < 1)) {
                  _context.next = 3;
                  break;
                }

                alert('标题至少需要2个字符！');
                return _context.abrupt('return');

              case 3:
                _context.prev = 3;

                this.loading++;
                response = null;

                if (!this.mainData.id) {
                  _context.next = 12;
                  break;
                }

                _context.next = 9;
                return this.$http.put('docs/posts/' + this.mainData.id, this.mainData);

              case 9:
                response = _context.sent;
                _context.next = 15;
                break;

              case 12:
                _context.next = 14;
                return this.$http.post('docs/posts', this.mainData);

              case 14:
                response = _context.sent;

              case 15:
                this.mainData = response.data.data;
                this.showDialog = false;
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context['catch'](3);

                this.mainData.id = '';
                this.$toast(_context.t0);

              case 23:
                _context.prev = 23;

                this.loading--;
                return _context.finish(23);

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 19, 23, 26]]);
      }));

      function onSave() {
        return _ref.apply(this, arguments);
      }

      return onSave;
    }(),
    fetchData: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.mainData.id) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return this.$http.get('docs/posts/' + this.mainData.id);

              case 5:
                response = _context2.sent;

                this.mainData = response.data.data;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](2);

                this.$toast(_context2.t0);

              case 12:
                _context2.prev = 12;
                return _context2.finish(12);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9, 12, 14]]);
      }));

      function fetchData() {
        return _ref2.apply(this, arguments);
      }

      return fetchData;
    }(),
    onClosed: function onClosed() {
      this.$emit('md-closed', this.mainData.id ? this.mainData : null);
    }
  },
  created: function created() {},
  mounted: function mounted() {}
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/suite-docs/pages/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _PostEdit = __webpack_require__("./resources/assets/js/vendor/suite-docs/components/PostEdit.vue");

var _PostEdit2 = _interopRequireDefault(_PostEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //
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
  components: {
    PostEdit: _PostEdit2.default
  },
  data: function data() {
    return {
      loading: false,
      navs: [],
      mainProduct: {},
      mainPost: {}
    };
  },
  watch: {
    '$route.params.id': function $routeParamsId(to, from) {
      this.fetchPostData();
    },
    '$route.params.product': function $routeParamsProduct(to, from) {
      this.fetchProductData();
      this.fetchNavDatas();
    }
  },
  methods: {
    onItemAdd: function onItemAdd() {
      this.$refs.postEdit.open({
        product_id: this.$route.params.product,
        parent_id: this.$route.params.id
      });
    },
    onItemEdit: function onItemEdit() {
      this.$refs.postEdit.open({
        product_id: this.$route.params.product,
        id: this.$route.params.id
      });
    },
    onItemRemove: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.$route.params.id) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return this.$http.delete('docs/posts/' + this.$route.params.id);

              case 4:
                _context.next = 6;
                return this.fetchNavDatas();

              case 6:
                this.$go({ name: 'docs.product', params: { product: mainProduct.id } });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                this.$toast(_context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function onItemRemove() {
        return _ref.apply(this, arguments);
      }

      return onItemRemove;
    }(),
    fetchNavDatas: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.$http.get('docs/posts/catalogs', { params: { product: this.$route.params.product } });

              case 3:
                response = _context2.sent;

                this.navs = response.data.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                this.$toast(_context2.t0);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function fetchNavDatas() {
        return _ref2.apply(this, arguments);
      }

      return fetchNavDatas;
    }(),
    fetchPostData: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var response;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.$route.params.id) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return');

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return this.$http.get('docs/posts/' + this.$route.params.id);

              case 5:
                response = _context3.sent;


                this.mainPost = response.data.data;
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](2);

                this.$toast(_context3.t0);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function fetchPostData() {
        return _ref3.apply(this, arguments);
      }

      return fetchPostData;
    }(),
    fetchProductData: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var response;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.$route.params.product) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return');

              case 2:
                _context4.prev = 2;
                _context4.next = 5;
                return this.$http.get('docs/products/' + this.$route.params.product);

              case 5:
                response = _context4.sent;


                this.mainProduct = response.data.data;
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4['catch'](2);

                this.$toast(_context4.t0);

              case 12:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 9]]);
      }));

      function fetchProductData() {
        return _ref4.apply(this, arguments);
      }

      return fetchProductData;
    }()
  },
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    window.setTimeout(function () {
      _this.message = true;
    }, 2000);
    this.fetchProductData();
    this.fetchNavDatas();
    this.fetchPostData();
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a36fa0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/suite-docs/pages/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * The default transition, used when the element is visible\r\n * since the beginning of the animation\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The enter transition, used when the element is not visible on the screen\r\n * since the beginning of the animation and become visible\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The leave transition, used when the element is visible on the screen\r\n * since the beginning of the animation and is removed\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The stand transition, used when the element is going to accelerate,\r\n * like movements from bottom to top\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The out transition, used when the element is going to deaccelerate,\r\n * like movements from top to bottom\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/* Transitions - Based on Angular Material */\n/**\r\n * Breakpoint\r\n */\n/**\r\n * Base\r\n */\n/**\r\n * Layout Item\r\n */\n/**\r\n * Hide Element\r\n */\n.container-wrapper[data-v-01a36fa0] {\n  flex: 1;\n  padding-left: 270px;\n}\n@media (max-width: 600px) {\n.container-wrapper[data-v-01a36fa0] {\n      padding-left: 0 !important;\n}\n}\n.main-nav[data-v-01a36fa0] {\n  width: 270px;\n  padding: 0px;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  overflow: auto;\n  position: fixed;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: top;\n}\n@media (max-width: 944px) {\n.main-nav[data-v-01a36fa0] {\n      top: 56px;\n}\n}\n@media (max-width: 600px) {\n.main-nav[data-v-01a36fa0] {\n      top: 56px;\n}\n}\n.main-nav .nav-list[data-v-01a36fa0] {\n    padding: 20px;\n    overflow: auto;\n    width: 100%;\n}\n.main-nav .nav-list a[data-v-01a36fa0] {\n      display: block;\n      color: inherit;\n      font-size: 16px;\n      line-height: 2em;\n}\n.main-nav .nav-list a.router-link-active[data-v-01a36fa0] {\n        color: var(--md-theme-default-primary, #0f9d58);\n        font-weight: 500;\n}\n.main-nav .nav-list .main-nav-level[data-v-01a36fa0] {\n      margin-left: 20px;\n}\n.nav-leave-active[data-v-01a36fa0] {\n  display: none;\n}\n.nav-enter-active[data-v-01a36fa0] {\n  opacity: 0;\n  transform: translate3d(-100%, 0, 0);\n  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: opacity, transform;\n  will-change: opacity, transform;\n}\n.nav-enter-to[data-v-01a36fa0] {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n.main-container[data-v-01a36fa0] {\n  flex: 1;\n  padding: 10px;\n}\n.main-container > .md-card[data-v-01a36fa0] {\n    margin: 0 auto;\n    max-width: 890px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e88ee1ae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/suite-docs/components/PostEdit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.suite-docs-post-edit {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a36fa0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/suite-docs/pages/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a36fa0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/suite-docs/pages/Product.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e826bbca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a36fa0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Product.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a36fa0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Product.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e88ee1ae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/suite-docs/components/PostEdit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e88ee1ae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/suite-docs/components/PostEdit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4d027a6c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e88ee1ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostEdit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e88ee1ae\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01a36fa0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/suite-docs/pages/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-wrapper md-layout-row" },
    [
      _c(
        "div",
        { staticClass: "main-nav-container" },
        [
          _c(
            "transition",
            { attrs: { name: "nav", appear: "" } },
            [
              _c(
                "md-content",
                { staticClass: "main-nav layout lauout-column" },
                [
                  _c(
                    "md-toolbar",
                    { attrs: { "md-elevation": "1" } },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "docs.product",
                              params: { product: _vm.mainProduct.id }
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.mainProduct.title))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex nav-list md-scrollbar" },
                    [
                      _vm._l(_vm.navs, function(item) {
                        return [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: {
                                  name: "docs.product",
                                  params: {
                                    product: _vm.mainProduct.id,
                                    id: item.id
                                  }
                                }
                              }
                            },
                            [_vm._v(_vm._s(item.title))]
                          ),
                          _vm._v(" "),
                          item.childs && item.childs.length
                            ? _c(
                                "div",
                                { staticClass: "main-nav-level" },
                                [
                                  _vm._l(item.childs, function(s) {
                                    return [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "docs.product",
                                              params: {
                                                product: _vm.mainProduct.id,
                                                id: s.id
                                              }
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(s.title))]
                                      ),
                                      _vm._v(" "),
                                      s.childs && s.childs.length
                                        ? _c(
                                            "div",
                                            { staticClass: "main-nav-level" },
                                            [
                                              _vm._l(s.childs, function(ss) {
                                                return [
                                                  _c(
                                                    "router-link",
                                                    {
                                                      attrs: {
                                                        to: {
                                                          name: "docs.product",
                                                          params: {
                                                            product:
                                                              _vm.mainProduct
                                                                .id,
                                                            id: ss.id
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(ss.title))]
                                                  )
                                                ]
                                              })
                                            ],
                                            2
                                          )
                                        : _vm._e()
                                    ]
                                  })
                                ],
                                2
                              )
                            : _vm._e()
                        ]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("md-toolbar", { attrs: { "md-elevation": "1" } }, [
                    _c("div", { staticClass: "md-toolbar-row" }, [
                      _c(
                        "div",
                        { staticClass: "md-toolbar-section-start" },
                        [
                          _c(
                            "md-button",
                            {
                              staticClass: "md-icon-button",
                              on: { click: _vm.onItemAdd }
                            },
                            [_c("md-icon", [_vm._v("add")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "flex" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "md-toolbar-section-end" },
                        [
                          _c(
                            "md-button",
                            {
                              staticClass: "md-icon-button",
                              attrs: { disabled: !_vm.mainPost.id },
                              on: { click: _vm.onItemEdit }
                            },
                            [_c("md-icon", [_vm._v("edit")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "md-button",
                            {
                              staticClass: "md-icon-button",
                              attrs: { disabled: !_vm.mainPost.id },
                              on: { click: _vm.onItemRemove }
                            },
                            [_c("md-icon", [_vm._v("clear")])],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-container" },
        [
          _vm.mainPost && _vm.mainPost.id
            ? _c(
                "md-card",
                { staticClass: "md-elevation-0 ql-snow" },
                [
                  _c("md-card-header", [
                    _c("div", { staticClass: "md-title" }, [
                      _vm._v(_vm._s(_vm.mainPost.title))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("md-divider"),
                  _vm._v(" "),
                  _c("md-card-content", { staticClass: "ql-editor" }, [
                    _c("div", {
                      domProps: { innerHTML: _vm._s(_vm.mainPost.content) }
                    })
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("post-edit", {
        ref: "postEdit",
        on: { "md-closed": _vm.fetchNavDatas }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-01a36fa0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e88ee1ae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/suite-docs/components/PostEdit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-dialog",
    {
      staticClass: "suite-docs-post-edit",
      attrs: {
        "md-active": _vm.showDialog,
        "md-click-outside-to-close": false,
        "md-close-on-esc": false,
        "md-fullscreen": ""
      },
      on: {
        "update:mdActive": function($event) {
          _vm.showDialog = $event
        },
        "md-opened": _vm.fetchData,
        "md-closed": _vm.onClosed
      }
    },
    [
      _c(
        "md-dialog-title",
        [
          _c(
            "md-field",
            { staticClass: "post-title" },
            [
              _c("label", [_vm._v("标题")]),
              _vm._v(" "),
              _c("md-input", {
                model: {
                  value: _vm.mainData.title,
                  callback: function($$v) {
                    _vm.$set(_vm.mainData, "title", $$v)
                  },
                  expression: "mainData.title"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-dialog-content",
        [
          _c("md-editor", {
            attrs: { height: 300, placeholder: "详细内容!" },
            model: {
              value: _vm.mainData.content,
              callback: function($$v) {
                _vm.$set(_vm.mainData, "content", $$v)
              },
              expression: "mainData.content"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-dialog-actions",
        [
          _c(
            "md-button",
            {
              staticClass: "md-primary",
              on: {
                click: function($event) {
                  _vm.showDialog = false
                }
              }
            },
            [_vm._v("取消")]
          ),
          _vm._v(" "),
          _c(
            "md-button",
            { staticClass: "md-primary", on: { click: _vm.onSave } },
            [
              _c("md-icon", [_vm._v("save")]),
              _vm._v(" "),
              _c("span", [_vm._v("保存")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("md-loading", { attrs: { loading: _vm.loading } })
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
    require("vue-hot-reload-api")      .rerender("data-v-e88ee1ae", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/vendor/suite-docs/components/PostEdit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e88ee1ae\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/suite-docs/components/PostEdit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/suite-docs/components/PostEdit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e88ee1ae\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/suite-docs/components/PostEdit.vue")
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
Component.options.__file = "resources\\assets\\js\\vendor\\suite-docs\\components\\PostEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e88ee1ae", Component.options)
  } else {
    hotAPI.reload("data-v-e88ee1ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/vendor/suite-docs/pages/Product.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01a36fa0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/suite-docs/pages/Product.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/suite-docs/pages/Product.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-01a36fa0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/suite-docs/pages/Product.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01a36fa0"
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
Component.options.__file = "resources\\assets\\js\\vendor\\suite-docs\\pages\\Product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01a36fa0", Component.options)
  } else {
    hotAPI.reload("data-v-01a36fa0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});