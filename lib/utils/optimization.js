"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cache = exports.throttle = exports.debounce = void 0;

/**
 * 优化类型工具函数
 */
// 默认防抖间隔
var DEFAULT_DEBOUNCE_DELAY = 300; // 默认截流间隔

var DEFAULT_THROTTLE_DELAY = 300;
/**
 * 防抖
 * @param fn
 * @param delay
 * @returns
 */

var debounce = function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_DEBOUNCE_DELAY;
  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(void 0, args);
    }, delay);
  };
};
/**
 * 截流
 * @param fn
 * @param delay 毫秒
 * @returns
 */


exports.debounce = debounce;

var throttle = function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THROTTLE_DELAY;
  var lock = false;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (lock) {
      return;
    }

    lock = true;
    setTimeout(function () {
      fn.apply(void 0, args);
      lock = false;
    }, delay);
  };
};
/**
 * 缓存函数执行结果
 * @param fn
 * @returns
 */


exports.throttle = throttle;

var cache = function cache(fn) {
  var result = null;
  var done = false;
  return function () {
    if (!done) {
      result = fn.apply(void 0, arguments);
      done = true;
      fn = null; // 释放函数内存
    }

    return result;
  };
};

exports.cache = cache;