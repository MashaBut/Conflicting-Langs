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


///------------------StartPage---------------------
document.getElementById("writeNames").onclick = setNamePlayersStart;
function setNamePlayersStart() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var namePlayers = new _StartPage_WriteNames__WEBPACK_IMPORTED_MODULE_0__["NamePlayers"]();
    namePlayers.setNamePlayers(player1, player2);
    drawGridStart();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvQ3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dhbWVQYWdlL1dvcmtXaXRoQ2FudmFzL0RyYXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvS2V5UHJlc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0UGFnZS9Xcml0ZU5hbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7Ozs7Ozs7Ozs7Ozs7QUN6QnhCO0FBQUE7QUFBQTtBQUF3QztBQUN4QztBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxnQ0FBZ0Msb0RBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQywyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3FCOzs7Ozs7Ozs7Ozs7O0FDckV0QjtBQUFBO0FBQUE7QUFBb0M7QUFDcEM7QUFDQTtBQUNBLDhCQUE4QixnREFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDeUI7Ozs7Ozs7Ozs7Ozs7QUNsQzFCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNpQjs7Ozs7Ozs7Ozs7OztBQ2ZsQjtBQUFBO0FBQUE7QUFBcUQ7QUFDZTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlFQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0ZBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0IiLCJmaWxlIjoiQWxsQ29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21vZHVsZXMvU3RhcnQudHNcIik7XG4iLCJ2YXIgQ2FudmFzQ3JlYXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzQ3JlYXRlKCkge1xyXG4gICAgfVxyXG4gICAgLy90ZW1wb3JhcnkgZnVuY3Rpb25cclxuICAgIENhbnZhc0NyZWF0ZS5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3REaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kRGljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlKTtcclxuICAgIH07XHJcbiAgICBDYW52YXNDcmVhdGUucHJvdG90eXBlLnNldFNpemVCbG9ja0ZvckZ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5maXJzdERpY2UgPSAxOCAqIHRoaXMuZmlyc3REaWNlICsgMiAqICh0aGlzLmZpcnN0RGljZSAtIDEpO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kRGljZSA9IDE4ICogdGhpcy5zZWNvbmREaWNlICsgMiAqICh0aGlzLnNlY29uZERpY2UgLSAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlKTtcclxuICAgICAgICByZXR1cm4gW3RoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2VdO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0NyZWF0ZS5wcm90b3R5cGUudHVyblNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0RGljZTtcclxuICAgICAgICBmaXJzdERpY2UgPSB0aGlzLmZpcnN0RGljZTtcclxuICAgICAgICB0aGlzLmZpcnN0RGljZSA9IHRoaXMuc2Vjb25kRGljZTtcclxuICAgICAgICB0aGlzLnNlY29uZERpY2UgPSBmaXJzdERpY2U7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlXTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzQ3JlYXRlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBDYW52YXNDcmVhdGUgfTtcclxuIiwiaW1wb3J0IHsgQ2FudmFzQ3JlYXRlIH0gZnJvbSBcIi4vQ3JlYXRlXCI7XHJcbnZhciBDYW52YXNEcmF3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzRHJhdyhjYW52YXNPYmopIHtcclxuICAgICAgICB0aGlzLmNvbG9yR3JleVJHQiA9IFwicmdiKDE3MSwgMTM5LCAxODcpXCI7IC8vXCIjYWI4Y2JjXCJcclxuICAgICAgICB0aGlzLmFycmF5QnVpbHRCbG9jayA9IG5ldyBBcnJheSgzMDApO1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvckFycmF5QnVpbHRCbG9jayA9IDA7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDcmVhdGUgPSBuZXcgQ2FudmFzQ3JlYXRlKCk7XHJcbiAgICAgICAgLy90ZW1wb3JhcnkgdmFyaWFibGVzXHJcbiAgICAgICAgdGhpcy5ib29sRm9yU3RhcnRMb2NhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueCA9IDE7XHJcbiAgICAgICAgdGhpcy55ID0gNTAwO1xyXG4gICAgICAgIHRoaXMubGlzdFBpeGVsc0dyaWQgPSBuZXcgQXJyYXkoNTAwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFBpeGVsc0dyaWRbaV0gPSBuZXcgQXJyYXkoMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzAwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheUJ1aWx0QmxvY2tbaV0gPSBuZXcgQXJyYXkoNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqID0gY2FudmFzT2JqO1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqLnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvckdyZXlSR0I7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFN0eWxlID0gXCJyZ2IoMTcxLCAzLCAzKVwiO1xyXG4gICAgICAgIHZhciBzaXplID0gdGhpcy5jYW52YXNDcmVhdGUuc2V0U2l6ZUJsb2NrRm9yRnVpbGQoKTtcclxuICAgICAgICB0aGlzLnhTaXplID0gc2l6ZVswXTtcclxuICAgICAgICB0aGlzLnlTaXplID0gc2l6ZVsxXTtcclxuICAgICAgICB0aGlzLmRyYXdHcmlkKCk7XHJcbiAgICB9XHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5kcmF3R3JpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc09iai5jbGVhclJlY3QoMCwgMCwgNTAwLCAxMDAwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAyNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLm1vdmVUbygwLCAyMCAqIGkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5saW5lVG8oMTAwMCwgMjAgKiBpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5tb3ZlVG8oMjAgKiBpLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmoubGluZVRvKDIwICogaSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3QmxvY2tzV2l0aFNhdmVkQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmRyYXdCbG9ja09uRnVpbGQoKTtcclxuICAgIH07XHJcbiAgICAvL25lZWQgdG8gYWRkIGFzeW5jXHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5nZXRQaXhlbHNXaXRoR3JpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTAwMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQaXhlbHNHcmlkW2ldW2pdID0gdGhpcy5jYW52YXNPYmouZ2V0SW1hZ2VEYXRhKGksIGosIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRHJhdy5wcm90b3R5cGUuc2V0U2l6ZUJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaXplQmxvY2sgPSB0aGlzLmNhbnZhc0NyZWF0ZS50dXJuU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMueFNpemUgPSBzaXplQmxvY2tbMF07XHJcbiAgICAgICAgdGhpcy55U2l6ZSA9IHNpemVCbG9ja1sxXTtcclxuICAgIH07XHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5kcmF3QmxvY2tPbkZ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqLmZpbGxTdHlsZSA9IFwicmdiKDE3MSwgMywgMylcIjtcclxuICAgICAgICBpZiAodGhpcy5ib29sRm9yU3RhcnRMb2NhdGlvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFJlY3QodGhpcy54LCB0aGlzLnkgLSB0aGlzLnlTaXplIC0gMSwgdGhpcy54U2l6ZSwgdGhpcy55U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLnNhdmVCbG9ja1RvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheUJ1aWx0QmxvY2tbdGhpcy5jb3VudGVyRm9yQXJyYXlCdWlsdEJsb2NrKytdID0gW3RoaXMueCwgdGhpcy55IC0gdGhpcy55U2l6ZSAtIDEsIHRoaXMueFNpemUsIHRoaXMueVNpemVdO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmRyYXdCbG9ja3NXaXRoU2F2ZWRBcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY291bnRlckZvckFycmF5QnVpbHRCbG9jazsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLmZpbGxSZWN0KHRoaXMuYXJyYXlCdWlsdEJsb2NrW2ldWzBdLCB0aGlzLmFycmF5QnVpbHRCbG9ja1tpXVsxXSwgdGhpcy5hcnJheUJ1aWx0QmxvY2tbaV1bMl0sIHRoaXMuYXJyYXlCdWlsdEJsb2NrW2ldWzNdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbnZhc0RyYXc7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENhbnZhc0RyYXcgfTtcclxuIiwiaW1wb3J0IHsgQ2FudmFzRHJhdyB9IGZyb20gXCIuL0RyYXdcIjtcclxudmFyIENhbnZhc0tleVByZXNzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzS2V5UHJlc3MoY2FudmFzT2JqKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNEcmF3ID0gbmV3IENhbnZhc0RyYXcoY2FudmFzT2JqKTtcclxuICAgIH1cclxuICAgIENhbnZhc0tleVByZXNzLnByb3RvdHlwZS5zZXRQb3NpdGlvbkJsb2NrT25GdWlsZCA9IGZ1bmN0aW9uIChLZXlDb2RlKSB7XHJcbiAgICAgICAgc3dpdGNoIChLZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzg6IHsgLy91cFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LnNldFNpemVCbG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LmRyYXdHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDM5OiB7IC8vcmlnaHRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzc6IHsgLy9sZWZ0XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDQwOiB7IC8vZG93blxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LnNldFNpemVCbG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LmRyYXdHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDE2OiB7IC8vc2hpZnRcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzRHJhdy5zYXZlQmxvY2tUb0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuZHJhd0dyaWQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbnZhc0tleVByZXNzO1xyXG59KCkpO1xyXG5leHBvcnQgeyBDYW52YXNLZXlQcmVzcyB9O1xyXG4iLCJ2YXIgUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy9hZGQgc3RhcnQgcG9zaXRpb25cclxuICAgIGZ1bmN0aW9uIFBsYXllcihuYW1lLCBjb2xvciwgeEluaXRpYWxMb2NhdGlvbiwgeUluaXRpYWxMb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb2lucyA9IDEyMDA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuZmlyc3RFbGVtZW50b25GdWlsZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueEluaXRpYWxMb2NhdGlvbiA9IHhJbml0aWFsTG9jYXRpb247XHJcbiAgICAgICAgdGhpcy55SW5pdGlhbExvY2F0aW9uID0geUluaXRpYWxMb2NhdGlvbjtcclxuICAgIH1cclxuICAgIFBsYXllci5wcm90b3R5cGUuRHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBsYXllciB9O1xyXG4iLCJpbXBvcnQgeyBOYW1lUGxheWVycyB9IGZyb20gXCIuL1N0YXJ0UGFnZS9Xcml0ZU5hbWVzXCI7XHJcbmltcG9ydCB7IENhbnZhc0tleVByZXNzIH0gZnJvbSBcIi4vR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvS2V5UHJlc3NcIjtcclxuLy8vLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnRQYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid3JpdGVOYW1lc1wiKS5vbmNsaWNrID0gc2V0TmFtZVBsYXllcnNTdGFydDtcclxuZnVuY3Rpb24gc2V0TmFtZVBsYXllcnNTdGFydCgpIHtcclxuICAgIHZhciBwbGF5ZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxXCIpLnZhbHVlO1xyXG4gICAgdmFyIHBsYXllcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJcIikudmFsdWU7XHJcbiAgICB2YXIgbmFtZVBsYXllcnMgPSBuZXcgTmFtZVBsYXllcnMoKTtcclxuICAgIG5hbWVQbGF5ZXJzLnNldE5hbWVQbGF5ZXJzKHBsYXllcjEsIHBsYXllcjIpO1xyXG4gICAgZHJhd0dyaWRTdGFydCgpO1xyXG59XHJcbi8vLy0tLS0tLS0tLS0tLS0tLS1Xb3JrV2l0aENhbnZhcy0tLS0tLS0tLS0tLS0tLS0tLVxyXG5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBzZXRQb3NpdGlvbkJsb2NrT25GdWlsZFN0YXJ0KTtcclxudmFyIGNhbnZhc0tleVByZXNzO1xyXG5mdW5jdGlvbiBkcmF3R3JpZFN0YXJ0KCkge1xyXG4gICAgdmFyIGNhbnZhc09iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWlsZEdhbWUnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FudmFzS2V5UHJlc3MgPSBuZXcgQ2FudmFzS2V5UHJlc3MoY2FudmFzT2JqKTtcclxufVxyXG5mdW5jdGlvbiBzZXRQb3NpdGlvbkJsb2NrT25GdWlsZFN0YXJ0KGUpIHtcclxuICAgIGNhbnZhc0tleVByZXNzLnNldFBvc2l0aW9uQmxvY2tPbkZ1aWxkKGUua2V5Q29kZSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllclwiO1xyXG52YXIgTmFtZVBsYXllcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOYW1lUGxheWVycygpIHtcclxuICAgIH1cclxuICAgIE5hbWVQbGF5ZXJzLnByb3RvdHlwZS5zZXROYW1lUGxheWVycyA9IGZ1bmN0aW9uIChuYW1lUGxheWVyMSwgbmFtZVBsYXllcjIpIHtcclxuICAgICAgICBpZiAobmFtZVBsYXllcjEgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbmFtZVBsYXllcjEgPSBcIlBsYXllciAxXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwbGF5ZXIxID0gbmV3IFBsYXllcihuYW1lUGxheWVyMSwgXCJSZWRcIiwgMSwgNTAwKTtcclxuICAgICAgICBpZiAobmFtZVBsYXllcjIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbmFtZVBsYXllcjIgPSBcIlBsYXllciAyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXllcjEuRHJhdygpO1xyXG4gICAgICAgIHZhciBwbGF5ZXIyID0gbmV3IFBsYXllcihuYW1lUGxheWVyMiwgXCJCbHVlXCIsIDEwMDAsIDEpO1xyXG4gICAgICAgIHBsYXllcjIuRHJhdygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOYW1lUGxheWVycztcclxufSgpKTtcclxuZXhwb3J0IHsgTmFtZVBsYXllcnMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==