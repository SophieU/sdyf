(wx.webpackJsonp=wx.webpackJsonp||[]).push([[52],{"155":function(e,t,n){e.exports=n.p+"pages/staff-order/refuse.wxml"},"243":function(e,t,n){"use strict";n.r(t);n(244);var r=n(92);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o)},"244":function(e,t,n){"use strict";n(155)},"245":function(e,t,n){},"35":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o,a,s=n(0),u=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(s),i=n(10);function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(245);var f=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Refuse,s.Component),r(Refuse,[{"key":"_constructor","value":function _constructor(){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(Refuse.prototype.__proto__||Object.getPrototypeOf(Refuse.prototype),"_constructor",this).apply(this,arguments),this.state={"id":"","requestLists":[],"reasonLists":[],"requestRadioId":"","reasonId":"","orderSn":"","repaireType":"","orderState":""},this.$$refs=new u.default.RefsArray}},{"key":"componentWillMount","value":function componentWillMount(){var e=this,t=this.$router.params,n=t.id,r=t.orderSn,o=t.orderState,a=t.repaireType;this.setState({"id":n,"orderSn":r,"orderState":o,"repaireType":a},function(){e.getRefuseRequest(),e.getRefuseReason()})}},{"key":"_createData","value":function _createData(e,t,n){var r=this;return this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix,this.anonymousFunc0=function(e){return r.setRadioVal("requestRadioId",e)},this.anonymousFunc1=function(e){return r.setRadioVal("reasonId",e)},Object.assign(this.__state,{}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),a=o=Refuse,o.$$events=["anonymousFunc0","anonymousFunc1","submitOrder"],o.$$componentPath="pages/staff-order/refuse",a);function Refuse(){var e,t,a;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Refuse);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=a=_possibleConstructorReturn(this,(e=Refuse.__proto__||Object.getPrototypeOf(Refuse)).call.apply(e,[this].concat(r)))).$usedState=["id","requestLists","reasonLists","requestRadioId","reasonId","orderSn","repaireType","orderState"],a.config={"navigationBarTitleText":"申述","navigationStyle":"default"},a.getRefuseRequest=function(){var e=a.state.id;(0,i.refuseRequest)(e).then(function(e){if(0===e.data.code){var t=e.data.data;a.setState({"requestLists":t})}})},a.getRefuseReason=function(){var e=a.state.id;(0,i.refuseReason)(e).then(function(e){if(0===e.data.code){var t=e.data.data;a.setState({"reasonLists":t})}})},a.setRadioVal=function(e,t){var n=t.detail.value;a.setState(function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,n))},a.submitOrder=function(){var e=a.state,t=e.id,n=e.requestRadioId,r=e.reasonId;if(n&&r){var o={"repairOrderId":t,"statementRequestId":n,"statementReasonId":r,"masterId":u.default.getStorageSync("masterInfo").masterId};u.default.showLoading({"title":"提交中"}),(0,i.submitRefuse)(o).then(function(e){u.default.hideLoading(),0===e.data.code?u.default.showToast({"title":"申述提交成功","icon":"none"}).then(function(){return setTimeout(function(){return u.default.reLaunch({"url":"/pages/mine/mine"})},1e3)}):u.default.showToast({"title":"申述提交失败"+e.data.msg,"icon":"none"})})}else u.default.showToast({"title":"请选择申请请求和申请原因","icon":"none"})},a.customComponents=[],_possibleConstructorReturn(a,t)}t.default=f,Component(n(0).default.createComponent(f,!0))},"92":function(e,t,n){"use strict";n.r(t);var r=n(35),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t.default=o.a}},[[243,0,1,2]]]);