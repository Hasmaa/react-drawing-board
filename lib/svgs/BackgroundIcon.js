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
var BackgroundIcon = function BackgroundIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _objectSpread({
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "64",
    height: "64",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    style: {
      padding: '3px 1px'
    }
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M384 938.666667h132.266667l422.4-422.4V384m-93.866667 554.666667c51.2 0 93.866667-42.666667 93.866667-93.866667v-93.866667L750.933333 938.666667M179.2 85.333333C128 85.333333 85.333333 128 85.333333 179.2v93.866667L273.066667 85.333333m234.666666 0L85.333333 507.733333V640L640 85.333333m226.133333 4.266667L89.6 866.133333c4.266667 17.066667 12.8 29.866667 25.6 42.666667 12.8 12.8 25.6 21.333333 42.666667 25.6L934.4 157.866667c-8.533333-34.133333-34.133333-59.733333-68.266667-68.266667z"
  }));
};
var _default = exports.default = BackgroundIcon;