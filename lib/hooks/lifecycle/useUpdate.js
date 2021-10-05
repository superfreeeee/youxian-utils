"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var useUpdate = function useUpdate(fn, deps) {
  (0, _react.useEffect)(fn, deps);
};

var _default = useUpdate;
exports["default"] = _default;