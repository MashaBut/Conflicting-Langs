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
        var elementForHide1 = document.getElementById('startpage');
        elementForHide1.style.display = 'none';
        var elementForHide2 = document.getElementById('canvas');
        elementForHide2.style.display = 'block';
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
/* harmony import */ var _Front_scripts_Hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Front/scripts/Hide */ "./src/modules/Front/scripts/Hide.ts");
/* harmony import */ var _Front_css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Front/css/main.css */ "./src/modules/Front/css/main.css");
/* harmony import */ var _Front_css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Front_css_main_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Front_css_Players_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Front/css/Players.css */ "./src/modules/Front/css/Players.css");
/* harmony import */ var _Front_css_Players_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Front_css_Players_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Front_images_VS_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Front/images/VS.jpg */ "./src/modules/Front/images/VS.jpg");
/* harmony import */ var _Front_images_VS_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Front_images_VS_jpg__WEBPACK_IMPORTED_MODULE_6__);







///------------------StartPage---------------------
var player1;
var player2;
var canvasObj = document.getElementById('fuildGame').getContext('2d');
var game = new _Controllers_ControllerMain__WEBPACK_IMPORTED_MODULE_2__["Game"](canvasObj);
var canvasNone = document.getElementById('canvas');
canvasNone.style.display = 'none';
var buttonWriteNames = document.getElementById("writeNames");
buttonWriteNames.onclick = function () {
    var namePlayer1 = document.getElementById("player1").value;
    var namePlayer2 = document.getElementById("player2").value;
    player1 = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"](_StartPage_WriteNames__WEBPACK_IMPORTED_MODULE_0__["NamePlayers"].setNamePlayer(namePlayer1, "Player 1"), "Red", 1, 500);
    player2 = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"](_StartPage_WriteNames__WEBPACK_IMPORTED_MODULE_0__["NamePlayers"].setNamePlayer(namePlayer2, "Player 2"), "Blue", 1, 500);
    HideHTML();
    game.game(player1, player2);
};
var hideF;
function HideHTML() {
    hideF = new _Front_scripts_Hide__WEBPACK_IMPORTED_MODULE_3__["HideF"]();
    hideF.Hide();
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29udHJvbGxlcnMvQ29udHJvbGxlck1haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRnJvbnQvY3NzL1BsYXllcnMuY3NzPzg1NDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRnJvbnQvY3NzL21haW4uY3NzP2MyYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRnJvbnQvaW1hZ2VzL1ZTLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Gcm9udC9zY3JpcHRzL0hpZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvR2FtZVBhZ2UvV29ya1dpdGhDYW52YXMvQ3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0dhbWVQYWdlL1dvcmtXaXRoQ2FudmFzL0RyYXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0UGFnZS9Xcml0ZU5hbWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3RUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNlOzs7Ozs7Ozs7Ozs7QUNuRGhCLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlCQUFpQixxQkFBdUIsWTs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7QUNYakI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDdUI7Ozs7Ozs7Ozs7Ozs7QUN6QnhCO0FBQUE7QUFBQTtBQUF3QztBQUN4QztBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxnQ0FBZ0Msb0RBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQywyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3FCOzs7Ozs7Ozs7Ozs7O0FDckV0QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2lCOzs7Ozs7Ozs7Ozs7O0FDdkJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ25CO0FBQ2tCO0FBQ1A7QUFDZjtBQUNHO0FBQ0Y7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdFQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4Q0FBTSxDQUFDLGlFQUFXO0FBQ3BDLGtCQUFrQiw4Q0FBTSxDQUFDLGlFQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGdDQUFnQyxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7QUN0Q3BFO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0IiLCJmaWxlIjoiQWxsQ29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21vZHVsZXMvU3RhcnQudHNcIik7XG4iLCJpbXBvcnQgeyBDYW52YXNEcmF3IH0gZnJvbSBcIi4uL0dhbWVQYWdlL1dvcmtXaXRoQ2FudmFzL0RyYXdcIjtcclxudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lKGNhbnZhc09iaikge1xyXG4gICAgICAgIHRoaXMuZmxhZ0dhbWUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzRHJhdyA9IG5ldyBDYW52YXNEcmF3KGNhbnZhc09iaik7XHJcbiAgICB9XHJcbiAgICBHYW1lLnByb3RvdHlwZS5nYW1lID0gZnVuY3Rpb24gKHBsYXllcjEsIHBsYXllcjIpIHtcclxuICAgICAgICBpZiAodGhpcy5mbGFnR2FtZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZsYWdHYW1lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JQbGF5ZXIgPSBwbGF5ZXIxLmdldENvbG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sb3JQbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mbGFnR2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3JQbGF5ZXIgPSBwbGF5ZXIyLmdldENvbG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29sb3JQbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlRpbWUoKTtcclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5zZXRQb3NpdGlvbkJsb2NrT25GdWlsZCA9IGZ1bmN0aW9uIChLZXlDb2RlKSB7XHJcbiAgICAgICAgc3dpdGNoIChLZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzg6IHsgLy91cFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LnNldFNpemVCbG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LmRyYXdHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDM5OiB7IC8vcmlnaHRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzc6IHsgLy9sZWZ0XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDQwOiB7IC8vZG93blxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LnNldFNpemVCbG9jaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LmRyYXdHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDEzOiB7IC8vZW50ZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzRHJhdy5zYXZlQmxvY2tUb0FycmF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuZHJhd0dyaWQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZS5wcm90b3R5cGUuVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLy4uLlxyXG4gICAgfTtcclxuICAgIHJldHVybiBHYW1lO1xyXG59KCkpO1xyXG5leHBvcnQgeyBHYW1lIH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIlZTLmpwZ1wiOyIsInZhciBIaWRlRiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEhpZGVGKCkge1xyXG4gICAgfVxyXG4gICAgSGlkZUYucHJvdG90eXBlLkhpZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRGb3JIaWRlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydHBhZ2UnKTtcclxuICAgICAgICBlbGVtZW50Rm9ySGlkZTEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB2YXIgZWxlbWVudEZvckhpZGUyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGVsZW1lbnRGb3JIaWRlMi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH07XHJcbiAgICByZXR1cm4gSGlkZUY7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEhpZGVGIH07XHJcbiIsInZhciBDYW52YXNDcmVhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNDcmVhdGUoKSB7XHJcbiAgICB9XHJcbiAgICAvL3RlbXBvcmFyeSBmdW5jdGlvblxyXG4gICAgQ2FudmFzQ3JlYXRlLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdERpY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAgICAgdGhpcy5zZWNvbmREaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2UpO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0NyZWF0ZS5wcm90b3R5cGUuc2V0U2l6ZUJsb2NrRm9yRnVpbGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLmZpcnN0RGljZSA9IDE4ICogdGhpcy5maXJzdERpY2UgKyAyICogKHRoaXMuZmlyc3REaWNlIC0gMSk7XHJcbiAgICAgICAgdGhpcy5zZWNvbmREaWNlID0gMTggKiB0aGlzLnNlY29uZERpY2UgKyAyICogKHRoaXMuc2Vjb25kRGljZSAtIDEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2UpO1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5maXJzdERpY2UsIHRoaXMuc2Vjb25kRGljZV07XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzQ3JlYXRlLnByb3RvdHlwZS50dXJuU2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZmlyc3REaWNlO1xyXG4gICAgICAgIGZpcnN0RGljZSA9IHRoaXMuZmlyc3REaWNlO1xyXG4gICAgICAgIHRoaXMuZmlyc3REaWNlID0gdGhpcy5zZWNvbmREaWNlO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kRGljZSA9IGZpcnN0RGljZTtcclxuICAgICAgICByZXR1cm4gW3RoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2VdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDYW52YXNDcmVhdGU7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENhbnZhc0NyZWF0ZSB9O1xyXG4iLCJpbXBvcnQgeyBDYW52YXNDcmVhdGUgfSBmcm9tIFwiLi9DcmVhdGVcIjtcclxudmFyIENhbnZhc0RyYXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYW52YXNEcmF3KGNhbnZhc09iaikge1xyXG4gICAgICAgIHRoaXMuY29sb3JHcmV5UkdCID0gXCJyZ2IoMTcxLCAxMzksIDE4NylcIjsgLy9cIiNhYjhjYmNcIlxyXG4gICAgICAgIHRoaXMuYXJyYXlCdWlsdEJsb2NrID0gbmV3IEFycmF5KDMwMCk7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRm9yQXJyYXlCdWlsdEJsb2NrID0gMDtcclxuICAgICAgICB0aGlzLmNhbnZhc0NyZWF0ZSA9IG5ldyBDYW52YXNDcmVhdGUoKTtcclxuICAgICAgICAvL3RlbXBvcmFyeSB2YXJpYWJsZXNcclxuICAgICAgICB0aGlzLmJvb2xGb3JTdGFydExvY2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy54ID0gMTtcclxuICAgICAgICB0aGlzLnkgPSA1MDA7XHJcbiAgICAgICAgdGhpcy5saXN0UGl4ZWxzR3JpZCA9IG5ldyBBcnJheSg1MDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTAwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0UGl4ZWxzR3JpZFtpXSA9IG5ldyBBcnJheSgxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzMDA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFycmF5QnVpbHRCbG9ja1tpXSA9IG5ldyBBcnJheSg0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmogPSBjYW52YXNPYmo7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yR3JleVJHQjtcclxuICAgICAgICB0aGlzLmNhbnZhc09iai5maWxsU3R5bGUgPSBcInJnYigxNzEsIDMsIDMpXCI7XHJcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLmNhbnZhc0NyZWF0ZS5zZXRTaXplQmxvY2tGb3JGdWlsZCgpO1xyXG4gICAgICAgIHRoaXMueFNpemUgPSBzaXplWzBdO1xyXG4gICAgICAgIHRoaXMueVNpemUgPSBzaXplWzFdO1xyXG4gICAgICAgIHRoaXMuZHJhd0dyaWQoKTtcclxuICAgIH1cclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmRyYXdHcmlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqLmNsZWFyUmVjdCgwLCAwLCA1MDAsIDEwMDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDI1OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmoubW92ZVRvKDAsIDIwICogaSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLmxpbmVUbygxMDAwLCAyMCAqIGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSA1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLm1vdmVUbygyMCAqIGksIDApO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5saW5lVG8oMjAgKiBpLCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbnZhc09iai5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmRyYXdCbG9ja3NXaXRoU2F2ZWRBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuZHJhd0Jsb2NrT25GdWlsZCgpO1xyXG4gICAgfTtcclxuICAgIC8vbmVlZCB0byBhZGQgYXN5bmNcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmdldFBpeGVsc1dpdGhHcmlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTAwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAxMDAwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFBpeGVsc0dyaWRbaV1bal0gPSB0aGlzLmNhbnZhc09iai5nZXRJbWFnZURhdGEoaSwgaiwgMSwgMSkuZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5zZXRTaXplQmxvY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNpemVCbG9jayA9IHRoaXMuY2FudmFzQ3JlYXRlLnR1cm5TaXplKCk7XHJcbiAgICAgICAgdGhpcy54U2l6ZSA9IHNpemVCbG9ja1swXTtcclxuICAgICAgICB0aGlzLnlTaXplID0gc2l6ZUJsb2NrWzFdO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmRyYXdCbG9ja09uRnVpbGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFN0eWxlID0gXCJyZ2IoMTcxLCAzLCAzKVwiO1xyXG4gICAgICAgIGlmICh0aGlzLmJvb2xGb3JTdGFydExvY2F0aW9uID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5maWxsUmVjdCh0aGlzLngsIHRoaXMueSAtIHRoaXMueVNpemUgLSAxLCB0aGlzLnhTaXplLCB0aGlzLnlTaXplKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRHJhdy5wcm90b3R5cGUuc2F2ZUJsb2NrVG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFycmF5QnVpbHRCbG9ja1t0aGlzLmNvdW50ZXJGb3JBcnJheUJ1aWx0QmxvY2srK10gPSBbdGhpcy54LCB0aGlzLnkgLSB0aGlzLnlTaXplIC0gMSwgdGhpcy54U2l6ZSwgdGhpcy55U2l6ZV07XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRHJhdy5wcm90b3R5cGUuZHJhd0Jsb2Nrc1dpdGhTYXZlZEFycmF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb3VudGVyRm9yQXJyYXlCdWlsdEJsb2NrOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFJlY3QodGhpcy5hcnJheUJ1aWx0QmxvY2tbaV1bMF0sIHRoaXMuYXJyYXlCdWlsdEJsb2NrW2ldWzFdLCB0aGlzLmFycmF5QnVpbHRCbG9ja1tpXVsyXSwgdGhpcy5hcnJheUJ1aWx0QmxvY2tbaV1bM10pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzRHJhdztcclxufSgpKTtcclxuZXhwb3J0IHsgQ2FudmFzRHJhdyB9O1xyXG4iLCJ2YXIgUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy9hZGQgc3RhcnQgcG9zaXRpb25cclxuICAgIGZ1bmN0aW9uIFBsYXllcihuYW1lLCBjb2xvciwgeEluaXRpYWxMb2NhdGlvbiwgeUluaXRpYWxMb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb2lucyA9IDEyMDA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMueEluaXRpYWxMb2NhdGlvbiA9IHhJbml0aWFsTG9jYXRpb247XHJcbiAgICAgICAgdGhpcy55SW5pdGlhbExvY2F0aW9uID0geUluaXRpYWxMb2NhdGlvbjtcclxuICAgIH1cclxuICAgIFBsYXllci5wcm90b3R5cGUuZ2V0Q29sb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5nZXRDb2ludHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29pbnM7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5zZXRDb2ludHMgPSBmdW5jdGlvbiAoY29pbnMpIHtcclxuICAgICAgICB0aGlzLmNvaW5zID0gY29pbnM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXllcjtcclxufSgpKTtcclxuZXhwb3J0IHsgUGxheWVyIH07XHJcbiIsImltcG9ydCB7IE5hbWVQbGF5ZXJzIH0gZnJvbSBcIi4vU3RhcnRQYWdlL1dyaXRlTmFtZXNcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9Db250cm9sbGVycy9Db250cm9sbGVyTWFpblwiO1xyXG5pbXBvcnQgeyBIaWRlRiB9IGZyb20gXCIuL0Zyb250L3NjcmlwdHMvSGlkZVwiO1xyXG5pbXBvcnQgXCIuL0Zyb250L2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuL0Zyb250L2Nzcy9QbGF5ZXJzLmNzc1wiO1xyXG5pbXBvcnQgXCIuL0Zyb250L2ltYWdlcy9WUy5qcGdcIjtcclxuLy8vLS0tLS0tLS0tLS0tLS0tLS0tU3RhcnRQYWdlLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnZhciBwbGF5ZXIxO1xyXG52YXIgcGxheWVyMjtcclxudmFyIGNhbnZhc09iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmdWlsZEdhbWUnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG52YXIgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhc09iaik7XHJcbnZhciBjYW52YXNOb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG5jYW52YXNOb25lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbnZhciBidXR0b25Xcml0ZU5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3cml0ZU5hbWVzXCIpO1xyXG5idXR0b25Xcml0ZU5hbWVzLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbmFtZVBsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFcIikudmFsdWU7XHJcbiAgICB2YXIgbmFtZVBsYXllcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJcIikudmFsdWU7XHJcbiAgICBwbGF5ZXIxID0gbmV3IFBsYXllcihOYW1lUGxheWVycy5zZXROYW1lUGxheWVyKG5hbWVQbGF5ZXIxLCBcIlBsYXllciAxXCIpLCBcIlJlZFwiLCAxLCA1MDApO1xyXG4gICAgcGxheWVyMiA9IG5ldyBQbGF5ZXIoTmFtZVBsYXllcnMuc2V0TmFtZVBsYXllcihuYW1lUGxheWVyMiwgXCJQbGF5ZXIgMlwiKSwgXCJCbHVlXCIsIDEsIDUwMCk7XHJcbiAgICBIaWRlSFRNTCgpO1xyXG4gICAgZ2FtZS5nYW1lKHBsYXllcjEsIHBsYXllcjIpO1xyXG59O1xyXG52YXIgaGlkZUY7XHJcbmZ1bmN0aW9uIEhpZGVIVE1MKCkge1xyXG4gICAgaGlkZUYgPSBuZXcgSGlkZUYoKTtcclxuICAgIGhpZGVGLkhpZGUoKTtcclxufVxyXG4vLy8tLS0tLS0tLS0tLS0tLS0tV29ya1dpdGhDYW52YXMtLS0tLS0tLS0tLS0tLS0tLS1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoWzEzLCAzNywgMzgsIDM5LCA0MF0uaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn0sIGZhbHNlKTtcclxuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGdhbWUuc2V0UG9zaXRpb25CbG9ja09uRnVpbGQoZS5rZXlDb2RlKTtcclxufSk7XHJcbnZhciBidXR0b25BQSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQUFcIik7XHJcbmJ1dHRvbkFBLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBnYW1lLmdhbWUocGxheWVyMSwgcGxheWVyMik7IH07XHJcbiIsInZhciBOYW1lUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5hbWVQbGF5ZXJzKCkge1xyXG4gICAgfVxyXG4gICAgTmFtZVBsYXllcnMuc2V0TmFtZVBsYXllciA9IGZ1bmN0aW9uIChuYW1lUGxheWVyLCBkZWZhdWx0TmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lUGxheWVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5hbWVQbGF5ZXIgPSBkZWZhdWx0TmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5hbWVQbGF5ZXI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5hbWVQbGF5ZXJzO1xyXG59KCkpO1xyXG5leHBvcnQgeyBOYW1lUGxheWVycyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9