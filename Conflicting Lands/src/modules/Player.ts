export class Player {
    private name:string;
    private coins:number;
    private color:any;
    private xInitialLocation:number;
    private yInitialLocation:number;

    //add start position
    public constructor (name:string,color:any,xInitialLocation:number,yInitialLocation:number){
        this.name=name;
        this.coins=1200;
        this.color=color;
        this.xInitialLocation=xInitialLocation;
        this.yInitialLocation=yInitialLocation;
    }

    public getColor() {
        return this.color;
    }

    public getCoints() {
        return this.coins;
    }

    public getName() {
        return this.name;
    }

    public setCoints(coins:number) {
        this.coins=coins;
    }
}