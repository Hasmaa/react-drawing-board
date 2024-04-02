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
var ImageIcon = function ImageIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _objectSpread({
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64"
  }, props), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M32,11.1c0.8,0,1.5,0.7,1.5,1.5v28.5h-3V12.7C30.5,11.8,31.2,11.1,32,11.1L32,11.1z"
  }))), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.7,48.1h28.3c0.9,0,1.7-0.8,1.7-1.7V20.8c0-0.9-0.8-1.7-1.7-1.7h-6.9\n            c-0.8-0.3-1.1-0.8-1.2-1.5c0-0.7,0.4-1.2,1.2-1.5h9.5c1.1,0,2,0.9,2,2v30.9c0,1.1-0.9,2-2,2H15.2c-1.1,0-2-0.9-2-2V18.2\n            c0-1.1,0.9-2,2-2h9.7c0.7,0.2,1.1,0.7,1.1,1.4c0,0.7-0.4,1.2-1.1,1.5h-7.1c-0.9,0-1.7,0.8-1.7,1.7v25.6\n            C16,47.3,16.8,48.1,17.7,48.1z"
  }))), /*#__PURE__*/_react.default.createElement("path", {
    d: "M24,34.5c0.5-0.5,1.3-0.5,1.8,0l6.1,5.7l6.1-5.7c0.5-0.5,1.3-0.5,1.8,0c0.2,0.2,0.4,0.5,0.4,0.9\n        S40,36,39.8,36.2l-7.8,7.4l-7.8-7.4c-0.2-0.2-0.4-0.5-0.4-0.9C23.7,35.1,23.8,34.7,24,34.5L24,34.5z"
  }));
};
var _default = exports.default = ImageIcon;