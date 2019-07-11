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

/***/ "./src/assets/images/VS.jpg":
/*!**********************************!*\
  !*** ./src/assets/images/VS.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "VS.jpg";

/***/ }),

/***/ "./src/controllers/controller-main-module.ts":
/*!***************************************************!*\
  !*** ./src/controllers/controller-main-module.ts ***!
  \***************************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _modules_game_work_with_canvas_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/game/work-with-canvas/draw */ "./src/modules/game/work-with-canvas/draw.ts");

var Game = /** @class */ (function () {
    function Game(canvasObj) {
        this.flagGame = true;
        this.canvasDraw = new _modules_game_work_with_canvas_draw__WEBPACK_IMPORTED_MODULE_0__["CanvasDraw"](canvasObj);
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

/***/ "./src/modules/Start.ts":
/*!******************************!*\
  !*** ./src/modules/Start.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start_write_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start/write-names */ "./src/modules/start/write-names.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.ts");
/* harmony import */ var _controllers_controller_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/controller-main-module */ "./src/controllers/controller-main-module.ts");
/* harmony import */ var _start_ux_scripts_hide_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/ux/scripts/hide-function */ "./src/modules/start/ux/scripts/hide-function.ts");
/* harmony import */ var _start_ux_css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start/ux/css/main.css */ "./src/modules/start/ux/css/main.css");
/* harmony import */ var _start_ux_css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_start_ux_css_main_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _start_ux_css_players_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/ux/css/players.css */ "./src/modules/start/ux/css/players.css");
/* harmony import */ var _start_ux_css_players_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_start_ux_css_players_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_VS_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/VS.jpg */ "./src/assets/images/VS.jpg");
/* harmony import */ var _assets_images_VS_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_VS_jpg__WEBPACK_IMPORTED_MODULE_6__);







///------------------StartPage---------------------
var player1;
var player2;
var hideF = new _start_ux_scripts_hide_function__WEBPACK_IMPORTED_MODULE_3__["HideFunction"];
var canvasObj = document.getElementById('fuildGame').getContext('2d');
var game = new _controllers_controller_main_module__WEBPACK_IMPORTED_MODULE_2__["Game"](canvasObj);
var canvasNone = document.getElementById('canvas');
canvasNone.style.display = 'none';
var buttonWriteNames = document.getElementById("writeNames");
buttonWriteNames.onclick = function () {
    var namePlayer1 = document.getElementById("player1").value;
    var namePlayer2 = document.getElementById("player2").value;
    player1 = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"](_start_write_names__WEBPACK_IMPORTED_MODULE_0__["NamePlayers"].setNamePlayer(namePlayer1, "Player 1"), "Red", 1, 500);
    player2 = new _player__WEBPACK_IMPORTED_MODULE_1__["Player"](_start_write_names__WEBPACK_IMPORTED_MODULE_0__["NamePlayers"].setNamePlayer(namePlayer2, "Player 2"), "Blue", 1, 500);
    hideHTML();
    game.game(player1, player2);
};
function hideHTML() { hideF.hide(); }
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

/***/ "./src/modules/game/work-with-canvas/create.ts":
/*!*****************************************************!*\
  !*** ./src/modules/game/work-with-canvas/create.ts ***!
  \*****************************************************/
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

/***/ "./src/modules/game/work-with-canvas/draw.ts":
/*!***************************************************!*\
  !*** ./src/modules/game/work-with-canvas/draw.ts ***!
  \***************************************************/
/*! exports provided: CanvasDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasDraw", function() { return CanvasDraw; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./src/modules/game/work-with-canvas/create.ts");

var CanvasDraw = /** @class */ (function () {
    function CanvasDraw(canvasObj) {
        this.colorGreyRGB = "rgb(171, 139, 187)"; //"#ab8cbc"
        this.arrayBuiltBlock = new Array(300);
        this.counterForArrayBuiltBlock = 0;
        this.canvasCreate = new _create__WEBPACK_IMPORTED_MODULE_0__["CanvasCreate"]();
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

/***/ "./src/modules/player.ts":
/*!*******************************!*\
  !*** ./src/modules/player.ts ***!
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

/***/ "./src/modules/start/ux/css/main.css":
/*!*******************************************!*\
  !*** ./src/modules/start/ux/css/main.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/start/ux/css/players.css":
/*!**********************************************!*\
  !*** ./src/modules/start/ux/css/players.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/start/ux/scripts/hide-function.ts":
/*!*******************************************************!*\
  !*** ./src/modules/start/ux/scripts/hide-function.ts ***!
  \*******************************************************/
/*! exports provided: HideFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideFunction", function() { return HideFunction; });
var HideFunction = /** @class */ (function () {
    function HideFunction() {
    }
    HideFunction.prototype.hide = function () {
        var elementForHide1 = document.getElementById('startpage');
        elementForHide1.style.display = 'none';
        var elementForHide2 = document.getElementById('canvas');
        elementForHide2.style.display = 'block';
    };
    return HideFunction;
}());



/***/ }),

/***/ "./src/modules/start/write-names.ts":
/*!******************************************!*\
  !*** ./src/modules/start/write-names.ts ***!
  \******************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvVlMuanBnIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9jb250cm9sbGVyLW1haW4tbW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1N0YXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dhbWUvd29yay13aXRoLWNhbnZhcy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2FtZS93b3JrLXdpdGgtY2FudmFzL2RyYXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N0YXJ0L3V4L2Nzcy9tYWluLmNzcz9iMWE0Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N0YXJ0L3V4L2Nzcy9wbGF5ZXJzLmNzcz8zNTJlIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3N0YXJ0L3V4L3NjcmlwdHMvaGlkZS1mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zdGFydC93cml0ZS1uYW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3VCOzs7Ozs7Ozs7Ozs7O0FDWHhCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDc0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbW9kdWxlcy9TdGFydC50c1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIlZTLmpwZ1wiOyIsImltcG9ydCB7IENhbnZhc0RyYXcgfSBmcm9tIFwiLi4vbW9kdWxlcy9nYW1lL3dvcmstd2l0aC1jYW52YXMvZHJhd1wiO1xyXG52YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWUoY2FudmFzT2JqKSB7XHJcbiAgICAgICAgdGhpcy5mbGFnR2FtZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYW52YXNEcmF3ID0gbmV3IENhbnZhc0RyYXcoY2FudmFzT2JqKTtcclxuICAgIH1cclxuICAgIEdhbWUucHJvdG90eXBlLmdhbWUgPSBmdW5jdGlvbiAocGxheWVyMSwgcGxheWVyMikge1xyXG4gICAgICAgIGlmICh0aGlzLmZsYWdHYW1lID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxhZ0dhbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclBsYXllciA9IHBsYXllcjEuZ2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2xvclBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZsYWdHYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclBsYXllciA9IHBsYXllcjIuZ2V0Q29sb3IoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb2xvclBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuVGltZSgpO1xyXG4gICAgfTtcclxuICAgIEdhbWUucHJvdG90eXBlLnNldFBvc2l0aW9uQmxvY2tPbkZ1aWxkID0gZnVuY3Rpb24gKEtleUNvZGUpIHtcclxuICAgICAgICBzd2l0Y2ggKEtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzODogeyAvL3VwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuc2V0U2l6ZUJsb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuZHJhd0dyaWQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IHsgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzNzogeyAvL2xlZnRcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IHsgLy9kb3duXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuc2V0U2l6ZUJsb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc0RyYXcuZHJhd0dyaWQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTM6IHsgLy9lbnRlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNEcmF3LnNhdmVCbG9ja1RvQXJyYXkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzRHJhdy5kcmF3R3JpZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBHYW1lLnByb3RvdHlwZS5UaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vLi4uXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWU7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEdhbWUgfTtcclxuIiwiaW1wb3J0IHsgTmFtZVBsYXllcnMgfSBmcm9tIFwiLi9zdGFydC93cml0ZS1uYW1lc1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9jb250cm9sbGVyLW1haW4tbW9kdWxlXCI7XHJcbmltcG9ydCB7IEhpZGVGdW5jdGlvbiB9IGZyb20gXCIuL3N0YXJ0L3V4L3NjcmlwdHMvaGlkZS1mdW5jdGlvblwiO1xyXG5pbXBvcnQgXCIuL3N0YXJ0L3V4L2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuL3N0YXJ0L3V4L2Nzcy9wbGF5ZXJzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvaW1hZ2VzL1ZTLmpwZ1wiO1xyXG4vLy8tLS0tLS0tLS0tLS0tLS0tLS1TdGFydFBhZ2UtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIHBsYXllcjE7XHJcbnZhciBwbGF5ZXIyO1xyXG52YXIgaGlkZUYgPSBuZXcgSGlkZUZ1bmN0aW9uO1xyXG52YXIgY2FudmFzT2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1aWxkR2FtZScpLmdldENvbnRleHQoJzJkJyk7XHJcbnZhciBnYW1lID0gbmV3IEdhbWUoY2FudmFzT2JqKTtcclxudmFyIGNhbnZhc05vbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbmNhbnZhc05vbmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxudmFyIGJ1dHRvbldyaXRlTmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndyaXRlTmFtZXNcIik7XHJcbmJ1dHRvbldyaXRlTmFtZXMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBuYW1lUGxheWVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMVwiKS52YWx1ZTtcclxuICAgIHZhciBuYW1lUGxheWVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMlwiKS52YWx1ZTtcclxuICAgIHBsYXllcjEgPSBuZXcgUGxheWVyKE5hbWVQbGF5ZXJzLnNldE5hbWVQbGF5ZXIobmFtZVBsYXllcjEsIFwiUGxheWVyIDFcIiksIFwiUmVkXCIsIDEsIDUwMCk7XHJcbiAgICBwbGF5ZXIyID0gbmV3IFBsYXllcihOYW1lUGxheWVycy5zZXROYW1lUGxheWVyKG5hbWVQbGF5ZXIyLCBcIlBsYXllciAyXCIpLCBcIkJsdWVcIiwgMSwgNTAwKTtcclxuICAgIGhpZGVIVE1MKCk7XHJcbiAgICBnYW1lLmdhbWUocGxheWVyMSwgcGxheWVyMik7XHJcbn07XHJcbmZ1bmN0aW9uIGhpZGVIVE1MKCkgeyBoaWRlRi5oaWRlKCk7IH1cclxuLy8vLS0tLS0tLS0tLS0tLS0tLVdvcmtXaXRoQ2FudmFzLS0tLS0tLS0tLS0tLS0tLS0tXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKFsxMywgMzcsIDM4LCAzOSwgNDBdLmluZGV4T2YoZS5rZXlDb2RlKSA+IC0xKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59LCBmYWxzZSk7XHJcbmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBnYW1lLnNldFBvc2l0aW9uQmxvY2tPbkZ1aWxkKGUua2V5Q29kZSk7XHJcbn0pO1xyXG52YXIgYnV0dG9uQUEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFBXCIpO1xyXG5idXR0b25BQS5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2FtZS5nYW1lKHBsYXllcjEsIHBsYXllcjIpOyB9O1xyXG4iLCJ2YXIgQ2FudmFzQ3JlYXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzQ3JlYXRlKCkge1xyXG4gICAgfVxyXG4gICAgLy90ZW1wb3JhcnkgZnVuY3Rpb25cclxuICAgIENhbnZhc0NyZWF0ZS5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3REaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kRGljZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlKTtcclxuICAgIH07XHJcbiAgICBDYW52YXNDcmVhdGUucHJvdG90eXBlLnNldFNpemVCbG9ja0ZvckZ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5maXJzdERpY2UgPSAxOCAqIHRoaXMuZmlyc3REaWNlICsgMiAqICh0aGlzLmZpcnN0RGljZSAtIDEpO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kRGljZSA9IDE4ICogdGhpcy5zZWNvbmREaWNlICsgMiAqICh0aGlzLnNlY29uZERpY2UgLSAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlKTtcclxuICAgICAgICByZXR1cm4gW3RoaXMuZmlyc3REaWNlLCB0aGlzLnNlY29uZERpY2VdO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0NyZWF0ZS5wcm90b3R5cGUudHVyblNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZpcnN0RGljZTtcclxuICAgICAgICBmaXJzdERpY2UgPSB0aGlzLmZpcnN0RGljZTtcclxuICAgICAgICB0aGlzLmZpcnN0RGljZSA9IHRoaXMuc2Vjb25kRGljZTtcclxuICAgICAgICB0aGlzLnNlY29uZERpY2UgPSBmaXJzdERpY2U7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLmZpcnN0RGljZSwgdGhpcy5zZWNvbmREaWNlXTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FudmFzQ3JlYXRlO1xyXG59KCkpO1xyXG5leHBvcnQgeyBDYW52YXNDcmVhdGUgfTtcclxuIiwiaW1wb3J0IHsgQ2FudmFzQ3JlYXRlIH0gZnJvbSBcIi4vY3JlYXRlXCI7XHJcbnZhciBDYW52YXNEcmF3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2FudmFzRHJhdyhjYW52YXNPYmopIHtcclxuICAgICAgICB0aGlzLmNvbG9yR3JleVJHQiA9IFwicmdiKDE3MSwgMTM5LCAxODcpXCI7IC8vXCIjYWI4Y2JjXCJcclxuICAgICAgICB0aGlzLmFycmF5QnVpbHRCbG9jayA9IG5ldyBBcnJheSgzMDApO1xyXG4gICAgICAgIHRoaXMuY291bnRlckZvckFycmF5QnVpbHRCbG9jayA9IDA7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDcmVhdGUgPSBuZXcgQ2FudmFzQ3JlYXRlKCk7XHJcbiAgICAgICAgLy90ZW1wb3JhcnkgdmFyaWFibGVzXHJcbiAgICAgICAgdGhpcy5ib29sRm9yU3RhcnRMb2NhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMueCA9IDE7XHJcbiAgICAgICAgdGhpcy55ID0gNTAwO1xyXG4gICAgICAgIHRoaXMubGlzdFBpeGVsc0dyaWQgPSBuZXcgQXJyYXkoNTAwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFBpeGVsc0dyaWRbaV0gPSBuZXcgQXJyYXkoMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzAwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hcnJheUJ1aWx0QmxvY2tbaV0gPSBuZXcgQXJyYXkoNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqID0gY2FudmFzT2JqO1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqLnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvckdyZXlSR0I7XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFN0eWxlID0gXCJyZ2IoMTcxLCAzLCAzKVwiO1xyXG4gICAgICAgIHZhciBzaXplID0gdGhpcy5jYW52YXNDcmVhdGUuc2V0U2l6ZUJsb2NrRm9yRnVpbGQoKTtcclxuICAgICAgICB0aGlzLnhTaXplID0gc2l6ZVswXTtcclxuICAgICAgICB0aGlzLnlTaXplID0gc2l6ZVsxXTtcclxuICAgICAgICB0aGlzLmRyYXdHcmlkKCk7XHJcbiAgICB9XHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5kcmF3R3JpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc09iai5jbGVhclJlY3QoMCwgMCwgNTAwLCAxMDAwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAyNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLm1vdmVUbygwLCAyMCAqIGkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5saW5lVG8oMTAwMCwgMjAgKiBpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc09iai5tb3ZlVG8oMjAgKiBpLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmoubGluZVRvKDIwICogaSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW52YXNPYmouc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3QmxvY2tzV2l0aFNhdmVkQXJyYXkoKTtcclxuICAgICAgICB0aGlzLmRyYXdCbG9ja09uRnVpbGQoKTtcclxuICAgIH07XHJcbiAgICAvL25lZWQgdG8gYWRkIGFzeW5jXHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5nZXRQaXhlbHNXaXRoR3JpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTAwMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RQaXhlbHNHcmlkW2ldW2pdID0gdGhpcy5jYW52YXNPYmouZ2V0SW1hZ2VEYXRhKGksIGosIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQ2FudmFzRHJhdy5wcm90b3R5cGUuc2V0U2l6ZUJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaXplQmxvY2sgPSB0aGlzLmNhbnZhc0NyZWF0ZS50dXJuU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMueFNpemUgPSBzaXplQmxvY2tbMF07XHJcbiAgICAgICAgdGhpcy55U2l6ZSA9IHNpemVCbG9ja1sxXTtcclxuICAgIH07XHJcbiAgICBDYW52YXNEcmF3LnByb3RvdHlwZS5kcmF3QmxvY2tPbkZ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzT2JqLmZpbGxTdHlsZSA9IFwicmdiKDE3MSwgMywgMylcIjtcclxuICAgICAgICBpZiAodGhpcy5ib29sRm9yU3RhcnRMb2NhdGlvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNPYmouZmlsbFJlY3QodGhpcy54LCB0aGlzLnkgLSB0aGlzLnlTaXplIC0gMSwgdGhpcy54U2l6ZSwgdGhpcy55U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLnNhdmVCbG9ja1RvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJheUJ1aWx0QmxvY2tbdGhpcy5jb3VudGVyRm9yQXJyYXlCdWlsdEJsb2NrKytdID0gW3RoaXMueCwgdGhpcy55IC0gdGhpcy55U2l6ZSAtIDEsIHRoaXMueFNpemUsIHRoaXMueVNpemVdO1xyXG4gICAgfTtcclxuICAgIENhbnZhc0RyYXcucHJvdG90eXBlLmRyYXdCbG9ja3NXaXRoU2F2ZWRBcnJheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY291bnRlckZvckFycmF5QnVpbHRCbG9jazsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzT2JqLmZpbGxSZWN0KHRoaXMuYXJyYXlCdWlsdEJsb2NrW2ldWzBdLCB0aGlzLmFycmF5QnVpbHRCbG9ja1tpXVsxXSwgdGhpcy5hcnJheUJ1aWx0QmxvY2tbaV1bMl0sIHRoaXMuYXJyYXlCdWlsdEJsb2NrW2ldWzNdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENhbnZhc0RyYXc7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IENhbnZhc0RyYXcgfTtcclxuIiwidmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vYWRkIHN0YXJ0IHBvc2l0aW9uXHJcbiAgICBmdW5jdGlvbiBQbGF5ZXIobmFtZSwgY29sb3IsIHhJbml0aWFsTG9jYXRpb24sIHlJbml0aWFsTG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29pbnMgPSAxMjAwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLnhJbml0aWFsTG9jYXRpb24gPSB4SW5pdGlhbExvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMueUluaXRpYWxMb2NhdGlvbiA9IHlJbml0aWFsTG9jYXRpb247XHJcbiAgICB9XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZ2V0Q29pbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvaW5zO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuc2V0Q29pbnRzID0gZnVuY3Rpb24gKGNvaW5zKSB7XHJcbiAgICAgICAgdGhpcy5jb2lucyA9IGNvaW5zO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBsYXllciB9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgSGlkZUZ1bmN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSGlkZUZ1bmN0aW9uKCkge1xyXG4gICAgfVxyXG4gICAgSGlkZUZ1bmN0aW9uLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50Rm9ySGlkZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRwYWdlJyk7XHJcbiAgICAgICAgZWxlbWVudEZvckhpZGUxLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRGb3JIaWRlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgICAgICBlbGVtZW50Rm9ySGlkZTIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEhpZGVGdW5jdGlvbjtcclxufSgpKTtcclxuZXhwb3J0IHsgSGlkZUZ1bmN0aW9uIH07XHJcbiIsInZhciBOYW1lUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE5hbWVQbGF5ZXJzKCkge1xyXG4gICAgfVxyXG4gICAgTmFtZVBsYXllcnMuc2V0TmFtZVBsYXllciA9IGZ1bmN0aW9uIChuYW1lUGxheWVyLCBkZWZhdWx0TmFtZSkge1xyXG4gICAgICAgIGlmIChuYW1lUGxheWVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5hbWVQbGF5ZXIgPSBkZWZhdWx0TmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5hbWVQbGF5ZXI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE5hbWVQbGF5ZXJzO1xyXG59KCkpO1xyXG5leHBvcnQgeyBOYW1lUGxheWVycyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9