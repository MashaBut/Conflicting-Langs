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

/***/ "./src/modules/Front/css/Players.css":
/*!*******************************************!*\
  !*** ./src/modules/Front/css/Players.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/Front/css/main.css":
/*!****************************************!*\
  !*** ./src/modules/Front/css/main.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/Front/images/VS.jpg":
/*!*****************************************!*\
  !*** ./src/modules/Front/images/VS.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "VS.jpg";

/***/ }),

/***/ "./src/modules/Front/scripts/Hide.ts":
/*!*******************************************!*\
  !*** ./src/modules/Front/scripts/Hide.ts ***!
  \*******************************************/
/*! exports provided: HideF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideF", function() { return HideF; });
var HideF = /** @class */ (function () {
    function HideF() {
    }
    HideF.prototype.Hide = function () {
        document.getElementById('startpage').style.display = 'none';
        document.getElementById('canvas').style.display = 'block';
    };
    return HideF;
}());



/***/ }),

/***/ "./src/modules/GamePage/WorkWithCanvas/Create.ts":
/*!*******************************************************!*\
  !*** ./src/modules/GamePage/WorkWithCanvas/Create.ts ***!
  \*******************************************************/
/*! exports provided: CanvasCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasCreate", function() { return CanvasCreate; });
var CanvasCreate = /** @class */ (function () {
    function CanvasCreate() {
    }
    //temporary function
    CanvasCreate.prototype.random = function () {
        this.firstDice = Math.floor(Math.random() * 6) + 1;
        this.secondDice = Math.floor(Math.random() * 6) + 1;
        console.log(this.firstDice, this.secondDice);
    };
    CanvasCreate.prototype.setSizeBlockForFuild = function () {
        this.random();
        this.firstDice = 18 * this.firstDice + 2 * (this.firstDice - 1);
        this.secondDice = 18 * this.secondDice + 2 * (this.secondDice - 1);
        console.log(this.firstDice, this.secondDice);
        return [this.firstDice, this.secondDice];
    };
    CanvasCreate.prototype.turnSize = function () {
        var firstDice;
        firstDice = this.firstDice;
        this.firstDice = this.secondDice;
        this.secondDice = firstDice;
        return [this.firstDice, this.secondDice];
    };
    return CanvasCreate;
}());



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

var CanvasDraw = /** @class */ (function () {
    function CanvasDraw(canvasObj) {
        this.colorGreyRGB = "rgb(171, 139, 187)"; //"#ab8cbc"
        this.arrayBuiltBlock = new Array(300);
        this.counterForArrayBuiltBlock = 0;
        this.canvasCreate = new _Create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"]();
        //temporary variables
        this.boolForStartLocation = false;
        this.x = 1;
        this.y = 500;
        this.listPixelsGrid = new Array(500);
        for (var i = 0; i < 500; i++) {
            this.listPixelsGrid[i] = new Array(1000);
        }
        for (var i = 0; i < 300; i++) {
            this.arrayBuiltBlock[i] = new Array(4);
        }
        this.canvasObj = canvasObj;
        this.canvasObj.strokeStyle = this.colorGreyRGB;
        this.canvasObj.fillStyle = "rgb(171, 3, 3)";
        var size = this.canvasCreate.setSizeBlockForFuild();
        this.xSize = size[0];
        this.ySize = size[1];
        this.drawGrid();
    }
    CanvasDraw.prototype.drawGrid = function () {
        this.canvasObj.clearRect(0, 0, 500, 1000);
        for (var i = 0; i <= 25; i++) {
            this.canvasObj.moveTo(0, 20 * i);
            this.canvasObj.lineTo(1000, 20 * i);
        }
        for (var i = 0; i <= 50; i++) {
            this.canvasObj.moveTo(20 * i, 0);
            this.canvasObj.lineTo(20 * i, 500);
        }
        this.canvasObj.stroke();
        this.drawBlocksWithSavedArray();
        this.drawBlockOnFuild();
    };
    //need to add async
    CanvasDraw.prototype.getPixelsWithGrid = function () {
        for (var i = 0; i < 500; i++) {
            for (var j = 0; j < 1000; j++) {
                this.listPixelsGrid[i][j] = this.canvasObj.getImageData(i, j, 1, 1).data;
            }
        }
    };
    CanvasDraw.prototype.setSizeBlock = function () {
        var sizeBlock = this.canvasCreate.turnSize();
        this.xSize = sizeBlock[0];
        this.ySize = sizeBlock[1];
    };
    CanvasDraw.prototype.drawBlockOnFuild = function () {
        this.canvasObj.fillStyle = "rgb(171, 3, 3)";
        if (this.boolForStartLocation === false) {
            this.canvasObj.fillRect(this.x, this.y - this.ySize - 1, this.xSize, this.ySize);
        }
    };
    CanvasDraw.prototype.saveBlockToArray = function () {
        this.arrayBuiltBlock[this.counterForArrayBuiltBlock++] = [this.x, this.y - this.ySize - 1, this.xSize, this.ySize];
    };
    CanvasDraw.prototype.drawBlocksWithSavedArray = function () {
        for (var i = 0; i < this.counterForArrayBuiltBlock; i++) {
            this.canvasObj.fillRect(this.arrayBuiltBlock[i][0], this.arrayBuiltBlock[i][1], this.arrayBuiltBlock[i][2], this.arrayBuiltBlock[i][3]);
        }
    };
    return CanvasDraw;
}());



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
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draw */ "./src/modules/GamePage/WorkWithCanvas/Draw.ts");

var CanvasKeyPress = /** @class */ (function () {
    function CanvasKeyPress(canvasObj) {
        this.canvasDraw = new _Draw__WEBPACK_IMPORTED_MODULE_0__["CanvasDraw"](canvasObj);
    }
    CanvasKeyPress.prototype.setPositionBlockOnFuild = function (KeyCode) {
        switch (KeyCode) {
            case 38: { //up
                this.canvasDraw.setSizeBlock();
                this.canvasDraw.drawGrid();
                break;
            }
            case 39: { //right
                break;
            }
            case 37: { //left
                break;
            }
            case 40: { //down
                this.canvasDraw.setSizeBlock();
                this.canvasDraw.drawGrid();
                break;
            }
            case 16: { //shift
                this.canvasDraw.saveBlockToArray();
                this.canvasDraw.drawGrid();
                break;
            }
            default:
                break;
        }
    };
    return CanvasKeyPress;
}());



/***/ }),

/***/ "./src/modules/Player.ts":
/*!*******************************!*\
  !*** ./src/modules/Player.ts ***!
  \*******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    //add start position
    function Player(name, color, xInitialLocation, yInitialLocation) {
        this.name = name;
        this.coins = 1200;
        this.color = color;
        this.firstElementonFuild = false;
        this.xInitialLocation = xInitialLocation;
        this.yInitialLocation = yInitialLocation;
    }
    Player.prototype.Draw = function () {
        console.log(this.name);
    };
    return Player;
}());



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
/* harmony import */ var _GamePage_WorkWithCanvas_KeyPress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GamePage/WorkWithCanvas/KeyPress */ "./src/modules/GamePage/WorkWithCanvas/KeyPress.ts");
/* harmony import */ var _Front_scripts_Hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Front/scripts/Hide */ "./src/modules/Front/scripts/Hide.ts");
/* harmony import */ var _Front_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Front/css/main.css */ "./src/modules/Front/css/main.css");
/* harmony import */ var _Front_css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Front_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Front_css_Players_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Front/css/Players.css */ "./src/modules/Front/css/Players.css");
/* harmony import */ var _Front_css_Players_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Front_css_Players_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Front_images_VS_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Front/images/VS.jpg */ "./src/modules/Front/images/VS.jpg");
/* harmony import */ var _Front_images_VS_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Front_images_VS_jpg__WEBPACK_IMPORTED_MODULE_5__);






///------------------StartPage---------------------
document.getElementById('canvas').style.display = 'none';
document.getElementById("writeNames").onclick = setNamePlayersStart;
function setNamePlayersStart() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var namePlayers = new _StartPage_WriteNames__WEBPACK_IMPORTED_MODULE_0__["NamePlayers"]();
    namePlayers.setNamePlayers(player1, player2);
    HideHTML();
    drawGridStart();
}
var hideF;
function HideHTML() {
    hideF = new _Front_scripts_Hide__WEBPACK_IMPORTED_MODULE_2__["HideF"]();
    hideF.Hide();
}
///----------------WorkWithCanvas------------------
addEventListener("keydown", setPositionBlockOnFuildStart);
var canvasKeyPress;
function drawGridStart() {
    var canvasObj = document.getElementById('fuildGame').getContext('2d');
    canvasKeyPress = new _GamePage_WorkWithCanvas_KeyPress__WEBPACK_IMPORTED_MODULE_1__["CanvasKeyPress"](canvasObj);
}
function setPositionBlockOnFuildStart(e) {
    canvasKeyPress.setPositionBlockOnFuild(e.keyCode);
}


/***/ }),

/***/ "./src/modules/StartPage/WriteNames.ts":
/*!*********************************************!*\
  !*** ./src/modules/StartPage/WriteNames.ts ***!
  \*********************************************/
/*! exports provided: NamePlayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePlayers", function() { return NamePlayers; });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Player */ "./src/modules/Player.ts");

var NamePlayers = /** @class */ (function () {
    function NamePlayers() {
    }
    NamePlayers.prototype.setNamePlayers = function (namePlayer1, namePlayer2) {
        if (namePlayer1 === "") {
            namePlayer1 = "Player 1";
        }
        var player1 = new _Player__WEBPACK_IMPORTED_MODULE_0__["Player"](namePlayer1, "Red", 1, 500);
        if (namePlayer2 === "") {
            namePlayer2 = "Player 2";
        }
        player1.Draw();
        var player2 = new _Player__WEBPACK_IMPORTED_MODULE_0__["Player"](namePlayer2, "Blue", 1000, 1);
        player2.Draw();
    };
    return NamePlayers;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRnJvbnQvY3NzL1BsYXllcnMuY3NzPzg1NDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRnJvbnQvY3NzL21haW4uY3NzP2MyYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRnJvbnQvaW1hZ2VzL1ZTLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Gcm9udC9zY3JpcHRzL0hpZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvQ3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dhbWVQYWdlL1dvcmtXaXRoQ2FudmFzL0RyYXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvS2V5UHJlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0UGFnZS9Xcml0ZU5hbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5Qyxp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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21vZHVsZXMvU3RhcnQudHNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJWUy5qcGdcIjsiLCJ2YXIgSGlkZUYgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIaWRlRigpIHtcclxuICAgIH1cclxuICAgIEhpZGVGLnByb3RvdHlwZS5IaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydHBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGlkZUY7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEhpZGVGIH07XHJcbiIsInZhciBDYW52YXNDcmVhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNDcmVhdGUoKSB7XHJcbiAgICB9XHJcbiAgICAvL3RlbXBvcmFyeSBmdW5jdGlvblxyXG4gICAgQ2FudmFzQ3JlYXRlLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdERpY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAgICAgdGhpcy5zZWNvbmREaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2UpO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0NyZWF0ZS5wcm90b3R5cGUuc2V0U2l6ZUJsb2NrRm9yRnVpbGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLmZpcnN0RGljZSA9IDE4ICogdGhpcy5maXJzdERpY2UgKyAyICogKHRoaXMuZmlyc3REaWNlIC0gMSk7XHJcbiAgICAgICAgdGhpcy5zZWNvbmREaWNlID0gMTggKiB0aGlzLnNlY29uZERpY2UgKyAyICogKHRoaXMuc2Vjb25kRGljZSAtIDEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2UpO1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5maXJzdERpY2UsIHRoaXMuc2Vjb25kRGljZV07XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzQ3JlYXRlLnByb3RvdHlwZS50dXJuU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZmlyc3REaWNlO1xyXG4gICAgICAgIGZpcnN0RGljZSA9IHRoaXMuZmlyc3REaWNlO1xyXG4gICAgICAgIHRoaXMuZmlyc3REaWNlID0gdGhpcy5zZWNvbmREaWNlO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kRGljZSA9IGZpcnN0RGljZTtcclxuICAgICAgICByZXR1cm4gW3RoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2VdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDYW52YXNDcmVhdGU7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENhbnZhc0NyZWF0ZSB9O1xyXG4iLCJpbXBvcnQgeyBDYW52YXNDcmVhdGUgfSBmcm9tIFwiLi9DcmVhdGVcIjtcclxudmFyIENhbnZhc0RyYXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNEcmF3KGNhbnZhc09iaikge1xyXG4gICAgICAgIHRoaXMuY29sb3JHcmV5UkdCID0gXCJyZ2IoMTcxLCAxMzksIDE4NylcIjsgLy9cIiNhYjhjYmNcIlxyXG4gICAgICAgIHRoaXMuYXJyYXlCdWlsdEJsb2NrID0gbmV3IEFycmF5KDMwMCk7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRm9yQXJyYXlCdWlsdEJsb2NrID0gMDtcclxuICAgICAgICB0aGlzLmNhbnZhc0NyZWF0ZSA9IG5ldyBDYW52YXNDcmVhdGUoKTtcclxuICAgICAgICAvL3RlbXBvcmFyeSB2YXJpYWJsZXNcclxuICAgICAgICB0aGlzLmJvb2xGb3JTdGFydExvY2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy54ID0gMTtcclxuICAgICAgICB0aGlzLnkgPSA1MDA7XHJcbiAgICAgICAgdGhpcy5saXN0UGl4ZWxzR3JpZCA9IG5ldyBBcnJheSg1MDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTAwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0UGl4ZWxzR3JpZFtpXSA9IG5ldyBBcnJheSgxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzMDA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5QnVpbHRCbG9ja1tpXSA9IG5ldyBBcnJheSg0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmogPSBjYW52YXNPYmo7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yR3JleVJHQjtcclxuICAgICAgICB0aGlzLmNhbnZhc09iai5maWxsU3R5bGUgPSBcInJnYigxNzEsIDMsIDMpXCI7XHJcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLmNhbnZhc0NyZWF0ZS5zZXRTaXplQmxvY2tGb3JGdWlsZCgpO1xyXG4gICAgICAgIHRoaXMueFNpemUgPSBzaXplWzBdO1xyXG4gICAgICAgIHRoaXMueVNpemUgPSBzaXplWzFdO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyaWQoKTtcclxuICAgIH1cclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmRyYXdHcmlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqLmNsZWFyUmVjdCgwLCAwLCA1MDAsIDEwMDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDI1OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmoubW92ZVRvKDAsIDIwICogaSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLmxpbmVUbygxMDAwLCAyMCAqIGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLm1vdmVUbygyMCAqIGksIDApO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5saW5lVG8oMjAgKiBpLCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbnZhc09iai5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmRyYXdCbG9ja3NXaXRoU2F2ZWRBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuZHJhd0Jsb2NrT25GdWlsZCgpO1xyXG4gICAgfTtcclxuICAgIC8vbmVlZCB0byBhZGQgYXN5bmNcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmdldFBpeGVsc1dpdGhHcmlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTAwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAxMDAwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBpeGVsc0dyaWRbaV1bal0gPSB0aGlzLmNhbnZhc09iai5nZXRJbWFnZURhdGEoaSwgaiwgMSwgMSkuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5zZXRTaXplQmxvY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNpemVCbG9jayA9IHRoaXMuY2FudmFzQ3JlYXRlLnR1cm5TaXplKCk7XHJcbiAgICAgICAgdGhpcy54U2l6ZSA9IHNpemVCbG9ja1swXTtcclxuICAgICAgICB0aGlzLnlTaXplID0gc2l6ZUJsb2NrWzFdO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmRyYXdCbG9ja09uRnVpbGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFN0eWxlID0gXCJyZ2IoMTcxLCAzLCAzKVwiO1xyXG4gICAgICAgIGlmICh0aGlzLmJvb2xGb3JTdGFydExvY2F0aW9uID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5maWxsUmVjdCh0aGlzLngsIHRoaXMueSAtIHRoaXMueVNpemUgLSAxLCB0aGlzLnhTaXplLCB0aGlzLnlTaXplKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRHJhdy5wcm90b3R5cGUuc2F2ZUJsb2NrVG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFycmF5QnVpbHRCbG9ja1t0aGlzLmNvdW50ZXJGb3JBcnJheUJ1aWx0QmxvY2srK10gPSBbdGhpcy54LCB0aGlzLnkgLSB0aGlzLnlTaXplIC0gMSwgdGhpcy54U2l6ZSwgdGhpcy55U2l6ZV07XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRHJhdy5wcm90b3R5cGUuZHJhd0Jsb2Nrc1dpdGhTYXZlZEFycmF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb3VudGVyRm9yQXJyYXlCdWlsdEJsb2NrOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFJlY3QodGhpcy5hcnJheUJ1aWx0QmxvY2tbaV1bMF0sIHRoaXMuYXJyYXlCdWlsdEJsb2NrW2ldWzFdLCB0aGlzLmFycmF5QnVpbHRCbG9ja1tpXVsyXSwgdGhpcy5hcnJheUJ1aWx0QmxvY2tbaV1bM10pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzRHJhdztcclxufSgpKTtcclxuZXhwb3J0IHsgQ2FudmFzRHJhdyB9O1xyXG4iLCJpbXBvcnQgeyBDYW52YXNEcmF3IH0gZnJvbSBcIi4vRHJhd1wiO1xyXG52YXIgQ2FudmFzS2V5UHJlc3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNLZXlQcmVzcyhjYW52YXNPYmopIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0RyYXcgPSBuZXcgQ2FudmFzRHJhdyhjYW52YXNPYmopO1xyXG4gICAgfVxyXG4gICAgQ2FudmFzS2V5UHJlc3MucHJvdG90eXBlLnNldFBvc2l0aW9uQmxvY2tPbkZ1aWxkID0gZnVuY3Rpb24gKEtleUNvZGUpIHtcclxuICAgICAgICBzd2l0Y2ggKEtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzODogeyAvL3VwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuc2V0U2l6ZUJsb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuZHJhd0dyaWQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IHsgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzNzogeyAvL2xlZnRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IHsgLy9kb3duXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuc2V0U2l6ZUJsb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuZHJhd0dyaWQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTY6IHsgLy9zaGlmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LnNhdmVCbG9ja1RvQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzRHJhdy5kcmF3R3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzS2V5UHJlc3M7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENhbnZhc0tleVByZXNzIH07XHJcbiIsInZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvL2FkZCBzdGFydCBwb3NpdGlvblxyXG4gICAgZnVuY3Rpb24gUGxheWVyKG5hbWUsIGNvbG9yLCB4SW5pdGlhbExvY2F0aW9uLCB5SW5pdGlhbExvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmNvaW5zID0gMTIwMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5maXJzdEVsZW1lbnRvbkZ1aWxkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy54SW5pdGlhbExvY2F0aW9uID0geEluaXRpYWxMb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnlJbml0aWFsTG9jYXRpb24gPSB5SW5pdGlhbExvY2F0aW9uO1xyXG4gICAgfVxyXG4gICAgUGxheWVyLnByb3RvdHlwZS5EcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXllcjtcclxufSgpKTtcclxuZXhwb3J0IHsgUGxheWVyIH07XHJcbiIsImltcG9ydCB7IE5hbWVQbGF5ZXJzIH0gZnJvbSBcIi4vU3RhcnRQYWdlL1dyaXRlTmFtZXNcIjtcclxuaW1wb3J0IHsgQ2FudmFzS2V5UHJlc3MgfSBmcm9tIFwiLi9HYW1lUGFnZS9Xb3JrV2l0aENhbnZhcy9LZXlQcmVzc1wiO1xyXG5pbXBvcnQgeyBIaWRlRiB9IGZyb20gXCIuL0Zyb250L3NjcmlwdHMvSGlkZVwiO1xyXG5pbXBvcnQgXCIuL0Zyb250L2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuL0Zyb250L2Nzcy9QbGF5ZXJzLmNzc1wiO1xyXG5pbXBvcnQgXCIuL0Zyb250L2ltYWdlcy9WUy5qcGdcIjtcclxuLy8vLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnRQYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyaXRlTmFtZXNcIikub25jbGljayA9IHNldE5hbWVQbGF5ZXJzU3RhcnQ7XHJcbmZ1bmN0aW9uIHNldE5hbWVQbGF5ZXJzU3RhcnQoKSB7XHJcbiAgICB2YXIgcGxheWVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMVwiKS52YWx1ZTtcclxuICAgIHZhciBwbGF5ZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIyXCIpLnZhbHVlO1xyXG4gICAgdmFyIG5hbWVQbGF5ZXJzID0gbmV3IE5hbWVQbGF5ZXJzKCk7XHJcbiAgICBuYW1lUGxheWVycy5zZXROYW1lUGxheWVycyhwbGF5ZXIxLCBwbGF5ZXIyKTtcclxuICAgIEhpZGVIVE1MKCk7XHJcbiAgICBkcmF3R3JpZFN0YXJ0KCk7XHJcbn1cclxudmFyIGhpZGVGO1xyXG5mdW5jdGlvbiBIaWRlSFRNTCgpIHtcclxuICAgIGhpZGVGID0gbmV3IEhpZGVGKCk7XHJcbiAgICBoaWRlRi5IaWRlKCk7XHJcbn1cclxuLy8vLS0tLS0tLS0tLS0tLS0tLVdvcmtXaXRoQ2FudmFzLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHNldFBvc2l0aW9uQmxvY2tPbkZ1aWxkU3RhcnQpO1xyXG52YXIgY2FudmFzS2V5UHJlc3M7XHJcbmZ1bmN0aW9uIGRyYXdHcmlkU3RhcnQoKSB7XHJcbiAgICB2YXIgY2FudmFzT2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1aWxkR2FtZScpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjYW52YXNLZXlQcmVzcyA9IG5ldyBDYW52YXNLZXlQcmVzcyhjYW52YXNPYmopO1xyXG59XHJcbmZ1bmN0aW9uIHNldFBvc2l0aW9uQmxvY2tPbkZ1aWxkU3RhcnQoZSkge1xyXG4gICAgY2FudmFzS2V5UHJlc3Muc2V0UG9zaXRpb25CbG9ja09uRnVpbGQoZS5rZXlDb2RlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vUGxheWVyXCI7XHJcbnZhciBOYW1lUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5hbWVQbGF5ZXJzKCkge1xyXG4gICAgfVxyXG4gICAgTmFtZVBsYXllcnMucHJvdG90eXBlLnNldE5hbWVQbGF5ZXJzID0gZnVuY3Rpb24gKG5hbWVQbGF5ZXIxLCBuYW1lUGxheWVyMikge1xyXG4gICAgICAgIGlmIChuYW1lUGxheWVyMSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBuYW1lUGxheWVyMSA9IFwiUGxheWVyIDFcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBsYXllcjEgPSBuZXcgUGxheWVyKG5hbWVQbGF5ZXIxLCBcIlJlZFwiLCAxLCA1MDApO1xyXG4gICAgICAgIGlmIChuYW1lUGxheWVyMiA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBuYW1lUGxheWVyMiA9IFwiUGxheWVyIDJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGxheWVyMS5EcmF3KCk7XHJcbiAgICAgICAgdmFyIHBsYXllcjIgPSBuZXcgUGxheWVyKG5hbWVQbGF5ZXIyLCBcIkJsdWVcIiwgMTAwMCwgMSk7XHJcbiAgICAgICAgcGxheWVyMi5EcmF3KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5hbWVQbGF5ZXJzO1xyXG59KCkpO1xyXG5leHBvcnQgeyBOYW1lUGxheWVycyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9