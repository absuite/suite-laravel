webpackJsonp([14],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _vuelidate = __webpack_require__("./node_modules/vuelidate/lib/index.js");

var _validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

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

exports.default = {
  name: 'GmfPagesAuthPasswordFindSms',
  props: {},
  mixins: [_vuelidate.validationMixin],
  data: function data() {
    return {
      mainDatas: {},
      loading: 0,
      sending: false,
      isSended: false
    };
  },

  validations: {
    mainDatas: {
      token: {
        required: _validators.required,
        minLength: (0, _validators.minLength)(6),
        maxLength: (0, _validators.maxLength)(6)
      }
    }
  },
  computed: {
    routeQuery: function routeQuery() {
      var q = {};
      if (this.$route.query && this.$route.query.continue) q.continue = this.$route.query.continue;
      return q;
    },
    disabledSendBtn: function disabledSendBtn() {
      return this.sending || this.isSended || !!this.mainDatas.token;
    },
    disabledConfirmBtn: function disabledConfirmBtn() {
      return this.sending || !this.isSended || !this.mainDatas.token;
    },
    tipLabel: function tipLabel() {
      return this.$root.appName + ' 会将验证码发送到 ' + this.mainDatas.mobile;
    }
  },
  methods: {
    onOtherClick: function onOtherClick() {
      this.$go({ name: 'auth.password.find.mail', params: { id: this.mainDatas.id }, query: this.routeQuery });
    },
    onSendCode: function onSendCode() {
      var _this = this;

      this.sending = true;
      var options = { id: this.mainDatas.id, account: this.mainDatas.account, type: 'password', mode: 'sms' };
      this.$http.post('sys/auth/vcode-create', options).then(function (response) {
        _this.isSended = true;
        _this.sending = false;
        _this.$toast('验证码已发送到您的手机上，请及时查收!');
      }).catch(function (err) {
        _this.sending = false;
        _this.$toast(err);
      });
    },
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
    submitPost: function submitPost() {
      var _this2 = this;

      this.sending = true;
      var options = { id: this.mainDatas.id, account: this.mainDatas.account, type: 'password', token: this.mainDatas.token };
      this.$http.post('sys/auth/vcode-checker', options).then(function (response) {
        _this2.sending = false;
        _this2.$go({ name: 'auth.reset', params: { id: _this2.mainDatas.id, token: _this2.mainDatas.token }, query: _this2.routeQuery });
      }).catch(function (err) {
        _this2.sending = false;
        _this2.$toast(err);
      });
    },
    fetchData: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var thId, response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                this.sending = true;
                thId = this.$route.params.id;

                if (!thId) {
                  this.$go({ name: 'auth.login', query: this.routeQuery });
                }
                _context.next = 6;
                return this.$http.post('sys/auth/checker', { id: thId });

              case 6:
                response = _context.sent;

                this.mainDatas = response.data.data;
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);

                this.$toast(_context.t0);
                this.$go({ name: 'auth.identifier', query: this.routeQuery });

              case 14:
                _context.prev = 14;

                this.sending = false;
                return _context.finish(14);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10, 14, 17]]);
      }));

      function fetchData() {
        return _ref.apply(this, arguments);
      }

      return fetchData;
    }()
  },
  mounted: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.fetchData();

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _ref2.apply(this, arguments);
    }

    return mounted;
  }()
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cedd92c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * The default transition, used when the element is visible\r\n * since the beginning of the animation\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The enter transition, used when the element is not visible on the screen\r\n * since the beginning of the animation and become visible\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The leave transition, used when the element is visible on the screen\r\n * since the beginning of the animation and is removed\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The stand transition, used when the element is going to accelerate,\r\n * like movements from bottom to top\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The out transition, used when the element is going to deaccelerate,\r\n * like movements from top to bottom\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/* Transitions - Based on Angular Material */\n/**\r\n*\r\n*/\n/**\r\n * Breakpoint\r\n */\n/**\r\n * Base\r\n */\n/**\r\n * Layout Item\r\n */\n/**\r\n * Hide Element\r\n */\n.md-card-actions[data-v-1cedd92c] {\n  justify-content: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cedd92c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cedd92c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("75fdc95a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cedd92c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PasswordFindSms.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cedd92c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PasswordFindSms.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1cedd92c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-card",
    [
      _c(
        "md-card-header",
        [
          _c("md-card-header-text", [
            _c("div", { staticClass: "md-title" }, [_vm._v("帐号帮助")]),
            _vm._v(" "),
            _c("div", { staticClass: "md-body-1" }, [_vm._v("获取验证码")])
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
                [_c("md-image", { attrs: { "md-src": _vm.mainDatas.avatar } })],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "md-list-item-text" }, [
                _c("span", [_vm._v(_vm._s(_vm.mainDatas.name))]),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.mainDatas.mobile))])
              ]),
              _vm._v(" "),
              _c(
                "md-button",
                {
                  staticClass: "md-icon-button md-list-action",
                  attrs: { to: { name: "auth.chooser", query: _vm.routeQuery } }
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
      _c("md-card-content", [_c("p", [_vm._v(_vm._s(_vm.tipLabel))])]),
      _vm._v(" "),
      _c(
        "md-card-actions",
        [
          _c(
            "md-button",
            {
              staticClass: "md-primary md-raised",
              attrs: { disabled: _vm.disabledSendBtn },
              on: { click: _vm.onSendCode }
            },
            [_vm._v("发送验证码")]
          )
        ],
        1
      ),
      _vm._v(" "),
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
            "md-card-content",
            [
              _c(
                "md-layout",
                [
                  _c(
                    "md-field",
                    { class: _vm.getValidationClass("token") },
                    [
                      _c("label", [_vm._v("验证码")]),
                      _vm._v(" "),
                      _c("md-input", {
                        attrs: { autocomplete: "off", disabled: _vm.sending },
                        model: {
                          value: _vm.mainDatas.token,
                          callback: function($$v) {
                            _vm.$set(_vm.mainDatas, "token", $$v)
                          },
                          expression: "mainDatas.token"
                        }
                      }),
                      _vm._v(" "),
                      !_vm.$v.mainDatas.token.required
                        ? _c("span", { staticClass: "md-error" }, [
                            _vm._v("请输入验证码")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.mainDatas.token.minLength ||
                      !_vm.$v.mainDatas.token.maxLength
                        ? _c("span", { staticClass: "md-error" }, [
                            _vm._v("验证码格式不符合要求")
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
                "md-button",
                { staticClass: "md-primary", on: { click: _vm.onOtherClick } },
                [_vm._v("我没有使用手机")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "flex" }),
              _vm._v(" "),
              _c(
                "md-button",
                {
                  staticClass: "md-primary md-raised",
                  attrs: { type: "submit", disabled: _vm.disabledConfirmBtn }
                },
                [_vm._v("下一步")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.sending
        ? _c("md-progress-bar", { attrs: { "md-mode": "indeterminate" } })
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-1cedd92c", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cedd92c\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1cedd92c\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/PasswordFindSms.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cedd92c"
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\PasswordFindSms.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cedd92c", Component.options)
  } else {
    hotAPI.reload("data-v-1cedd92c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});