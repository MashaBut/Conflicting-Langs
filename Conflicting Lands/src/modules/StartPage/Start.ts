import Player from "../Player";
function setNamePlayers() {
        let player1:string= (<HTMLInputElement> document.getElementById("player1")).value;
        if(player1=="") {
            player1="Player 1";
        }
        var gamer1= new Player(player1,"Red");

        let player2:string= (<HTMLInputElement> document.getElementById("player2")).value;
        if(player2=="") {
           player2="Player 2";
        }
       var gamer2= new Player(player2,"Blue");
}
window["namePlayers"]=setNamePlayers;
