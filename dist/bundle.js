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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(["http://example.com/foo?bar=", "&quux=", ""], ["http://example.com/foo?bar=", "&quux=", ""]),
    _templateObject2 = _taggedTemplateLiteral(["foo\n", "bar"], ["foo\\n", "bar"]);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var user = function user() {
    _classCallCheck(this, user);
};

odds = evens.map(function (v) {
    return v + 1;
});
pairs = evens.map(function (v) {
    return { even: v, odd: v + 1 };
});
nums = evens.map(function (v, i) {
    return v + i;
});

var PI = 3.141593;
PI > 3.0;

nums.forEach(function (v) {
    if (v % 5 === 0) fives.push(v);
});

undefined.nums.forEach(function (v) {
    if (v % 5 === 0) undefined.fives.push(v);
});

function f(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 42;

    return x + y + z;
}
f(1) === 50;

function f(x, y) {
    return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
}
f(1, 2, "hello", true, 7) === 9;

var params = ["hello", true, 7];
var other = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]

function f(x, y) {
    return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
}
f.apply(undefined, [1, 2].concat(params)) === 9;

var str = "foo";
var chars = [].concat(_toConsumableArray(str)); // [ "f", "o", "o" ]

var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\nwant to buy " + card.amount + " " + card.product + " for\na total of " + card.amount * card.unitprice + " bucks?";

et(_templateObject, bar + baz, quux);

function quux(strings) {
    strings[0] === "foo\n";
    strings[1] === "bar";
    strings.raw[0] === "foo\\n";
    strings.raw[1] === "bar";
    (arguments.length <= 1 ? undefined : arguments[1]) === 42;
}
quux(_templateObject2, 42);

String.raw(_templateObject2, 42) === "foo\\n42bar";

503 === 503;
503 === 503;

var obj = _defineProperty({
    foo: "bar"
}, "baz" + quux(), 42);

obj = {
    foo: function foo(a, b) {},
    bar: function bar(x, y) {},
    quux: /*#__PURE__*/regeneratorRuntime.mark(function quux(x, y) {
        return regeneratorRuntime.wrap(function quux$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                        return _context.stop();
                }
            }
        }, quux, this);
    })
};

var list = [1, 2, 3];

var _list = list[(b, a)] = [a, b],
    _list2 = _slicedToArray(_list, 3),
    a = _list2[0],
    b = _list2[2];

var _getASTNode = getASTNode(),
    op = _getASTNode.op,
    lhs = _getASTNode.lhs,
    rhs = _getASTNode.rhs;

var Shape = function () {
    function Shape(id, x, y) {
        _classCallCheck(this, Shape);

        this.id = id;
        this.move(x, y);
    }

    _createClass(Shape, [{
        key: "move",
        value: function move(x, y) {
            this.x = x;
            this.y = y;
        }
    }]);

    return Shape;
}();

var Rectangle = function (_Shape) {
    _inherits(Rectangle, _Shape);

    function Rectangle(id, x, y, width, height) {
        _classCallCheck(this, Rectangle);

        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, id, x, y));

        _this.width = width;
        _this.height = height;
        return _this;
    }

    return Rectangle;
}(Shape);

var Circle = function (_Shape2) {
    _inherits(Circle, _Shape2);

    function Circle(id, x, y, radius) {
        _classCallCheck(this, Circle);

        var _this2 = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, id, x, y));

        _this2.radius = radius;
        return _this2;
    }

    return Circle;
}(Shape);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map