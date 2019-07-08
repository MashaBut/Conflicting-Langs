import {Player} from "../Player";
export class NamePlayers {

    public setNamePlayers(namePlayer1:string,namePlayer2:string) {
        if(namePlayer1==="") {
            namePlayer1="Player 1";
        }
        var player1= new Player(namePlayer1,"Red",1,500);
        if(namePlayer2==="") {
            namePlayer2="Player 2";
        }
        player1.Draw();
        var player2= new Player(namePlayer2,"Blue",1000,1);
        player2.Draw();
    }
}