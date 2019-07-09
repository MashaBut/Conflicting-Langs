export class NamePlayers {
    public static setNamePlayer(namePlayer:string,defaultName:string):string {
        if(namePlayer==="") {
            namePlayer=defaultName;
        }
        return namePlayer;
    }
}