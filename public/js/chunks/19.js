webpackJsonp([19],{

/***/ 2161:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(2208)
/* template */
var __vue_template__ = __webpack_require__(2209)
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\AccountDashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-346c0212", Component.options)
  } else {
    hotAPI.reload("data-v-346c0212", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 2208:
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
//
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
  name: 'GmfPagesAuthAccountDashboard',
  components: {},
  data: function data() {
    return {
      mainDatas: [],
      loading: 0,
      sending: false
    };
  },

  computed: {
    routeQuery: function routeQuery() {
      var q = {};
      if (this.$route.query && this.$route.query.continue) q.continue = this.$route.query.continue;
      return q;
    },
    userName: function userName() {
      return this.$root.configs && this.$root.configs.user && this.$root.configs.user.nick_name;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.fetchData();
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.fetchData();
    next();
  },

  methods: {
    removeItem: function removeItem(item) {
      var _this = this;

      this.sending = true;
      this.$http.delete('sys/auth/joins', { data: { to_user_id: item.id } }).then(function (response) {
        _this.fetchData();
      }).catch(function (err) {
        _this.$toast(err);
        _this.sending = false;
      });
    },
    fetchData: function fetchData() {
      var _this2 = this;

      this.$http.get('sys/auth/joins').then(function (response) {
        _this2.mainDatas = response.data.data;
        _this2.sending = false;
      }).catch(function (err) {
        _this2.$toast(err);
        _this2.sending = false;
      });
    }
  }
};

/***/ }),

/***/ 2209:
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
            _c("div", { staticClass: "md-title" }, [_vm._v("我的账号关联")]),
            _vm._v(" "),
            _c("div", { staticClass: "md-body-1" }, [
              _vm._v(_vm._s(_vm.userName))
            ])
          ]),
          _vm._v(" "),
          _c(
            "md-button",
            {
              staticClass: "md-icon-button md-list-action",
              attrs: {
                to: { name: "auth.account.join", query: _vm.routeQuery }
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
      ),
      _vm._v(" "),
      _c(
        "md-list",
        [
          _vm._l(_vm.mainDatas, function(item) {
            return _c(
              "md-list-item",
              { key: item.id },
              [
                _c(
                  "md-avatar",
                  [_c("md-image", { attrs: { "md-src": item.avatar } })],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "md-list-item-text" }, [
                  _c("span", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(item.account))])
                ]),
                _vm._v(" "),
                _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-list-action",
                    on: {
                      click: function($event) {
                        _vm.removeItem(item)
                      }
                    }
                  },
                  [_c("md-icon", [_vm._v("clear")])],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "md-list-item",
            { attrs: { to: { name: "auth.account.join" } } },
            [
              _c(
                "md-avatar",
                [
                  _c("md-icon", { staticClass: "md-size-2x" }, [
                    _vm._v("account_circle")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "md-list-item-text" }, [
                _vm._v("\n        添加账号关联\n      ")
              ])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "md-card-actions",
        { attrs: { "md-alignment": "left" } },
        [
          _c("router-link", { attrs: { to: { name: "home" } } }, [
            _vm._v("返回首页")
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-346c0212", module.exports)
  }
}

/***/ })

});