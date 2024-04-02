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
var EraserIcon = function EraserIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _objectSpread({
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M29.4,51.8c-2.8,0-5.2-1-7.1-2.9l-9.2-9.2c-0.9-0.9-1.4-2.1-1.4-3.3s0.5-2.4,1.4-3.3l20.6-20.7\n        c0.9-0.9,2.1-1.4,3.3-1.4c1.2,0,2.4,0.5,3.3,1.4l13,13c0.9,1,1.4,2.3,1.4,3.4c0,1.2-0.5,2.4-1.4,3.3L36.5,48.9\n        C34.5,50.8,32,51.8,29.4,51.8z M14.9,34.8c-0.3,0.3-0.5,0.8-0.5,1.3c0,0.5,0.2,0.9,0.5,1.3l4.2,4.2l5.9,5.8c1,1,2.5,1.6,4.2,1.6\n        c1.9,0,3.9-0.7,5.1-1.8L18.5,31.3L14.9,34.8z M36.4,45.1l3.4-3.4l11.5-11.6c0.2-0.2,0.4-0.9,0.4-1.4c0-0.5-0.2-0.9-0.5-1.3L38,14.3\n        c-0.3-0.3-0.8-0.5-1.3-0.5s-0.9,0.2-1.3,0.5l-14.9,15L36.4,45.1z"
  }));
};
var _default = exports.default = EraserIcon;