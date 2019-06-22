/*
clsnm v0.0.1
https://github.com/atomita/clsnm
Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.clsnm = factory());
}(this, function () { 'use strict';

  var entries = Object.entries
      ? Object.entries
      : function (obj) {
          var result = [];
          for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                  result.push([key, obj[key]]);
              }
          }
          return result;
      };
  var concat = [].concat;
  function flat(arr) {
      return concat.apply([], arr);
  }
  function noop(key) {
      return key;
  }
  function classNames(obj, mapper, filter) {
      return flat(entries(obj)
          .filter(function (_a) {
          var _ = _a[0], v = _a[1];
          return filter(v);
      })
          .map(function (_a) {
          var k = _a[0], v = _a[1];
          var key = mapper(k);
          if ('object' === typeof v) {
              var nested = classNames(v, mapper, filter);
              if (nested.length) {
                  return nested.map(function (nestedKey) { return key + nestedKey; });
              }
          }
          return key;
      }));
  }
  function clsnm(obj, mapper, filter) {
      if (mapper === void 0) { mapper = noop; }
      if (filter === void 0) { filter = Boolean; }
      return classNames(obj, mapper, filter).join(' ');
  }

  return clsnm;

}));
