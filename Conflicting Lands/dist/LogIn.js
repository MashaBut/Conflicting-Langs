//import zip = require("./ZipCodeValidator");
import Player from "./Player";
function logIn() {
    let player1 = document.getElementById("player1").value;
    if (player1 == "") {
        player1 = "Player 1";
    }
    var gamer1 = new Player(player1, "Red");
    //gamer1.Draw();
    let player2 = document.getElementById("player2").value;
    if (player2 == "") {
        player2 = "Player 2";
    }
    var gamer2 = new Player(player2, "Blue");
    console.log();
}
