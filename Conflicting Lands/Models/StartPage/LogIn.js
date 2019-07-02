"use strict";
exports.__esModule = true;
var Player_1 = require("./Player");

function logIn() {
    var player1 = document.getElementById("player1").value;
    if (player1 == "") {
        player1 = "Player 1";
    }
    var gamer1 = new Player_1["default"](player1, "Red");
    gamer1.Draw();
    var player2 = document.getElementById("player2").value;
    if (player2 == "") {
        player2 = "Player 2";
    }
    var gamer2 = new Player_1["default"](player2, "Blue");
}