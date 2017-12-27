webpackJsonp([15],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/Pages/Auth/PasswordFindMail.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./resources/assets/js/vendor/gmf-sys/core/utils/common.js");

var _common2 = _interopRequireDefault(_common);

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

exports.default = {
  name: 'GmfPagesAuthPasswordFindMail',
  data: function data() {
    return {
      mainDatas: {},
      loading: 0,
      isSended: false,
      sending: false
    };
  },

  computed: {
    disabledSendBtn: function disabledSendBtn() {
      return this.sending || this.isSended || !!this.mainDatas.vcode;
    },
    disabledConfirmBtn: function disabledConfirmBtn() {
      return this.sending || !this.mainDatas.vcode;
    },
    tipLabel: function tipLabel() {
      return 'U9HUB 会将验证码发送到 ' + _common2.default.regEmail(this.mainDatas.email);
    }
  },
  methods: {
    onOtherClick: function onOtherClick() {
      this.$go({ name: 'auth.password.find.word', params: { id: this.mainDatas.id } });
    },
    onSendCode: function onSendCode() {
      var _this = this;

      this.sending = true;
      this.$http.post('sys/auth/password-send-mail', this.mainDatas).then(function (response) {
        _this.isSended = true;
        _this.sending = false;
        _this.$toast('验证码已发送到您的邮件上，请及时查收!');
        _this.$go({ name: 'auth.login' });
      }).catch(function (err) {
        _this.sending = false;
        _this.$toast(err);
      });
    },
    fetchData: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var thId, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                this.sending = true;
                thId = this.$route.params.id;

                if (!thId) {
                  this.$go({ name: 'auth.login' });
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
                this.$go({ name: 'auth.identifier' });

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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-aab1f854\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/Pages/Auth/PasswordFindMail.vue":
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
                _vm._v(_vm._s(_vm.mainDatas.name))
              ]),
              _vm._v(" "),
              _c(
                "md-button",
                {
                  staticClass: "md-icon-button md-list-action",
                  attrs: { to: { name: "auth.chooser" } }
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
            { staticClass: "md-primary", on: { click: _vm.onOtherClick } },
            [_vm._v("试试其他方式")]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "flex" }),
          _vm._v(" "),
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
    require("vue-hot-reload-api")      .rerender("data-v-aab1f854", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/Pages/Auth/PasswordFindMail.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/Pages/Auth/PasswordFindMail.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-aab1f854\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0&bustCache!./resources/assets/js/vendor/gmf-sys/Pages/Auth/PasswordFindMail.vue")
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\Pages\\Auth\\PasswordFindMail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aab1f854", Component.options)
  } else {
    hotAPI.reload("data-v-aab1f854", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});