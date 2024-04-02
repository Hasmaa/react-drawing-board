"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ShapeIcon = function ShapeIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _objectSpread({
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M51.6,14.6c-2.3-2.3-5.4-3.6-8.7-3.6s-6.4,1.3-8.7,3.6c-2.3,2.3-3.6,5.4-3.6,8.7c0,0.6,0,1.2,0.1,1.8H20.7\n        c-3.2,0-5.9,2.6-5.9,5.9v14.2c0,3.2,2.6,5.9,5.9,5.9h14.2c3.2,0,5.9-2.6,5.9-5.9v-9.8c0.7,0.1,1.4,0.2,2.2,0.2\n        c3.3,0,6.4-1.3,8.7-3.6c2.3-2.3,3.6-5.4,3.6-8.7S53.9,16.9,51.6,14.6L51.6,14.6z M38.8,45.1c0,2.2-1.8,3.9-3.9,3.9H20.7\n        c-2.2,0-3.9-1.8-3.9-3.9V30.9c0-2.2,1.8-3.9,3.9-3.9h10.5c0.6,1.8,1.6,3.5,3,4.9c1.3,1.3,2.9,2.3,4.6,2.9L38.8,45.1L38.8,45.1\n        L38.8,45.1z M38.8,32.8c-2.5-1.1-4.5-3.2-5.5-5.7h1.6c2.2,0,3.9,1.8,3.9,3.9L38.8,32.8z M42.9,33.6c-0.7,0-1.5-0.1-2.2-0.2v-2.5\n        c0-3.2-2.6-5.9-5.9-5.9h-2.2c-0.1-0.6-0.2-1.2-0.2-1.8c0-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3\n        C53.2,29,48.6,33.6,42.9,33.6L42.9,33.6z"
  }));
};
var _default = exports.default = ShapeIcon;