"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

/**
 * componentDidMount hook 版本
 * @param fn
 */
var useMount = function useMount(fn) {
  (0, _react.useEffect)(fn, []);
};

var _default = useMount;
exports["default"] = _default;