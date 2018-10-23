webpackJsonp([4],{

/***/ 2153:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(2192)
/* template */
var __vue_template__ = __webpack_require__(2193)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c383a74", Component.options)
  } else {
    hotAPI.reload("data-v-4c383a74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 2167:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2168)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(2170)
/* template */
var __vue_template__ = __webpack_require__(2171)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d50a4dc6"
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Sns.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d50a4dc6", Component.options)
  } else {
    hotAPI.reload("data-v-d50a4dc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 2168:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2145)("e8e9ba5c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sns.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sns.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(441)(false);
// imports


// module
exports.push([module.i, "/**\r\n * The default transition, used when the element is visible\r\n * since the beginning of the animation\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The enter transition, used when the element is not visible on the screen\r\n * since the beginning of the animation and become visible\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The leave transition, used when the element is visible on the screen\r\n * since the beginning of the animation and is removed\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The stand transition, used when the element is going to accelerate,\r\n * like movements from bottom to top\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The out transition, used when the element is going to deaccelerate,\r\n * like movements from top to bottom\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/* Transitions - Based on Angular Material */\n/**\r\n*\r\n*/\n/**\r\n * Breakpoint\r\n */\n/**\r\n * Base\r\n */\n/**\r\n * Layout Item\r\n */\n/**\r\n * Hide Element\r\n */\n.login-sns[data-v-d50a4dc6] {\n  text-align: center;\n}\n.login-sns .md-icon-button[data-v-d50a4dc6] {\n    margin: 20px 36px 0px 0px;\n    min-width: auto;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n}\n.login-sns .md-icon-button .md-icon[data-v-d50a4dc6] {\n      transition: all 0.345s;\n      width: 30px;\n      height: 30px;\n      font-size: 30px;\n}\n.login-sns .md-icon-button:hover .md-icon[data-v-d50a4dc6] {\n      transform: scale(1.3);\n}\n", ""]);

// exports


/***/ }),

/***/ 2170:
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

exports.default = {
  name: "GmfPagesAuthSns",
  props: {
    title: {
      type: String,
      default: "使用合作账号登录"
    },
    type: {
      type: String,
      default: "login"
    }
  },
  data: function data() {
    return {
      sending: false
    };
  },

  computed: {
    canSns: function canSns() {
      if (!this.$root.configs.auth || !this.$root.configs.auth.sns) return false;
      return this.$root.configs.auth.sns;
    },
    snsQQ: function snsQQ() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.qq);
    },
    snsWeixin: function snsWeixin() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.weixin);
    },
    snsWeibo: function snsWeibo() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.weibo);
    }
  },
  methods: {
    fetchData: function fetchData() {},
    makeUrl: function makeUrl(old) {
      var url = false;
      if (old && this.type) {
        url = old.indexOf("?") > 0 ? old + "&type=" + this.type : old + "?type=" + this.type;
      } else if (old) {
        url = old;
      }
      if (url && this.$route.query.continue) {
        if (url.indexOf("?") > 0) {
          url = url + "&continue=" + encodeURIComponent(this.$route.query.continue);
        } else {
          url = url + "?continue=" + encodeURIComponent(this.$route.query.continue);
        }
      }
      return url;
    }
  },
  mounted: function mounted() {
    this.fetchData();
  }
};

/***/ }),

/***/ 2171:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canSns
    ? _c("md-card-content", { staticClass: "login-sns" }, [
        _c("div", { staticClass: "md-subheading" }, [
          _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "layout-row layout-align-center-center" },
          [
            _vm.snsQQ
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsQQ }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-qq.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.snsWeixin
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsWeixin }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-weixin.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.snsWeibo
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsWeibo }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-weibo.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d50a4dc6", module.exports)
  }
}

/***/ }),

/***/ 2192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _Sns = __webpack_require__(2167);

var _Sns2 = _interopRequireDefault(_Sns);

var _vuelidate = __webpack_require__(50);

var _validators = __webpack_require__(51);

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

exports.default = {
  name: 'GmfPagesAuthPassword',
  components: {
    AuthSns: _Sns2.default
  },
  props: {},
  mixins: [_vuelidate.validationMixin],
  data: function data() {
    return {
      mainDatas: {},
      loading: 0,
      sending: false
    };
  },

  validations: {
    mainDatas: {
      password: {
        required: _validators.required,
        minLength: (0, _validators.minLength)(3),
        maxLength: (0, _validators.maxLength)(30)
      }
    }
  },
  computed: {
    routeQuery: function routeQuery() {
      var q = {};
      if (this.$route.query && this.$route.query.continue) q.continue = this.$route.query.continue;
      return q;
    },
    appName: function appName() {
      return this.$root.appName ? " " + this.$root.appName + " " : "";
    }
  },
  methods: {
    getValidationClass: function getValidationClass(fieldName) {
      var field = this.$v.mainDatas[fieldName];
      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        };
      }
    },
    validateForm: function validateForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitPost();
      }
    },
    submitPost: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                this.sending = true;
                _context.next = 4;
                return this.$http.post('sys/auth/login', this.mainDatas);

              case 4:
                response = _context.sent;

                this.sending = false;
                this.$setConfigs({ user: response.data.data, token: response.data.token });
                _context.next = 9;
                return this.$root.$loadConfigs();

              case 9:
                this.$go(this.$route.query.continue ? this.$route.query.continue : this.$root.configs.home);
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                this.sending = false;
                this.$toast(_context.t0);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function submitPost() {
        return _ref.apply(this, arguments);
      }

      return submitPost;
    }(),
    fetchData: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var thId, response, u;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                this.sending = true;
                thId = this.$route.params.id;

                if (!thId) {
                  this.$go({ name: 'auth.chooser', query: this.routeQuery });
                }
                _context2.next = 6;
                return this.$http.post('sys/auth/checker', { id: thId });

              case 6:
                response = _context2.sent;
                u = response.data.data;

                this.mainDatas = response.data.data;
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](0);

                this.$toast(_context2.t0);
                this.$go({ name: 'auth.identifier', query: this.routeQuery });

              case 15:
                _context2.prev = 15;

                this.sending = false;
                return _context2.finish(15);

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11, 15, 18]]);
      }));

      function fetchData() {
        return _ref2.apply(this, arguments);
      }

      return fetchData;
    }()
  },
  mounted: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.fetchData();

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function mounted() {
      return _ref3.apply(this, arguments);
    }

    return mounted;
  }()
};

/***/ }),

/***/ 2193:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("md-card", [
    _c(
      "form",
      {
        attrs: { novalidate: "" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.validateForm($event)
          }
        }
      },
      [
        _c(
          "md-card-header",
          [
            _c("md-card-header-text", [
              _c("div", { staticClass: "md-title" }, [_vm._v("欢迎")]),
              _vm._v(" "),
              _vm.appName
                ? _c("p", [_vm._v("使用您的" + _vm._s(_vm.appName) + "帐号")])
                : _vm._e()
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "md-list",
          [
            _c(
              "md-list-item",
              [
                _c(
                  "md-avatar",
                  [
                    _c("md-image", {
                      attrs: { "md-src": _vm.mainDatas.avatar }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "md-list-item-text" }, [
                  _c("span", [_vm._v(_vm._s(_vm.mainDatas.name))]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.mainDatas.account))])
                ]),
                _vm._v(" "),
                _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-list-action",
                    attrs: {
                      to: { name: "auth.chooser", query: _vm.routeQuery }
                    }
                  },
                  [
                    _c("md-icon", { staticClass: "md-primary" }, [
                      _vm._v("expand_more")
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
          "md-card-content",
          [
            _c(
              "md-layout",
              [
                _c(
                  "md-field",
                  { class: _vm.getValidationClass("password") },
                  [
                    _c("label", [_vm._v("输入您的密码")]),
                    _vm._v(" "),
                    _c("md-input", {
                      attrs: {
                        autocomplete: "off",
                        type: "password",
                        disabled: _vm.sending
                      },
                      model: {
                        value: _vm.mainDatas.password,
                        callback: function($$v) {
                          _vm.$set(_vm.mainDatas, "password", $$v)
                        },
                        expression: "mainDatas.password"
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.mainDatas.password.required
                      ? _c("span", { staticClass: "md-error" }, [
                          _vm._v("请输入密码")
                        ])
                      : _vm._e()
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
          "md-card-actions",
          [
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "auth.password.find",
                    params: { id: _vm.mainDatas.id },
                    query: _vm.routeQuery
                  }
                }
              },
              [_vm._v("忘记了密码")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "flex" }),
            _vm._v(" "),
            _c(
              "md-button",
              {
                staticClass: "md-primary md-raised",
                attrs: { type: "submit", disabled: _vm.sending }
              },
              [_vm._v("登 录")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("md-divider"),
        _vm._v(" "),
        _c("auth-sns"),
        _vm._v(" "),
        _vm.sending
          ? _c("md-progress-bar", { attrs: { "md-mode": "indeterminate" } })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c383a74", module.exports)
  }
}

/***/ })

});