webpackJsonp([18],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Reset.vue":
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

exports.default = {
  name: 'GmfPagesAuthPassword',
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
        minLength: (0, _validators.minLength)(6),
        maxLength: (0, _validators.maxLength)(30)
      },
      password_confirmation: {
        sameAsPassword: (0, _validators.sameAs)('password')
      }
    }
  },
  computed: {
    routeQuery: function routeQuery() {
      var q = {};
      if (this.$route.query && this.$route.query.continue) q.continue = this.$route.query.continue;
      return q;
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
                this.mainDatas.token = this.$route.params.token;
                _context.next = 5;
                return this.$http.post('sys/auth/reset', this.mainDatas);

              case 5:
                response = _context.sent;

                this.sending = false;
                this.$setConfigs({ user: response.data.data, token: response.data.token });
                _context.next = 10;
                return this.$root.$loadConfigs();

              case 10:
                this.$go(this.$route.query.continue ? this.$route.query.continue : this.$root.configs.home);
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](0);

                this.sending = false;
                this.$toast(_context.t0);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));

      function submitPost() {
        return _ref.apply(this, arguments);
      }

      return submitPost;
    }(),
    fetchData: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var thId, response, u, options;
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
                options = { id: this.mainDatas.id, type: 'password', token: this.$route.params.token };
                _context2.next = 12;
                return this.$http.post('sys/auth/vcode-checker', options);

              case 12:
                _context2.next = 18;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](0);

                this.$toast(_context2.t0);
                this.$go({ name: 'auth.identifier', query: this.routeQuery });

              case 18:
                _context2.prev = 18;

                this.sending = false;
                return _context2.finish(18);

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14, 18, 21]]);
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-44986634\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Reset.vue":
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
              _c("div", { staticClass: "md-title" }, [_vm._v("重置密码")])
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
                    _c("label", [_vm._v("输入您的新密码")]),
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
            ),
            _vm._v(" "),
            _c(
              "md-layout",
              [
                _c(
                  "md-field",
                  { class: _vm.getValidationClass("password_confirmation") },
                  [
                    _c("label", [_vm._v("确认密码")]),
                    _vm._v(" "),
                    _c("md-input", {
                      attrs: {
                        autocomplete: "off",
                        type: "password",
                        disabled: _vm.sending
                      },
                      model: {
                        value: _vm.mainDatas.password_confirmation,
                        callback: function($$v) {
                          _vm.$set(_vm.mainDatas, "password_confirmation", $$v)
                        },
                        expression: "mainDatas.password_confirmation"
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.mainDatas.password_confirmation.sameAsPassword
                      ? _c("span", { staticClass: "md-error" }, [
                          _vm._v("确认密码不符合要求")
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
            _c("span", { staticClass: "flex" }),
            _vm._v(" "),
            _c(
              "md-button",
              {
                staticClass: "md-primary md-raised",
                attrs: { type: "submit", disabled: _vm.sending }
              },
              [_vm._v("设置")]
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
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-44986634", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Reset.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Reset.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-44986634\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Reset.vue")
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Reset.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44986634", Component.options)
  } else {
    hotAPI.reload("data-v-44986634", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});