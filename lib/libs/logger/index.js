"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEBUG_KEY = 'utils:dev';
var logger = (0, _debug["default"])(DEBUG_KEY);
var Log = {
  info: logger,
  warn: function warn(msg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return logger.apply(void 0, ["[warn] ".concat(msg)].concat(args));
  },
  error: function error(msg) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return logger.apply(void 0, ["[error] ".concat(msg)].concat(args));
  }
};
var _default = Log;
exports["default"] = _default;