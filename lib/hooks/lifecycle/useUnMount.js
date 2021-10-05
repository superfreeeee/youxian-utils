"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

/**
 * componentWillUnMount hook 版本
 * @param fn
 */
var useUnMount = function useUnMount(fn) {
  (0, _react.useEffect)(function () {
    return fn;
  }, []);
};

var _default = useUnMount;
exports["default"] = _default;