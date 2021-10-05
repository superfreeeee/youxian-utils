"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSpecificTimer = void 0;

/**
 * 时间相关
 */

/**
 * 创建准确延迟的计时器
 * @param delay
 * @returns
 */
var createSpecificTimer = function createSpecificTimer(delay) {
  var startTime = Date.now();

  var reset = function reset() {
    startTime = Date.now();
  };

  var next = function next(fn) {
    var restDelay = Math.max(startTime + delay - Date.now(), 0);
    var timer = setTimeout(fn, restDelay);
    return function () {
      clearTimeout(timer);
    };
  };

  return {
    reset: reset,
    next: next
  };
};

exports.createSpecificTimer = createSpecificTimer;