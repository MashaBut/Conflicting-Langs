export class Player {
    private name:string;
    private coins:number;
    private color:any;
    private firstElementonFuild:boolean;
    private xInitialLocation:number;
    private yInitialLocation:number;

    //add start position
    public constructor (name:string,color:any,xInitialLocation,yInitialLocation){
        this.name=name;
        this.coins=1200;
        this.color=color;
        this.firstElementonFuild=false;
        this.xInitialLocation=xInitialLocation;
        this.yInitialLocation=yInitialLocation;
    }
    
    public Draw():void {
        console.log(this.name);
    }
}