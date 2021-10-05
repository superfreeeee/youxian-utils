"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _json = require("./json");

Object.keys(_json).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _json[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _json[key];
    }
  });
});

var _optimization = require("./optimization");

Object.keys(_optimization).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _optimization[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _optimization[key];
    }
  });
});

var _time = require("./time");

Object.keys(_time).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _time[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _time[key];
    }
  });
});