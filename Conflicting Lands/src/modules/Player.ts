export class Player {
    private name:string;
    private coins:number;
    private color:any;
    private xInitialLocation:number;
    private yInitialLocation:number;

    //add start position
    public constructor (name:string,color:any,xInitialLocation:number,yInitialLocation:number) {
        this.name=name;
        this.coins=1200;
        this.color=color;
        this.xInitialLocation=xInitialLocation;
        this.yInitialLocation=yInitialLocation;
    }

    public getColor():string {
        return this.color;
    }

    public getCoints():number {
        return this.coins;
    }

    public getName():string {
        return this.name;
    }

    public setCoints(coins:number):void {
        this.coins=coins;
    }
}