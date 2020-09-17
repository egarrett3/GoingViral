/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_graph_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/graph.css */ "./src/styles/graph.css");
/* harmony import */ var _styles_graph_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_graph_css__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function pageLocation() {
  var curr = location.href;

  if (curr.includes('graph')) {
    return true;
  } else {
    return false;
  }
}

function removeChildren() {
  return _removeChildren.apply(this, arguments);
}

function _removeChildren() {
  _removeChildren = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            document.querySelectorAll('rect').forEach(function (r) {
              return r.parentNode.removeChild(r);
            });
            document.querySelectorAll('.rate').forEach(function (r) {
              return r.parentNode.removeChild(r);
            });
            document.querySelectorAll('#state-borders').forEach(function (r) {
              return r.parentNode.removeChild(r);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _removeChildren.apply(this, arguments);
}

function loadUSAData() {
  makeAMap();
  getCountry();
}

window.addEventListener('beforeunload', function () {
  removeChildren();
});

if (pageLocation()) {
  window.addEventListener('load', function () {
    loadUSAData();
  });
}

if (document.getElementById("scroll")) {
  addEventListener("scroll", function () {});
}

function transitionTiming() {
  if (document.querySelector('.state')) {
    _toConsumableArray(document.querySelectorAll('.state')).forEach(function (stadt) {
      stadt.addEventListener('click', function (e) {
        e.preventDefault();
        transitionDown();
        setTimeout(removeChildren, 1500);
        setTimeout(getState.bind(null, e.currentTarget.textContent), 1800);
        setTimeout(makeAMap.bind(null, e.currentTarget.textContent), 1800);
      });
    });
  }
}

transitionTiming();

function getState(_x) {
  return _getState.apply(this, arguments);
}

function _getState() {
  _getState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(state) {
    var api_url, response, text;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            api_url = "/graph/".concat(state);
            _context2.next = 3;
            return fetch(api_url);

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.text();

          case 6:
            text = _context2.sent;
            graph(text);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getState.apply(this, arguments);
}

function getCountry() {
  return _getCountry.apply(this, arguments);
}

function _getCountry() {
  _getCountry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var api_url, response, text;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            api_url = "/nation";
            _context3.next = 3;
            return fetch(api_url);

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.text();

          case 6:
            text = _context3.sent;
            graph(text);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getCountry.apply(this, arguments);
}

/***/ }),

/***/ "./src/styles/graph.css":
/*!******************************!*\
  !*** ./src/styles/graph.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ3JhcGguY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIl0sIm5hbWVzIjpbInBhZ2VMb2NhdGlvbiIsImN1cnIiLCJsb2NhdGlvbiIsImhyZWYiLCJpbmNsdWRlcyIsInJlbW92ZUNoaWxkcmVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJsb2FkVVNBRGF0YSIsIm1ha2VBTWFwIiwiZ2V0Q291bnRyeSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRFbGVtZW50QnlJZCIsInRyYW5zaXRpb25UaW1pbmciLCJxdWVyeVNlbGVjdG9yIiwic3RhZHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmFuc2l0aW9uRG93biIsInNldFRpbWVvdXQiLCJnZXRTdGF0ZSIsImJpbmQiLCJjdXJyZW50VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJzdGF0ZSIsImFwaV91cmwiLCJmZXRjaCIsInJlc3BvbnNlIiwidGV4dCIsImdyYXBoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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VUMsbUJBRFYsb0JBQzhCRCxLQUQ5QjtBQUFBO0FBQUEsbUJBRTJCRSxLQUFLLENBQUNELE9BQUQsQ0FGaEM7O0FBQUE7QUFFVUUsb0JBRlY7QUFBQTtBQUFBLG1CQUd1QkEsUUFBUSxDQUFDQyxJQUFULEVBSHZCOztBQUFBO0FBR1VBLGdCQUhWO0FBSUlDLGlCQUFLLENBQUNELElBQUQsQ0FBTDs7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBT2VuQixVOzs7Ozt3RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVWdCLG1CQURWO0FBQUE7QUFBQSxtQkFFMkJDLEtBQUssQ0FBQ0QsT0FBRCxDQUZoQzs7QUFBQTtBQUVVRSxvQkFGVjtBQUFBO0FBQUEsbUJBR3VCQSxRQUFRLENBQUNDLElBQVQsRUFIdkI7O0FBQUE7QUFHVUEsZ0JBSFY7QUFJSUMsaUJBQUssQ0FBQ0QsSUFBRCxDQUFMOztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7QUNoRUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9ncmFwaC5jc3MnO1xuXG5mdW5jdGlvbiBwYWdlTG9jYXRpb24oKSB7XG4gICAgbGV0IGN1cnIgPSBsb2NhdGlvbi5ocmVmO1xuICAgIGlmIChjdXJyLmluY2x1ZGVzKCdncmFwaCcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3JlY3QnKS5mb3JFYWNoKHIgPT4gci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYXRlJykuZm9yRWFjaChyID0+IHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc3RhdGUtYm9yZGVycycpLmZvckVhY2gociA9PiByLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocikpXG59XG5cbmZ1bmN0aW9uIGxvYWRVU0FEYXRhKCkge1xuICAgIG1ha2VBTWFwKCk7XG4gICAgZ2V0Q291bnRyeSgpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUNoaWxkcmVuKCk7XG59KTtcblxuaWYgKHBhZ2VMb2NhdGlvbigpKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbG9hZFVTQURhdGEoKTtcbiAgICB9KTtcbn0gXG5cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Nyb2xsXCIpKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7fSlcbn1cblxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uVGltaW5nKCkgeyBcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRlJykpIHtcbiAgICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0ZScpXS5mb3JFYWNoKGZ1bmN0aW9uIChzdGFkdCkge1xuICAgICAgICAgICAgc3RhZHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkRvd24oKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZUNoaWxkcmVuLDE1MDApO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZ2V0U3RhdGUuYmluZChudWxsLGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudCksMTgwMCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChtYWtlQU1hcC5iaW5kKG51bGwsZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50KSwxODAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG50cmFuc2l0aW9uVGltaW5nKClcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZSkge1xuICAgIGNvbnN0IGFwaV91cmwgPSBgL2dyYXBoLyR7c3RhdGV9YDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaV91cmwpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgZ3JhcGgodGV4dCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvdW50cnkoKSB7XG4gICAgY29uc3QgYXBpX3VybCA9IGAvbmF0aW9uYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaV91cmwpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgZ3JhcGgodGV4dCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9