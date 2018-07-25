webpackJsonp([19],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuelidate = __webpack_require__("./node_modules/vuelidate/lib/index.js");

var _validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

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
  name: 'GmfPagesAuthRegister',
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
      name: {
        required: _validators.required
      },
      account: {
        required: _validators.required,
        minLength: (0, _validators.minLength)(3),
        maxLength: (0, _validators.maxLength)(30)
      },
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

        var m = /^1[358][0123456789]\d{8}$/;
        var e = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (!m.test(this.mainDatas.account) && !e.test(this.mainDatas.account)) {
          alert('账号需要是电子邮件或者手机号!');
          return false;
        }
        this.submitPost();
      }
    },
    submitPost: function submitPost() {
      var _this = this;

      this.sending = true;
      this.$http.post('sys/auth/register', this.mainDatas).then(function (response) {
        _this.sending = false;
        _this.$go(_this.$route.query.continue ? _this.$route.query.continue : { name: 'app.users.show', params: { id: '0' } });
      }).catch(function (err) {
        _this.sending = false;
        _this.$toast(err);
      });
    },
    fetchData: function fetchData() {}
  },
  created: function created() {},
  mounted: function mounted() {
    this.fetchData();
  }
};

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-524d12ce\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Register.vue":
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
              _c("div", { staticClass: "md-title" }, [_vm._v("创建新帐号")])
            ])
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
                  {
                    class: _vm.getValidationClass("name"),
                    attrs: { "md-clearable": "" }
                  },
                  [
                    _c("label", [_vm._v("输入您的真实姓名")]),
                    _vm._v(" "),
                    _c("md-input", {
                      attrs: { autocomplete: "off", disabled: _vm.sending },
                      model: {
                        value: _vm.mainDatas.name,
                        callback: function($$v) {
                          _vm.$set(_vm.mainDatas, "name", $$v)
                        },
                        expression: "mainDatas.name"
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.mainDatas.name.required
                      ? _c("span", { staticClass: "md-error" }, [
                          _vm._v("姓名")
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
                  {
                    class: _vm.getValidationClass("account"),
                    attrs: { "md-clearable": "" }
                  },
                  [
                    _c("label", [_vm._v("账号")]),
                    _vm._v(" "),
                    _c("md-input", {
                      attrs: { autocomplete: "off", disabled: _vm.sending },
                      model: {
                        value: _vm.mainDatas.account,
                        callback: function($$v) {
                          _vm.$set(_vm.mainDatas, "account", $$v)
                        },
                        expression: "mainDatas.account"
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "md-helper-text" }, [
                      _vm._v("输入电子邮件地址或者手机号。")
                    ]),
                    _vm._v(" "),
                    !_vm.$v.mainDatas.account.required
                      ? _c("span", { staticClass: "md-error" }, [
                          _vm._v("请输入输入电子邮件地址或者手机号。!")
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
                  { class: _vm.getValidationClass("password") },
                  [
                    _c("label", [_vm._v("密码")]),
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
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", { staticClass: "md-helper-text" }, [
                      _vm._v(
                        "请至少使用 6 个字符。请勿使用您用于登录其他网站的密码或容易被猜到的密码"
                      )
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
          "md-card-actions",
          [
            _c(
              "md-button",
              {
                staticClass: "md-primary md-raised",
                attrs: { type: "submit", disabled: _vm.sending }
              },
              [_vm._v("注册")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "md-card-actions",
          { staticClass: "login-memo" },
          [
            _c(
              "router-link",
              { attrs: { to: { name: "auth.login", query: _vm.routeQuery } } },
              [_vm._v("我有帐号，直接登录")]
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
    require("vue-hot-reload-api")      .rerender("data-v-524d12ce", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Register.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Register.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-524d12ce\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Register.vue")
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-524d12ce", Component.options)
  } else {
    hotAPI.reload("data-v-524d12ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});