export class Player {
    private name: string;
    private coins: number;
    private color: string;
    public firstMove: boolean;
    private xStart: number;
    private yStart: number;

    //add start position
    public constructor (name: string, color: string, xStart: number, yStart: number) {
        this.name = name;
        this.coins = 1200;
        this.color = color;
        this.firstMove = true;
        this.xStart = xStart;
        this.yStart = yStart;
    }
    public isFirstMove(): boolean {
        return this.firstMove;
    }

    public getColor(): string {
        return this.color;
    }

    public getCoints(): number {
        return this.coins;
    }

    public getName(): string {
        return this.name;
    }

    public getXCoordinate(): number {
        return this.xStart;
    }

    public getYCoordinate(): number {
        return this.yStart;
    }

    public setCoints(coins:number): void {
        this.coins = coins;
    }
}