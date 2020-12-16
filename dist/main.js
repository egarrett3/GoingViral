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
        setTimeout(getState.bind(null, e.currentTarget.textContent.toLowerCase()), 1800);
        setTimeout(makeAMap.bind(null, e.currentTarget.textContent.toLowerCase()), 1800);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ3JhcGguY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIl0sIm5hbWVzIjpbInBhZ2VMb2NhdGlvbiIsImN1cnIiLCJsb2NhdGlvbiIsImhyZWYiLCJpbmNsdWRlcyIsInJlbW92ZUNoaWxkcmVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJsb2FkVVNBRGF0YSIsIm1ha2VBTWFwIiwiZ2V0Q291bnRyeSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRFbGVtZW50QnlJZCIsInRyYW5zaXRpb25UaW1pbmciLCJxdWVyeVNlbGVjdG9yIiwic3RhZHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmFuc2l0aW9uRG93biIsInNldFRpbWVvdXQiLCJnZXRTdGF0ZSIsImJpbmQiLCJjdXJyZW50VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ0b0xvd2VyQ2FzZSIsInN0YXRlIiwiYXBpX3VybCIsImZldGNoIiwicmVzcG9uc2UiLCJ0ZXh0IiwiZ3JhcGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Ozs7O3NFQUFmLGtCQUF3QkssS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1VDLG1CQURWLG9CQUM4QkQsS0FEOUI7QUFBQTtBQUFBLG1CQUUyQkUsS0FBSyxDQUFDRCxPQUFELENBRmhDOztBQUFBO0FBRVVFLG9CQUZWO0FBQUE7QUFBQSxtQkFHdUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUh2Qjs7QUFBQTtBQUdVQSxnQkFIVjtBQUlJQyxpQkFBSyxDQUFDRCxJQUFELENBQUw7O0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQU9lcEIsVTs7Ozs7d0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1VpQixtQkFEVjtBQUFBO0FBQUEsbUJBRTJCQyxLQUFLLENBQUNELE9BQUQsQ0FGaEM7O0FBQUE7QUFFVUUsb0JBRlY7QUFBQTtBQUFBLG1CQUd1QkEsUUFBUSxDQUFDQyxJQUFULEVBSHZCOztBQUFBO0FBR1VBLGdCQUhWO0FBSUlDLGlCQUFLLENBQUNELElBQUQsQ0FBTDs7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7O0FDaEVBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ3JhcGguY3NzJztcblxuZnVuY3Rpb24gcGFnZUxvY2F0aW9uKCkge1xuICAgIGxldCBjdXJyID0gbG9jYXRpb24uaHJlZjtcbiAgICBpZiAoY3Vyci5pbmNsdWRlcygnZ3JhcGgnKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdyZWN0JykuZm9yRWFjaChyID0+IHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF0ZScpLmZvckVhY2gociA9PiByLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocikpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3N0YXRlLWJvcmRlcnMnKS5mb3JFYWNoKHIgPT4gci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKVxufVxuXG5mdW5jdGlvbiBsb2FkVVNBRGF0YSgpIHtcbiAgICBtYWtlQU1hcCgpO1xuICAgIGdldENvdW50cnkoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVDaGlsZHJlbigpO1xufSk7XG5cbmlmIChwYWdlTG9jYXRpb24oKSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvYWRVU0FEYXRhKCk7XG4gICAgfSk7XG59IFxuXG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjcm9sbFwiKSkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge30pXG59XG5cblxuZnVuY3Rpb24gdHJhbnNpdGlvblRpbWluZygpIHsgXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0ZScpKSB7XG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdGUnKV0uZm9yRWFjaChmdW5jdGlvbiAoc3RhZHQpIHtcbiAgICAgICAgICAgIHN0YWR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25Eb3duKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZW1vdmVDaGlsZHJlbiwxNTAwKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGdldFN0YXRlLmJpbmQobnVsbCwoZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpKSwxODAwKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KG1ha2VBTWFwLmJpbmQobnVsbCwoZS5jdXJyZW50VGFyZ2V0LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpKSwxODAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG50cmFuc2l0aW9uVGltaW5nKClcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZSkge1xuICAgIGNvbnN0IGFwaV91cmwgPSBgL2dyYXBoLyR7c3RhdGV9YDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaV91cmwpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgZ3JhcGgodGV4dCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvdW50cnkoKSB7XG4gICAgY29uc3QgYXBpX3VybCA9IGAvbmF0aW9uYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaV91cmwpO1xuICAgIGNvbnN0IHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgZ3JhcGgodGV4dCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9