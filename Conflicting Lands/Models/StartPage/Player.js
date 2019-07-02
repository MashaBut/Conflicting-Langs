"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(Name, Color) {
        this.name = Name;
        this.coins = 1200;
        this.color = Color;
    }
    Player.prototype.Draw = function () {
        console.log(this.name);
    };
    return Player;
}());
exports["default"] = Player;
