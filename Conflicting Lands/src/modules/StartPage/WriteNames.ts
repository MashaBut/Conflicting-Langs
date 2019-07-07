import Player from "../Player";
export default function setNamePlayers(player1:string,player2:string) {
    if(player1=="") {
        player1="Player 1";
    }
    var gamer1= new Player(player1,"Red");
    if(player2=="") {
        player2="Player 2";
    }
    var gamer2= new Player(player2,"Blue");
}
