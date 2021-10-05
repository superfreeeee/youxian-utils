"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryStringify = exports.tryParse = void 0;

var _logger = _interopRequireDefault(require("../libs/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * JSON 操作相关
 */

/**
 * JSON.parse 试错
 * @param item
 * @returns
 */
var tryParse = function tryParse(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    _logger["default"].error('tryParse fail');

    return {};
  }
};
/**
 * JSON.
 */


exports.tryParse = tryParse;

var tryStringify = function tryStringify(item) {
  try {
    return JSON.stringify(item);
  } catch (e) {
    _logger["default"].error('tryStringify fail');

    return {};
  }
};

exports.tryStringify = tryStringify;