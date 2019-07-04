interface ModelPlayer {
    name:string;
    coins: number;
    color:string;
}

export default class Player implements ModelPlayer  {
    name:string;
    coins:number;
    color:string;
    constructor (name:string,color:string){
        this.name=name;
        this.coins=1200;
        this.color=color;
    }
    Draw():void {
        console.log(this.name);
    }
}