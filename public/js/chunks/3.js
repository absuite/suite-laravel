webpackJsonp([3],{"+cKO":function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.maxValue=e.minValue=e.and=e.or=e.url=e.sameAs=e.requiredUnless=e.requiredIf=e.required=e.minLength=e.maxLength=e.macAddress=e.ipAddress=e.email=e.between=e.numeric=e.alphaNum=e.alpha=void 0;var a=r(n("FWhV")),i=r(n("PKmV")),u=r(n("hbkP")),o=r(n("3Ro/")),s=r(n("6rz0")),l=r(n("HSVw")),d=r(n("HM/u")),c=r(n("qHXR")),f=r(n("4ypF")),h=r(n("4oDf")),v=r(n("lEk1")),m=r(n("6+Xr")),p=r(n("L6Jx")),y=r(n("7J6f")),g=r(n("Y18q")),_=r(n("bXE/")),b=r(n("aYrh")),P=r(n("xJ3U"));e.alpha=a.default,e.alphaNum=i.default,e.numeric=u.default,e.between=o.default,e.email=s.default,e.ipAddress=l.default,e.macAddress=d.default,e.maxLength=c.default,e.minLength=f.default,e.required=h.default,e.requiredIf=v.default,e.requiredUnless=m.default,e.sameAs=p.default,e.url=y.default,e.or=g.default,e.and=_.default,e.minValue=b.default,e.maxValue=P.default},"3Ro/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(t,e){return(0,r.withParams)({type:"between",min:t,max:e},function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+t<=+n&&+e>=+n})}},"4oDf":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=(0,r.withParams)({type:"required"},r.req)},"4ypF":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(t){return(0,r.withParams)({type:"minLength",min:t},function(e){return!(0,r.req)(e)||(0,r.len)(e)>=t})}},"6+Xr":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(t){return(0,r.withParams)({type:"requiredUnless",prop:t},function(e,n){return!!(0,r.ref)(t,this,n)||(0,r.req)(e)})}},"6CJ7":function(t,e,n){(t.exports=n("FZ+f")(void 0)).push([t.i,".md-card-actions[data-v-0d0a56d4]{-webkit-box-pack:center;justify-content:center}",""])},"6rz0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=(0,r.regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/)},"7J6f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=(0,r.regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/)},Bsco:function(t,e,n){"use strict";function r(t){return null===t||void 0===t}function a(t){return null!==t&&void 0!==t}function i(t,e){return e.tag===t.tag&&e.key===t.key}function u(t){var e=t.tag;t.vm=new e({data:t.args})}function o(t,e,n){var r=void 0,i=void 0,u={};for(r=e;r<=n;++r)a(i=t[r].key)&&(u[i]=r);return u}function s(t,e,n){for(;e<=n;++e)u(t[e])}function l(t,e,n){for(;e<=n;++e){var r=t[e];a(r)&&(r.vm.$destroy(),r.vm=null)}}function d(t,e){t!==e&&(e.vm=t.vm,function(t){for(var e=Object.keys(t.args),n=0;n<e.length;n++)e.forEach(function(e){t.vm[e]=t.args[e]})}(e))}Object.defineProperty(e,"__esModule",{value:!0}),e.patchChildren=function(t,e){a(t)&&a(e)?t!==e&&function(t,e){for(var n=0,c=0,f=t.length-1,h=t[0],v=t[f],m=e.length-1,p=e[0],y=e[m],g=void 0,_=void 0,b=void 0;n<=f&&c<=m;)r(h)?h=t[++n]:r(v)?v=t[--f]:i(h,p)?(d(h,p),h=t[++n],p=e[++c]):i(v,y)?(d(v,y),v=t[--f],y=e[--m]):i(h,y)?(d(h,y),h=t[++n],y=e[--m]):i(v,p)?(d(v,p),v=t[--f],p=e[++c]):(r(g)&&(g=o(t,n,f)),r(_=a(p.key)?g[p.key]:null)?(u(p),p=e[++c]):i(b=t[_],p)?(d(b,p),t[_]=void 0,p=e[++c]):(u(p),p=e[++c]));n>f?s(e,c,m):c>m&&l(t,n,f)}(t,e):a(e)?s(e,0,e.length-1):a(t)&&l(t,0,t.length-1)},e.h=function(t,e,n){return{tag:t,key:e,args:n}}},ESwS:function(t,e,n){"use strict";function r(t){return"function"==typeof t}function a(t){return null!==t&&("object"==typeof t||r(t))}function i(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach(function(t){e[t][n]()})}function u(t){t.mixin(M)}Object.defineProperty(e,"__esModule",{value:!0}),e.withParams=e.validationMixin=e.Vuelidate=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=n("Bsco"),l=n("JVqD"),d=function(){return null},c=function(t,e,n){return t.reduce(function(t,r){return t[n?n(r):r]=e(r),t},{})},f=function(t,e,n,r){if("function"==typeof n)return n.call(t,e,r);n=Array.isArray(n)?n:n.split(".");for(var a=0;a<n.length;a++){if(!e||"object"!=typeof e)return r;e=e[n[a]]}return void 0===e?r:e},h="__isVuelidateAsyncVm",v={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some(function(e){return t.refProxy(e).$invalid})||this.ruleKeys.some(function(t){return!e[t]})},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every(function(e){return t.refProxy(e).$dirty})},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$pending:function(){var t=this;return this.ruleKeys.some(function(e){return t.getRef(e).$pending})||this.nestedKeys.some(function(e){return t.refProxy(e).$pending})},$params:function(){var t=this,e=this.validations;return o({},c(this.nestedKeys,function(t){return e[t]&&e[t].$params||null}),c(this.ruleKeys,function(e){return t.getRef(e).$params}))}},m={$touch:function(){i.call(this,!0)},$reset:function(){i.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var r=t[n].$flattenParams(),a=0;a<r.length;a++)r[a].path.unshift(n);e=e.concat(r)}else e.push({path:[],name:n,params:this.$params[n]});return e}},p=Object.keys(v),y=Object.keys(m),g=null,_=function(t){if(g)return g;var e=t.extend({beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&(0,s.patchChildren)(this._vval)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]}},computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,s.patchChildren)(t,this._vval);var e={};return this._vval.forEach(function(t){e[t.key]=t.vm}),e}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,l.pushParams)();var i=this.rule.call(this.rootModel,n,e),u=function(t){return a(t)&&r(t.then)}(i)?function(t,e){var n=new t({data:{p:!0,v:!1}});return e.then(function(t){n.p=!1,n.v=t},function(t){throw n.p=!1,n.v=!1,t}),n[h]=!0,n}(t,i):i,o=(0,l.popParams)();return{output:u,params:o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null}}},computed:{run:function(){return this.runRule(this.lazyParentModel())},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t[h]?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t[h]&&t.p}}}),i=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:o({},m,{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!=typeof this.validations[t]}}),computed:o({},v,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter(function(e){return!t.isNested(e)})},keys:function(){return Object.keys(this.validations).filter(function(t){return"$params"!==t})},proxy:function(){var t=this,e=c(this.keys,function(e){return{enumerable:!0,configurable:!1,get:function(){return t.refProxy(e)}}}),n=c(p,function(e){return{enumerable:!0,configurable:!1,get:function(){return t[e]}}}),r=c(y,function(e){return{enumerable:!1,configurable:!1,get:function(){return t[e]}}});return Object.defineProperties({},o({},e,n,r))},children:function(){var t=this;return[].concat(this.nestedKeys.map(function(e){return b(t,e)}),this.ruleKeys.map(function(e){return P(t,e)})).filter(Boolean)}})}),u=i.extend({methods:{isNested:function(t){return void 0!==this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),_=i.extend({computed:{keys:function(){var t=this.getModel();return a(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return""+f(t.rootModel,t.getModelKey(n),e)}:function(t){return""+t}},eagerParentModel:function(){var t=this.lazyParentModel();return function(){return t}},children:function(){var t=this,e=this.validations,n=this.getModel(),r=o({},e);delete r.$trackBy;var a={};return this.keys.map(function(e){var u=t.tracker(e);return a.hasOwnProperty(u)?null:(a[u]=!0,(0,s.h)(i,u,{validations:r,prop:e,lazyParentModel:t.eagerParentModel,model:n[e],rootModel:t.rootModel}))}).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]}}}),b=function(t,e){if("$each"===e)return(0,s.h)(_,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var r=t.rootModel,a=c(n,function(t){return function(){return f(r,r.$v,t)}},function(t){return Array.isArray(t)?t.join("."):t});return(0,s.h)(u,e,{validations:a,lazyParentModel:d,prop:e,lazyModel:d,rootModel:r})}return(0,s.h)(i,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},P=function(t,e){return(0,s.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return g={VBase:e,Validation:i}},b=null,P=function(t,e){var n=function(t){if(b)return b;for(var e=t.constructor;e.super;)e=e.super;return b=e,e}(t),r=_(n),a=r.Validation;return new(0,r.VBase)({computed:{children:function(){var n="function"==typeof e?e.call(t):e;return[(0,s.h)(a,"$v",{validations:n,lazyParentModel:d,prop:"$v",model:t,rootModel:t})]}}})},M={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=P(this,t)),{}},beforeCreate:function(){var t=this,e=this.$options;e.validations&&(e.computed||(e.computed={}),e.computed.$v=function(){return t._vuelidate.refs.$v.proxy})},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};e.Vuelidate=u,e.validationMixin=M,e.withParams=l.withParams,e.default=u},Esbe:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("帐号帮助")]),t._v(" "),n("div",{staticClass:"md-body-1"},[t._v("获取验证码")])])],1),t._v(" "),n("md-list",[n("md-list-item",[n("md-avatar",[n("md-image",{attrs:{"md-src":t.mainDatas.avatar}})],1),t._v(" "),n("div",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(t.mainDatas.name))]),t._v(" "),n("span",[t._v(t._s(t.mainDatas.mobile))])]),t._v(" "),n("md-button",{staticClass:"md-icon-button md-list-action",attrs:{to:{name:"auth.chooser"}}},[n("md-icon",{staticClass:"md-primary"},[t._v("expand_more")])],1)],1)],1),t._v(" "),n("md-card-content",[n("p",[t._v(t._s(t.tipLabel))])]),t._v(" "),n("md-card-actions",[n("md-button",{staticClass:"md-primary md-raised",attrs:{disabled:t.disabledSendBtn},on:{click:t.onSendCode}},[t._v("发送验证码")])],1),t._v(" "),n("form",{attrs:{novalidate:""},on:{submit:function(e){e.preventDefault(),t.validateForm(e)}}},[n("md-card-content",[n("md-layout",[n("md-field",{class:t.getValidationClass("token")},[n("label",[t._v("验证码")]),t._v(" "),n("md-input",{attrs:{autocomplete:"off",disabled:t.sending},model:{value:t.mainDatas.token,callback:function(e){t.$set(t.mainDatas,"token",e)},expression:"mainDatas.token"}}),t._v(" "),t.$v.mainDatas.token.required?t._e():n("span",{staticClass:"md-error"},[t._v("请输入验证码")]),t._v(" "),t.$v.mainDatas.token.minLength&&t.$v.mainDatas.token.maxLength?t._e():n("span",{staticClass:"md-error"},[t._v("验证码格式不符合要求")])],1)],1)],1),t._v(" "),n("md-card-actions",[n("md-button",{staticClass:"md-primary",on:{click:t.onOtherClick}},[t._v("我没有使用手机")]),t._v(" "),n("span",{staticClass:"flex"}),t._v(" "),n("md-button",{staticClass:"md-primary md-raised",attrs:{type:"submit",disabled:t.disabledConfirmBtn}},[t._v("下一步")])],1)],1),t._v(" "),t.sending?n("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],1)},staticRenderFns:[]}},FWhV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=(0,r.regex)("alpha",/^[a-zA-Z]*$/)},"HM/u":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var n="string"==typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(a)})};var a=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},HSVw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=(0,r.withParams)({type:"ipAddress"},function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(a)});var a=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},JVqD:function(t,e,n){"use strict";function r(){null!==l&&s.push(l),e.target=l={}}function a(){var t=l,n=e.target=l=s.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function i(t){if("object"!=typeof t||Array.isArray(t))throw new Error("params must be an object");e.target=l=o({},l,t)}function u(t){var e=t(i);return function(){r();try{for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.apply(this,n)}finally{a()}}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.pushParams=r,e.popParams=a,e.withParams=function(t,e){return"object"==typeof t&&void 0!==e?function(t,e){return u(function(n){return function(){n(t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return e.apply(this,a)}})}(t,e):u(t)};var s=[],l=e.target=null;e._setTarget=function(t){e.target=l=t}},L6Jx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(t){return(0,r.withParams)({type:"sameAs",eq:t},function(e,n){return e===(0,r.ref)(t,this,n)})}},MP02:function(t,e,n){var r=n("6CJ7");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("576d5fb6",r,!0)},PKmV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},URu4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.regex=e.ref=e.len=e.req=e.withParams=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("mpcv"));e.withParams=r.default;var a=e.req=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t||!1===t)return!1;if(t instanceof Date)return!isNaN(t.getTime());if("object"==typeof t){for(var e in t)return!0;return!1}return!!String(t).length};e.len=function(t){return Array.isArray(t)?t.length:"object"==typeof t?Object.keys(t).length:String(t).length},e.ref=function(t,e,n){return"function"==typeof t?t.call(e,n):n[t]},e.regex=function(t,e){return(0,r.default)({type:t},function(t){return!a(t)||e.test(t)})}},Y18q:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,r.withParams)({type:"or"},function(){for(var t=this,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return e.length>0&&e.reduce(function(e,n){return e||n.apply(t,r)},!1)})}},aYrh:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(t){return(0,r.withParams)({type:"minValue",min:t},function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t})}},"bXE/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,r.withParams)({type:"and"},function(){for(var t=this,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return e.length>0&&e.reduce(function(e,n){return e&&n.apply(t,r)},!0)})}},eXAi:function(t,e,n){var r=n("VU/8")(n("yl+w"),n("Esbe"),!1,function(t){n("MP02")},"data-v-0d0a56d4",null);t.exports=r.exports},hbkP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=(0,r.regex)("numeric",/^[0-9]*$/)},lEk1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(t){return(0,r.withParams)({type:"requiredIf",prop:t},function(e,n){return!(0,r.ref)(t,this,n)||(0,r.req)(e)})}},mpcv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("JVqD").withParams;e.default=r},qHXR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(t){return(0,r.withParams)({type:"maxLength",max:t},function(e){return!(0,r.req)(e)||(0,r.len)(e)<=t})}},xJ3U:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("URu4");e.default=function(t){return(0,r.withParams)({type:"maxValue",max:t},function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t})}},"yl+w":function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(a,i){try{var u=e[a](i),o=u.value}catch(t){return void n(t)}if(!u.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("ESwS"),i=n("+cKO");e.default={name:"GmfPagesAuthPasswordFindSms",props:{},mixins:[a.validationMixin],data:function(){return{mainDatas:{},loading:0,sending:!1,isSended:!1}},validations:{mainDatas:{token:{required:i.required,minLength:(0,i.minLength)(6),maxLength:(0,i.maxLength)(6)}}},computed:{disabledSendBtn:function(){return this.sending||this.isSended||!!this.mainDatas.token},disabledConfirmBtn:function(){return this.sending||!this.isSended||!this.mainDatas.token},tipLabel:function(){return this.$root.appName+" 会将验证码发送到 "+this.mainDatas.mobile}},methods:{onOtherClick:function(){this.$go({name:"auth.password.find.mail",params:{id:this.mainDatas.id}})},onSendCode:function(){var t=this;this.sending=!0;var e={id:this.mainDatas.id,account:this.mainDatas.account,type:"password",mode:"sms"};this.$http.post("sys/auth/vcode-create",e).then(function(e){t.isSended=!0,t.sending=!1,t.$toast("验证码已发送到您的手机上，请及时查收!")}).catch(function(e){t.sending=!1,t.$toast(e)})},getValidationClass:function(t){var e=this.$v.mainDatas[t];if(e)return{"md-invalid":e.$invalid&&e.$dirty}},validateForm:function(){this.$v.$touch(),this.$v.$invalid||this.submitPost()},submitPost:function(){var t=this;this.sending=!0;var e={id:this.mainDatas.id,account:this.mainDatas.account,type:"password",token:this.mainDatas.token};this.$http.post("sys/auth/vcode-checker",e).then(function(e){t.sending=!1,t.$go({name:"auth.reset",params:{id:t.mainDatas.id,token:t.mainDatas.token}})}).catch(function(e){t.sending=!1,t.$toast(e)})},fetchData:function(){var t=r(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.sending=!0,(e=this.$route.params.id)||this.$go({name:"auth.login"}),t.next=6,this.$http.post("sys/auth/checker",{id:e});case 6:n=t.sent,this.mainDatas=n.data.data,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),this.$toast(t.t0),this.$go({name:"auth.identifier"});case 14:return t.prev=14,this.sending=!1,t.finish(14);case 17:case"end":return t.stop()}},t,this,[[0,10,14,17]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=r(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchData();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}});