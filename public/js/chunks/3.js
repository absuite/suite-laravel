webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AuthCache = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/AuthCache.js");

var _AuthCache2 = _interopRequireDefault(_AuthCache);

var _pick = __webpack_require__("./node_modules/lodash/pick.js");

var _pick2 = _interopRequireDefault(_pick);

var _Sns = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue");

var _Sns2 = _interopRequireDefault(_Sns);

var _vuelidate = __webpack_require__("./node_modules/vuelidate/lib/index.js");

var _validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'GmfPagesAuthIdentifier',
  components: {
    AuthSns: _Sns2.default
  },
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
      account: {
        required: _validators.required,
        minLength: (0, _validators.minLength)(3),
        maxLength: (0, _validators.maxLength)(30)
      }
    }
  },
  computed: {
    canRegister: function canRegister() {
      if (!this.$root.configs.auth || !this.$root.configs.auth.register) return false;
      return this.$root.configs.auth.register;
    },
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
    validateUser: function validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitPost();
      }
    },
    submitPost: function submitPost() {
      var _this = this;

      this.sending = true;
      this.$http.post('sys/auth/checker', this.mainDatas).then(function (response) {
        _this.sending = false;
        var u = response.data.data;
        if (u) {
          u = (0, _pick2.default)(u, ['id', 'account', 'avatar', 'email', 'name', 'nick_name']);
          _AuthCache2.default.add(u);
          _this.$go({ name: 'auth.password', params: { id: u.id }, query: _this.routeQuery });
        }
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
}; //
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

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
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
  name: 'GmfPagesAuthSns',
  props: {
    title: {
      type: String,
      default: '使用合作账号登录'
    },
    type: {
      type: String,
      default: 'login'
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
        url = old.indexOf('?') > 0 ? old + '&type=' + this.type : old + '?type=' + this.type;
      } else if (old) {
        url = old;
      }
      if (url && this.$route.query.continue) {
        url = url.indexOf('?') > 0 ? url + '&continue=' + this.$route.query.continue : url + '?continue=' + this.$route.query.continue;
      }
      return url;
    }
  },
  mounted: function mounted() {
    this.fetchData();
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * The default transition, used when the element is visible\r\n * since the beginning of the animation\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The enter transition, used when the element is not visible on the screen\r\n * since the beginning of the animation and become visible\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The leave transition, used when the element is visible on the screen\r\n * since the beginning of the animation and is removed\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The stand transition, used when the element is going to accelerate,\r\n * like movements from bottom to top\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The out transition, used when the element is going to deaccelerate,\r\n * like movements from top to bottom\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/* Transitions - Based on Angular Material */\n/**\r\n * Breakpoint\r\n */\n/**\r\n * Base\r\n */\n/**\r\n * Layout Item\r\n */\n/**\r\n * Hide Element\r\n */\n.login-sns[data-v-d50a4dc6] {\n  text-align: center;\n}\n.login-sns .md-icon-button[data-v-d50a4dc6] {\n    margin: 20px 36px 0px 0px;\n    min-width: auto;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n}\n.login-sns .md-icon-button .md-icon[data-v-d50a4dc6] {\n      transition: all .345s;\n      width: 30px;\n      height: 30px;\n      font-size: 30px;\n}\n.login-sns .md-icon-button:hover .md-icon[data-v-d50a4dc6] {\n      transform: scale(1.3);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e8e9ba5c", content, false, {});
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6bbca514\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue":
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
            return _vm.validateUser($event)
          }
        }
      },
      [
        _c(
          "md-card-header",
          [
            _c("md-card-header-text", [
              _c("div", { staticClass: "md-title" }, [_vm._v("登录")]),
              _vm._v(" "),
              _c("div", { staticClass: "md-body-1" }, [
                _vm._v("使用您的帐号登录")
              ])
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
                    class: _vm.getValidationClass("account"),
                    attrs: { "md-clearable": "" }
                  },
                  [
                    _c("label", [_vm._v("电子邮件地址或电话号码")]),
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
                    !_vm.$v.mainDatas.account.required
                      ? _c("span", { staticClass: "md-error" }, [
                          _vm._v("请输入电子邮件地址或电话号码")
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
            _vm.canRegister
              ? _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "auth.register", query: _vm.routeQuery }
                    }
                  },
                  [_vm._v("免费注册")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "flex" }),
            _vm._v(" "),
            _c(
              "md-button",
              {
                staticClass: "md-primary md-raised",
                attrs: { type: "submit", disabled: _vm.sending }
              },
              [_vm._v("下一步")]
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
    require("vue-hot-reload-api")      .rerender("data-v-6bbca514", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d50a4dc6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
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

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/AuthCache.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthCache = function () {
  function AuthCache() {
    _classCallCheck(this, AuthCache);

    this.storageKey = "gmf.sys.auth." + window.location.host;
  }

  _createClass(AuthCache, [{
    key: "get",
    value: function get() {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }
  }, {
    key: "has",
    value: function has(user) {
      return false;
    }
  }, {
    key: "remove",
    value: function remove(user) {
      if (!user) return;
      var users = this.get();
      var ind = -1;
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == user.id) {
          ind = i;
          break;
        }
      }
      if (i >= 0) {
        users.splice(i, 1);
        localStorage.removeItem(this.storageKey);
        localStorage.setItem(this.storageKey, JSON.stringify(users));
      }
    }
  }, {
    key: "add",
    value: function add(user) {
      if (!user) return;
      var users = this.get();
      var isExists = false;
      users.forEach(function (item) {
        if (item.id == user.id) {
          isExists = true;
        }
      });
      if (!isExists) {
        users.push(user);
      }
      localStorage.removeItem(this.storageKey);
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
  }]);

  return AuthCache;
}();

exports.default = new AuthCache();

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6bbca514\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue")
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Identifier.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bbca514", Component.options)
  } else {
    hotAPI.reload("data-v-6bbca514", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d50a4dc6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
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


/***/ })

});