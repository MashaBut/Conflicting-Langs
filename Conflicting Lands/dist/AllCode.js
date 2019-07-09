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

/***/ "./src/modules/Controllers/ControllerMain.ts":
/*!***************************************************!*\
  !*** ./src/modules/Controllers/ControllerMain.ts ***!
  \***************************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _GamePage_WorkWithCanvas_Draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GamePage/WorkWithCanvas/Draw */ "./src/modules/GamePage/WorkWithCanvas/Draw.ts");

var Game = /** @class */ (function () {
    function Game(canvasObj) {
        this.flagGame = true;
        this.canvasDraw = new _GamePage_WorkWithCanvas_Draw__WEBPACK_IMPORTED_MODULE_0__["CanvasDraw"](canvasObj);
    }
    Game.prototype.game = function (player1, player2) {
        if (this.flagGame === true) {
            this.flagGame = false;
            this.colorPlayer = player1.getColor();
            console.log(this.colorPlayer);
        }
        else {
            this.flagGame = true;
            this.colorPlayer = player2.getColor();
            console.log(this.colorPlayer);
        }
        this.Time();
    };
    Game.prototype.setPositionBlockOnFuild = function (KeyCode) {
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
            case 13: { //enter
                this.canvasDraw.saveBlockToArray();
                this.canvasDraw.drawGrid();
                break;
            }
            default:
                break;
        }
    };
    Game.prototype.Time = function () {
        //...
    };
    return Game;
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
        this.xInitialLocation = xInitialLocation;
        this.yInitialLocation = yInitialLocation;
    }
    Player.prototype.getColor = function () {
        return this.color;
    };
    Player.prototype.getCoints = function () {
        return this.coins;
    };
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.setCoints = function (coins) {
        this.coins = coins;
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
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.ts");
/* harmony import */ var _Controllers_ControllerMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controllers/ControllerMain */ "./src/modules/Controllers/ControllerMain.ts");



///------------------StartPage---------------------
var player1;
var player2;
var canvasObj = document.getElementById('fuildGame').getContext('2d');
var game = new _Controllers_ControllerMain__WEBPACK_IMPORTED_MODULE_2__["Game"](canvasObj);
var buttonWriteNames = document.getElementById("writeNames");
buttonWriteNames.onclick = function () {
    var namePlayer1 = document.getElementById("player1").value;
    var namePlayer2 = document.getElementById("player2").value;
    player1 = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"](_StartPage_WriteNames__WEBPACK_IMPORTED_MODULE_0__["NamePlayers"].setNamePlayer(namePlayer1, "Player 1"), "Red", 1, 500);
    player2 = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"](_StartPage_WriteNames__WEBPACK_IMPORTED_MODULE_0__["NamePlayers"].setNamePlayer(namePlayer2, "Player 2"), "Blue", 1, 500);
    game.game(player1, player2);
};
///----------------WorkWithCanvas------------------
window.addEventListener("keydown", function (e) {
    if ([13, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
addEventListener("keydown", function (e) {
    game.setPositionBlockOnFuild(e.keyCode);
});
var buttonAA = document.getElementById("AA");
buttonAA.onclick = function () { return game.game(player1, player2); };


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
var NamePlayers = /** @class */ (function () {
    function NamePlayers() {
    }
    NamePlayers.setNamePlayer = function (namePlayer, defaultName) {
        if (namePlayer === "") {
            namePlayer = defaultName;
        }
        return namePlayer;
    };
    return NamePlayers;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29udHJvbGxlcnMvQ29udHJvbGxlck1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvQ3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dhbWVQYWdlL1dvcmtXaXRoQ2FudmFzL0RyYXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0UGFnZS9Xcml0ZU5hbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3RUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNlOzs7Ozs7Ozs7Ozs7O0FDbkRoQjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN1Qjs7Ozs7Ozs7Ozs7OztBQ3pCeEI7QUFBQTtBQUFBO0FBQXdDO0FBQ3hDO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLGdDQUFnQyxvREFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9DQUFvQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDcUI7Ozs7Ozs7Ozs7Ozs7QUNyRXRCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDaUI7Ozs7Ozs7Ozs7Ozs7QUN2QmxCO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ25CO0FBQ2tCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBTSxDQUFDLGlFQUFXO0FBQ3BDLGtCQUFrQiw4Q0FBTSxDQUFDLGlFQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxnQ0FBZ0Msb0NBQW9DOzs7Ozs7Ozs7Ozs7O0FDMUJwRTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3NCIiwiZmlsZSI6IkFsbENvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tb2R1bGVzL1N0YXJ0LnRzXCIpO1xuIiwiaW1wb3J0IHsgQ2FudmFzRHJhdyB9IGZyb20gXCIuLi9HYW1lUGFnZS9Xb3JrV2l0aENhbnZhcy9EcmF3XCI7XHJcbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShjYW52YXNPYmopIHtcclxuICAgICAgICB0aGlzLmZsYWdHYW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbnZhc0RyYXcgPSBuZXcgQ2FudmFzRHJhdyhjYW52YXNPYmopO1xyXG4gICAgfVxyXG4gICAgR2FtZS5wcm90b3R5cGUuZ2FtZSA9IGZ1bmN0aW9uIChwbGF5ZXIxLCBwbGF5ZXIyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmxhZ0dhbWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGFnR2FtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yUGxheWVyID0gcGxheWVyMS5nZXRDb2xvcigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbG9yUGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhZ0dhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yUGxheWVyID0gcGxheWVyMi5nZXRDb2xvcigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbG9yUGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5UaW1lKCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuc2V0UG9zaXRpb25CbG9ja09uRnVpbGQgPSBmdW5jdGlvbiAoS2V5Q29kZSkge1xyXG4gICAgICAgIHN3aXRjaCAoS2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM4OiB7IC8vdXBcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzRHJhdy5zZXRTaXplQmxvY2soKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzRHJhdy5kcmF3R3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzOTogeyAvL3JpZ2h0XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDM3OiB7IC8vbGVmdFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA0MDogeyAvL2Rvd25cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzRHJhdy5zZXRTaXplQmxvY2soKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzRHJhdy5kcmF3R3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxMzogeyAvL2VudGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuc2F2ZUJsb2NrVG9BcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LmRyYXdHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLlRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8uLi5cclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IHsgR2FtZSB9O1xyXG4iLCJ2YXIgQ2FudmFzQ3JlYXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzQ3JlYXRlKCkge1xyXG4gICAgfVxyXG4gICAgLy90ZW1wb3JhcnkgZnVuY3Rpb25cclxuICAgIENhbnZhc0NyZWF0ZS5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3REaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kRGljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlKTtcclxuICAgIH07XHJcbiAgICBDYW52YXNDcmVhdGUucHJvdG90eXBlLnNldFNpemVCbG9ja0ZvckZ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5maXJzdERpY2UgPSAxOCAqIHRoaXMuZmlyc3REaWNlICsgMiAqICh0aGlzLmZpcnN0RGljZSAtIDEpO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kRGljZSA9IDE4ICogdGhpcy5zZWNvbmREaWNlICsgMiAqICh0aGlzLnNlY29uZERpY2UgLSAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlKTtcclxuICAgICAgICByZXR1cm4gW3RoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2VdO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0NyZWF0ZS5wcm90b3R5cGUudHVyblNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0RGljZTtcclxuICAgICAgICBmaXJzdERpY2UgPSB0aGlzLmZpcnN0RGljZTtcclxuICAgICAgICB0aGlzLmZpcnN0RGljZSA9IHRoaXMuc2Vjb25kRGljZTtcclxuICAgICAgICB0aGlzLnNlY29uZERpY2UgPSBmaXJzdERpY2U7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlXTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzQ3JlYXRlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBDYW52YXNDcmVhdGUgfTtcclxuIiwiaW1wb3J0IHsgQ2FudmFzQ3JlYXRlIH0gZnJvbSBcIi4vQ3JlYXRlXCI7XHJcbnZhciBDYW52YXNEcmF3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzRHJhdyhjYW52YXNPYmopIHtcclxuICAgICAgICB0aGlzLmNvbG9yR3JleVJHQiA9IFwicmdiKDE3MSwgMTM5LCAxODcpXCI7IC8vXCIjYWI4Y2JjXCJcclxuICAgICAgICB0aGlzLmFycmF5QnVpbHRCbG9jayA9IG5ldyBBcnJheSgzMDApO1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvckFycmF5QnVpbHRCbG9jayA9IDA7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDcmVhdGUgPSBuZXcgQ2FudmFzQ3JlYXRlKCk7XHJcbiAgICAgICAgLy90ZW1wb3JhcnkgdmFyaWFibGVzXHJcbiAgICAgICAgdGhpcy5ib29sRm9yU3RhcnRMb2NhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueCA9IDE7XHJcbiAgICAgICAgdGhpcy55ID0gNTAwO1xyXG4gICAgICAgIHRoaXMubGlzdFBpeGVsc0dyaWQgPSBuZXcgQXJyYXkoNTAwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFBpeGVsc0dyaWRbaV0gPSBuZXcgQXJyYXkoMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzAwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheUJ1aWx0QmxvY2tbaV0gPSBuZXcgQXJyYXkoNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqID0gY2FudmFzT2JqO1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqLnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvckdyZXlSR0I7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFN0eWxlID0gXCJyZ2IoMTcxLCAzLCAzKVwiO1xyXG4gICAgICAgIHZhciBzaXplID0gdGhpcy5jYW52YXNDcmVhdGUuc2V0U2l6ZUJsb2NrRm9yRnVpbGQoKTtcclxuICAgICAgICB0aGlzLnhTaXplID0gc2l6ZVswXTtcclxuICAgICAgICB0aGlzLnlTaXplID0gc2l6ZVsxXTtcclxuICAgICAgICB0aGlzLmRyYXdHcmlkKCk7XHJcbiAgICB9XHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5kcmF3R3JpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc09iai5jbGVhclJlY3QoMCwgMCwgNTAwLCAxMDAwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAyNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLm1vdmVUbygwLCAyMCAqIGkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5saW5lVG8oMTAwMCwgMjAgKiBpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5tb3ZlVG8oMjAgKiBpLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmoubGluZVRvKDIwICogaSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3QmxvY2tzV2l0aFNhdmVkQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmRyYXdCbG9ja09uRnVpbGQoKTtcclxuICAgIH07XHJcbiAgICAvL25lZWQgdG8gYWRkIGFzeW5jXHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5nZXRQaXhlbHNXaXRoR3JpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTAwMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQaXhlbHNHcmlkW2ldW2pdID0gdGhpcy5jYW52YXNPYmouZ2V0SW1hZ2VEYXRhKGksIGosIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRHJhdy5wcm90b3R5cGUuc2V0U2l6ZUJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaXplQmxvY2sgPSB0aGlzLmNhbnZhc0NyZWF0ZS50dXJuU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMueFNpemUgPSBzaXplQmxvY2tbMF07XHJcbiAgICAgICAgdGhpcy55U2l6ZSA9IHNpemVCbG9ja1sxXTtcclxuICAgIH07XHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5kcmF3QmxvY2tPbkZ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqLmZpbGxTdHlsZSA9IFwicmdiKDE3MSwgMywgMylcIjtcclxuICAgICAgICBpZiAodGhpcy5ib29sRm9yU3RhcnRMb2NhdGlvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFJlY3QodGhpcy54LCB0aGlzLnkgLSB0aGlzLnlTaXplIC0gMSwgdGhpcy54U2l6ZSwgdGhpcy55U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLnNhdmVCbG9ja1RvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheUJ1aWx0QmxvY2tbdGhpcy5jb3VudGVyRm9yQXJyYXlCdWlsdEJsb2NrKytdID0gW3RoaXMueCwgdGhpcy55IC0gdGhpcy55U2l6ZSAtIDEsIHRoaXMueFNpemUsIHRoaXMueVNpemVdO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmRyYXdCbG9ja3NXaXRoU2F2ZWRBcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY291bnRlckZvckFycmF5QnVpbHRCbG9jazsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLmZpbGxSZWN0KHRoaXMuYXJyYXlCdWlsdEJsb2NrW2ldWzBdLCB0aGlzLmFycmF5QnVpbHRCbG9ja1tpXVsxXSwgdGhpcy5hcnJheUJ1aWx0QmxvY2tbaV1bMl0sIHRoaXMuYXJyYXlCdWlsdEJsb2NrW2ldWzNdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbnZhc0RyYXc7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENhbnZhc0RyYXcgfTtcclxuIiwidmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWRkIHN0YXJ0IHBvc2l0aW9uXHJcbiAgICBmdW5jdGlvbiBQbGF5ZXIobmFtZSwgY29sb3IsIHhJbml0aWFsTG9jYXRpb24sIHlJbml0aWFsTG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29pbnMgPSAxMjAwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLnhJbml0aWFsTG9jYXRpb24gPSB4SW5pdGlhbExvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMueUluaXRpYWxMb2NhdGlvbiA9IHlJbml0aWFsTG9jYXRpb247XHJcbiAgICB9XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZ2V0Q29pbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvaW5zO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuc2V0Q29pbnRzID0gZnVuY3Rpb24gKGNvaW5zKSB7XHJcbiAgICAgICAgdGhpcy5jb2lucyA9IGNvaW5zO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBsYXllciB9O1xyXG4iLCJpbXBvcnQgeyBOYW1lUGxheWVycyB9IGZyb20gXCIuL1N0YXJ0UGFnZS9Xcml0ZU5hbWVzXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vQ29udHJvbGxlcnMvQ29udHJvbGxlck1haW5cIjtcclxuLy8vLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnRQYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBwbGF5ZXIxO1xyXG52YXIgcGxheWVyMjtcclxudmFyIGNhbnZhc09iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWlsZEdhbWUnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG52YXIgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc09iaik7XHJcbnZhciBidXR0b25Xcml0ZU5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cml0ZU5hbWVzXCIpO1xyXG5idXR0b25Xcml0ZU5hbWVzLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbmFtZVBsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFcIikudmFsdWU7XHJcbiAgICB2YXIgbmFtZVBsYXllcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJcIikudmFsdWU7XHJcbiAgICBwbGF5ZXIxID0gbmV3IFBsYXllcihOYW1lUGxheWVycy5zZXROYW1lUGxheWVyKG5hbWVQbGF5ZXIxLCBcIlBsYXllciAxXCIpLCBcIlJlZFwiLCAxLCA1MDApO1xyXG4gICAgcGxheWVyMiA9IG5ldyBQbGF5ZXIoTmFtZVBsYXllcnMuc2V0TmFtZVBsYXllcihuYW1lUGxheWVyMiwgXCJQbGF5ZXIgMlwiKSwgXCJCbHVlXCIsIDEsIDUwMCk7XHJcbiAgICBnYW1lLmdhbWUocGxheWVyMSwgcGxheWVyMik7XHJcbn07XHJcbi8vLy0tLS0tLS0tLS0tLS0tLS1Xb3JrV2l0aENhbnZhcy0tLS0tLS0tLS0tLS0tLS0tLVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChbMTMsIDM3LCAzOCwgMzksIDQwXS5pbmRleE9mKGUua2V5Q29kZSkgPiAtMSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufSwgZmFsc2UpO1xyXG5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZ2FtZS5zZXRQb3NpdGlvbkJsb2NrT25GdWlsZChlLmtleUNvZGUpO1xyXG59KTtcclxudmFyIGJ1dHRvbkFBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBQVwiKTtcclxuYnV0dG9uQUEub25jbGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdhbWUuZ2FtZShwbGF5ZXIxLCBwbGF5ZXIyKTsgfTtcclxuIiwidmFyIE5hbWVQbGF5ZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTmFtZVBsYXllcnMoKSB7XHJcbiAgICB9XHJcbiAgICBOYW1lUGxheWVycy5zZXROYW1lUGxheWVyID0gZnVuY3Rpb24gKG5hbWVQbGF5ZXIsIGRlZmF1bHROYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWVQbGF5ZXIgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbmFtZVBsYXllciA9IGRlZmF1bHROYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmFtZVBsYXllcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTmFtZVBsYXllcnM7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IE5hbWVQbGF5ZXJzIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=