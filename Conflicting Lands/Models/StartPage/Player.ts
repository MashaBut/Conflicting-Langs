interface ModelPlayer {
    name:string;
    coins: number;
    color:string;
}

export default class Player  {//implements ModelPlayer
    name:string;
    coins:number;
    color:string;
    constructor (Name:string,Color:string){
        this.name=Name;
        this.coins=1200;
        this.color=Color;
    }
    Draw():void {
        console.log(this.name);
    }
}