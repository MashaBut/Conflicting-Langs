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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/modules/Start.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/modules/GamePage/WorkWithCanvas/Create.ts":
/*!*******************************************************!*\
  !*** ./src/modules/GamePage/WorkWithCanvas/Create.ts ***!
  \*******************************************************/
/*! exports provided: CanvasCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasCreate", function() { return CanvasCreate; });
var CanvasCreate;
(function (CanvasCreate) {
    //temporary function
    function random() {
        CanvasCreate.firstDice = Math.floor(Math.random() * 6) + 1;
        CanvasCreate.secondDice = Math.floor(Math.random() * 6) + 1;
        console.log(CanvasCreate.firstDice, CanvasCreate.secondDice);
    }
    function setSizeBlockForFuild() {
        random();
        CanvasCreate.firstDice = 18 * CanvasCreate.firstDice + 2 * (CanvasCreate.firstDice - 1);
        CanvasCreate.secondDice = 18 * CanvasCreate.secondDice + 2 * (CanvasCreate.secondDice - 1);
        console.log(CanvasCreate.firstDice, CanvasCreate.secondDice);
    }
    CanvasCreate.setSizeBlockForFuild = setSizeBlockForFuild;
})(CanvasCreate || (CanvasCreate = {}));


/***/ }),

/***/ "./src/modules/GamePage/WorkWithCanvas/Draw.ts":
/*!*****************************************************!*\
  !*** ./src/modules/GamePage/WorkWithCanvas/Draw.ts ***!
  \*****************************************************/
/*! exports provided: CanvasDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDraw", function() { return CanvasDraw; });
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create */ "./src/modules/GamePage/WorkWithCanvas/Create.ts");

var CanvasDraw;
(function (CanvasDraw) {
    var colorGreyRGB = "rgb(171, 139, 187)"; //"#ab8cbc";
    var listPixelsGrid = new Array(500);
    for (var i = 0; i < 1000; i++) {
        listPixelsGrid[i] = new Array(1000);
    }
    _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].setSizeBlockForFuild();
    function drawGrid() {
        CanvasDraw.canvasObj.clearRect(0, 0, 500, 1000);
        CanvasDraw.canvasObj.strokeStyle = colorGreyRGB;
        for (var i = 0; i <= 25; i++) {
            CanvasDraw.canvasObj.moveTo(0, 20 * i);
            CanvasDraw.canvasObj.lineTo(1000, 20 * i);
        }
        for (var i = 0; i <= 50; i++) {
            CanvasDraw.canvasObj.moveTo(20 * i, 0);
            CanvasDraw.canvasObj.lineTo(20 * i, 500);
        }
        CanvasDraw.canvasObj.stroke();
        //getPixelsWithGrid();
        drawBlockOnFuild();
    }
    CanvasDraw.drawGrid = drawGrid;
    //need to add async
    function getPixelsWithGrid() {
        for (var i = 0; i < 500; i++) {
            for (var j = 0; j < 1000; j++) {
                listPixelsGrid[i][j];
                var a = CanvasDraw.canvasObj.getImageData(i, j, 1, 1).data;
            }
        }
    }
    function drawBlockOnFuild() {
        CanvasDraw.canvasObj.fillStyle = "rgb(171, 3, 3)";
        CanvasDraw.canvasObj.fillRect(21, 21, _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].firstDice, _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].secondDice);
    }
})(CanvasDraw || (CanvasDraw = {}));


/***/ }),

/***/ "./src/modules/GamePage/WorkWithCanvas/KeyPress.ts":
/*!*********************************************************!*\
  !*** ./src/modules/GamePage/WorkWithCanvas/KeyPress.ts ***!
  \*********************************************************/
/*! exports provided: CanvasKeyPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasKeyPress", function() { return CanvasKeyPress; });
/* harmony import */ var _Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create */ "./src/modules/GamePage/WorkWithCanvas/Create.ts");
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Draw */ "./src/modules/GamePage/WorkWithCanvas/Draw.ts");


var CanvasKeyPress;
(function (CanvasKeyPress) {
    function setPositionBlockOnFuild(event) {
        var firstDice;
        switch (event) {
            case 38: { //up
                firstDice = _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].firstDice;
                _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].firstDice = _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].secondDice;
                _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].secondDice = firstDice;
                _Draw__WEBPACK_IMPORTED_MODULE_1__["CanvasDraw"].drawGrid();
                break;
            }
            case 39: { //right
                break;
            }
            case 37: { //left
                break;
            }
            case 40: { //down
                firstDice = _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].firstDice;
                _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].firstDice = _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].secondDice;
                _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"].secondDice = firstDice;
                _Draw__WEBPACK_IMPORTED_MODULE_1__["CanvasDraw"].drawGrid();
                break;
            }
            default:
                break;
        }
    }
    CanvasKeyPress.setPositionBlockOnFuild = setPositionBlockOnFuild;
})(CanvasKeyPress || (CanvasKeyPress = {}));


/***/ }),

/***/ "./src/modules/Player.ts":
/*!*******************************!*\
  !*** ./src/modules/Player.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Player = /** @class */ (function () {
    function Player(name, color) {
        this.name = name;
        this.coins = 1200;
        this.color = color;
    }
    Player.prototype.Draw = function () {
        console.log(this.name);
    };
    return Player;
}());
/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./src/modules/Start.ts":
/*!******************************!*\
  !*** ./src/modules/Start.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartPage_WriteNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartPage/WriteNames */ "./src/modules/StartPage/WriteNames.ts");
/* harmony import */ var _GamePage_WorkWithCanvas_Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GamePage/WorkWithCanvas/Draw */ "./src/modules/GamePage/WorkWithCanvas/Draw.ts");
/* harmony import */ var _GamePage_WorkWithCanvas_KeyPress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GamePage/WorkWithCanvas/KeyPress */ "./src/modules/GamePage/WorkWithCanvas/KeyPress.ts");



///------------------StartPage---------------------
document.getElementById("writeNames").onclick = setNamePlayersStart;
function setNamePlayersStart() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    Object(_StartPage_WriteNames__WEBPACK_IMPORTED_MODULE_0__["default"])(player1, player2);
    drawGridStart();
}
///----------------WorkWithCanvas------------------
addEventListener("keydown", setPositionBlockOnFuildStart);
function drawGridStart() {
    var canvasObj = document.getElementById('fuildGame').getContext('2d');
    _GamePage_WorkWithCanvas_Draw__WEBPACK_IMPORTED_MODULE_1__["CanvasDraw"].canvasObj = canvasObj;
    _GamePage_WorkWithCanvas_Draw__WEBPACK_IMPORTED_MODULE_1__["CanvasDraw"].drawGrid();
}
function setPositionBlockOnFuildStart(e) {
    _GamePage_WorkWithCanvas_KeyPress__WEBPACK_IMPORTED_MODULE_2__["CanvasKeyPress"].setPositionBlockOnFuild(e.keyCode);
}


/***/ }),

/***/ "./src/modules/StartPage/WriteNames.ts":
/*!*********************************************!*\
  !*** ./src/modules/StartPage/WriteNames.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setNamePlayers; });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Player */ "./src/modules/Player.ts");

function setNamePlayers(player1, player2) {
    if (player1 == "") {
        player1 = "Player 1";
    }
    var gamer1 = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"](player1, "Red");
    if (player2 == "") {
        player2 = "Player 2";
    }
    var gamer2 = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"](player2, "Blue");
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvQ3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dhbWVQYWdlL1dvcmtXaXRoQ2FudmFzL0RyYXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvS2V5UHJlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0UGFnZS9Xcml0ZU5hbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOzs7Ozs7Ozs7Ozs7O0FDZnJDO0FBQUE7QUFBQTtBQUF3QztBQUNqQztBQUNQO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBLElBQUksb0RBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQywyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvREFBWSxZQUFZLG9EQUFZO0FBQ2xGO0FBQ0EsQ0FBQyxnQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7QUN0Q2pDO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0o7QUFDN0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qiw0QkFBNEIsb0RBQVk7QUFDeEMsZ0JBQWdCLG9EQUFZLGFBQWEsb0RBQVk7QUFDckQsZ0JBQWdCLG9EQUFZO0FBQzVCLGdCQUFnQixnREFBVTtBQUMxQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qiw0QkFBNEIsb0RBQVk7QUFDeEMsZ0JBQWdCLG9EQUFZLGFBQWEsb0RBQVk7QUFDckQsZ0JBQWdCLG9EQUFZO0FBQzVCLGdCQUFnQixnREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDOzs7Ozs7Ozs7Ozs7O0FDaEN6QztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNYdEI7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDUTtBQUNRO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQVU7QUFDZCxJQUFJLHdFQUFVO0FBQ2Q7QUFDQTtBQUNBLElBQUksZ0ZBQWM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQStCO0FBQ2hCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBTTtBQUMzQiIsImZpbGUiOiJBbGxDb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbW9kdWxlcy9TdGFydC50c1wiKTtcbiIsImV4cG9ydCB2YXIgQ2FudmFzQ3JlYXRlO1xyXG4oZnVuY3Rpb24gKENhbnZhc0NyZWF0ZSkge1xyXG4gICAgLy90ZW1wb3JhcnkgZnVuY3Rpb25cclxuICAgIGZ1bmN0aW9uIHJhbmRvbSgpIHtcclxuICAgICAgICBDYW52YXNDcmVhdGUuZmlyc3REaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgIENhbnZhc0NyZWF0ZS5zZWNvbmREaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKENhbnZhc0NyZWF0ZS5maXJzdERpY2UsIENhbnZhc0NyZWF0ZS5zZWNvbmREaWNlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFNpemVCbG9ja0ZvckZ1aWxkKCkge1xyXG4gICAgICAgIHJhbmRvbSgpO1xyXG4gICAgICAgIENhbnZhc0NyZWF0ZS5maXJzdERpY2UgPSAxOCAqIENhbnZhc0NyZWF0ZS5maXJzdERpY2UgKyAyICogKENhbnZhc0NyZWF0ZS5maXJzdERpY2UgLSAxKTtcclxuICAgICAgICBDYW52YXNDcmVhdGUuc2Vjb25kRGljZSA9IDE4ICogQ2FudmFzQ3JlYXRlLnNlY29uZERpY2UgKyAyICogKENhbnZhc0NyZWF0ZS5zZWNvbmREaWNlIC0gMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coQ2FudmFzQ3JlYXRlLmZpcnN0RGljZSwgQ2FudmFzQ3JlYXRlLnNlY29uZERpY2UpO1xyXG4gICAgfVxyXG4gICAgQ2FudmFzQ3JlYXRlLnNldFNpemVCbG9ja0ZvckZ1aWxkID0gc2V0U2l6ZUJsb2NrRm9yRnVpbGQ7XHJcbn0pKENhbnZhc0NyZWF0ZSB8fCAoQ2FudmFzQ3JlYXRlID0ge30pKTtcclxuIiwiaW1wb3J0IHsgQ2FudmFzQ3JlYXRlIH0gZnJvbSBcIi4vQ3JlYXRlXCI7XHJcbmV4cG9ydCB2YXIgQ2FudmFzRHJhdztcclxuKGZ1bmN0aW9uIChDYW52YXNEcmF3KSB7XHJcbiAgICB2YXIgY29sb3JHcmV5UkdCID0gXCJyZ2IoMTcxLCAxMzksIDE4NylcIjsgLy9cIiNhYjhjYmNcIjtcclxuICAgIHZhciBsaXN0UGl4ZWxzR3JpZCA9IG5ldyBBcnJheSg1MDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgICBsaXN0UGl4ZWxzR3JpZFtpXSA9IG5ldyBBcnJheSgxMDAwKTtcclxuICAgIH1cclxuICAgIENhbnZhc0NyZWF0ZS5zZXRTaXplQmxvY2tGb3JGdWlsZCgpO1xyXG4gICAgZnVuY3Rpb24gZHJhd0dyaWQoKSB7XHJcbiAgICAgICAgQ2FudmFzRHJhdy5jYW52YXNPYmouY2xlYXJSZWN0KDAsIDAsIDUwMCwgMTAwMCk7XHJcbiAgICAgICAgQ2FudmFzRHJhdy5jYW52YXNPYmouc3Ryb2tlU3R5bGUgPSBjb2xvckdyZXlSR0I7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gMjU7IGkrKykge1xyXG4gICAgICAgICAgICBDYW52YXNEcmF3LmNhbnZhc09iai5tb3ZlVG8oMCwgMjAgKiBpKTtcclxuICAgICAgICAgICAgQ2FudmFzRHJhdy5jYW52YXNPYmoubGluZVRvKDEwMDAsIDIwICogaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDUwOyBpKyspIHtcclxuICAgICAgICAgICAgQ2FudmFzRHJhdy5jYW52YXNPYmoubW92ZVRvKDIwICogaSwgMCk7XHJcbiAgICAgICAgICAgIENhbnZhc0RyYXcuY2FudmFzT2JqLmxpbmVUbygyMCAqIGksIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENhbnZhc0RyYXcuY2FudmFzT2JqLnN0cm9rZSgpO1xyXG4gICAgICAgIC8vZ2V0UGl4ZWxzV2l0aEdyaWQoKTtcclxuICAgICAgICBkcmF3QmxvY2tPbkZ1aWxkKCk7XHJcbiAgICB9XHJcbiAgICBDYW52YXNEcmF3LmRyYXdHcmlkID0gZHJhd0dyaWQ7XHJcbiAgICAvL25lZWQgdG8gYWRkIGFzeW5jXHJcbiAgICBmdW5jdGlvbiBnZXRQaXhlbHNXaXRoR3JpZCgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTAwMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0UGl4ZWxzR3JpZFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gQ2FudmFzRHJhdy5jYW52YXNPYmouZ2V0SW1hZ2VEYXRhKGksIGosIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkcmF3QmxvY2tPbkZ1aWxkKCkge1xyXG4gICAgICAgIENhbnZhc0RyYXcuY2FudmFzT2JqLmZpbGxTdHlsZSA9IFwicmdiKDE3MSwgMywgMylcIjtcclxuICAgICAgICBDYW52YXNEcmF3LmNhbnZhc09iai5maWxsUmVjdCgyMSwgMjEsIENhbnZhc0NyZWF0ZS5maXJzdERpY2UsIENhbnZhc0NyZWF0ZS5zZWNvbmREaWNlKTtcclxuICAgIH1cclxufSkoQ2FudmFzRHJhdyB8fCAoQ2FudmFzRHJhdyA9IHt9KSk7XHJcbiIsImltcG9ydCB7IENhbnZhc0NyZWF0ZSB9IGZyb20gXCIuL0NyZWF0ZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNEcmF3IH0gZnJvbSBcIi4vRHJhd1wiO1xyXG5leHBvcnQgdmFyIENhbnZhc0tleVByZXNzO1xyXG4oZnVuY3Rpb24gKENhbnZhc0tleVByZXNzKSB7XHJcbiAgICBmdW5jdGlvbiBzZXRQb3NpdGlvbkJsb2NrT25GdWlsZChldmVudCkge1xyXG4gICAgICAgIHZhciBmaXJzdERpY2U7XHJcbiAgICAgICAgc3dpdGNoIChldmVudCkge1xyXG4gICAgICAgICAgICBjYXNlIDM4OiB7IC8vdXBcclxuICAgICAgICAgICAgICAgIGZpcnN0RGljZSA9IENhbnZhc0NyZWF0ZS5maXJzdERpY2U7XHJcbiAgICAgICAgICAgICAgICBDYW52YXNDcmVhdGUuZmlyc3REaWNlID0gQ2FudmFzQ3JlYXRlLnNlY29uZERpY2U7XHJcbiAgICAgICAgICAgICAgICBDYW52YXNDcmVhdGUuc2Vjb25kRGljZSA9IGZpcnN0RGljZTtcclxuICAgICAgICAgICAgICAgIENhbnZhc0RyYXcuZHJhd0dyaWQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IHsgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzNzogeyAvL2xlZnRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IHsgLy9kb3duXHJcbiAgICAgICAgICAgICAgICBmaXJzdERpY2UgPSBDYW52YXNDcmVhdGUuZmlyc3REaWNlO1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzQ3JlYXRlLmZpcnN0RGljZSA9IENhbnZhc0NyZWF0ZS5zZWNvbmREaWNlO1xyXG4gICAgICAgICAgICAgICAgQ2FudmFzQ3JlYXRlLnNlY29uZERpY2UgPSBmaXJzdERpY2U7XHJcbiAgICAgICAgICAgICAgICBDYW52YXNEcmF3LmRyYXdHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2FudmFzS2V5UHJlc3Muc2V0UG9zaXRpb25CbG9ja09uRnVpbGQgPSBzZXRQb3NpdGlvbkJsb2NrT25GdWlsZDtcclxufSkoQ2FudmFzS2V5UHJlc3MgfHwgKENhbnZhc0tleVByZXNzID0ge30pKTtcclxuIiwidmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsYXllcihuYW1lLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb2lucyA9IDEyMDA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgUGxheWVyLnByb3RvdHlwZS5EcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXllcjtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iLCJpbXBvcnQgc2V0TmFtZVBsYXllcnMgZnJvbSBcIi4vU3RhcnRQYWdlL1dyaXRlTmFtZXNcIjtcclxuaW1wb3J0IHsgQ2FudmFzRHJhdyB9IGZyb20gXCIuL0dhbWVQYWdlL1dvcmtXaXRoQ2FudmFzL0RyYXdcIjtcclxuaW1wb3J0IHsgQ2FudmFzS2V5UHJlc3MgfSBmcm9tIFwiLi9HYW1lUGFnZS9Xb3JrV2l0aENhbnZhcy9LZXlQcmVzc1wiO1xyXG4vLy8tLS0tLS0tLS0tLS0tLS0tLS1TdGFydFBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cml0ZU5hbWVzXCIpLm9uY2xpY2sgPSBzZXROYW1lUGxheWVyc1N0YXJ0O1xyXG5mdW5jdGlvbiBzZXROYW1lUGxheWVyc1N0YXJ0KCkge1xyXG4gICAgdmFyIHBsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFcIikudmFsdWU7XHJcbiAgICB2YXIgcGxheWVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMlwiKS52YWx1ZTtcclxuICAgIHNldE5hbWVQbGF5ZXJzKHBsYXllcjEsIHBsYXllcjIpO1xyXG4gICAgZHJhd0dyaWRTdGFydCgpO1xyXG59XHJcbi8vLy0tLS0tLS0tLS0tLS0tLS1Xb3JrV2l0aENhbnZhcy0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBzZXRQb3NpdGlvbkJsb2NrT25GdWlsZFN0YXJ0KTtcclxuZnVuY3Rpb24gZHJhd0dyaWRTdGFydCgpIHtcclxuICAgIHZhciBjYW52YXNPYmogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVpbGRHYW1lJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIENhbnZhc0RyYXcuY2FudmFzT2JqID0gY2FudmFzT2JqO1xyXG4gICAgQ2FudmFzRHJhdy5kcmF3R3JpZCgpO1xyXG59XHJcbmZ1bmN0aW9uIHNldFBvc2l0aW9uQmxvY2tPbkZ1aWxkU3RhcnQoZSkge1xyXG4gICAgQ2FudmFzS2V5UHJlc3Muc2V0UG9zaXRpb25CbG9ja09uRnVpbGQoZS5rZXlDb2RlKTtcclxufVxyXG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0TmFtZVBsYXllcnMocGxheWVyMSwgcGxheWVyMikge1xyXG4gICAgaWYgKHBsYXllcjEgPT0gXCJcIikge1xyXG4gICAgICAgIHBsYXllcjEgPSBcIlBsYXllciAxXCI7XHJcbiAgICB9XHJcbiAgICB2YXIgZ2FtZXIxID0gbmV3IFBsYXllcihwbGF5ZXIxLCBcIlJlZFwiKTtcclxuICAgIGlmIChwbGF5ZXIyID09IFwiXCIpIHtcclxuICAgICAgICBwbGF5ZXIyID0gXCJQbGF5ZXIgMlwiO1xyXG4gICAgfVxyXG4gICAgdmFyIGdhbWVyMiA9IG5ldyBQbGF5ZXIocGxheWVyMiwgXCJCbHVlXCIpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=