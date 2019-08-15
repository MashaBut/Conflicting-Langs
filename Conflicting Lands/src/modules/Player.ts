export class Player {
    private name: string;
    private coins: number;
    private color: string;
    private firstMove: boolean;
    public soundsForPlayer: boolean;
    private xStart: number;
    private yStart: number;
    private occupiedArea: number;
    private lifes:number;

    public constructor(name: string, color: string, xStart: number, yStart: number) {
        this.name = name;
        this.coins = 1200;
        this.color = color;
        this.firstMove = true;
        this.soundsForPlayer = true;
        this.xStart = xStart;
        this.yStart = yStart;
        this.occupiedArea = 0;
        this.lifes = 8;
    }

    public isSoundsForPlayer(): boolean {
        return this.soundsForPlayer;
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
    public getLives(): number {
        return this.lifes;
    }

    public getOccupiedArea(): number {
        return this.occupiedArea;
    }

    public setCoints(coins: number): void {
        this.coins = coins;
    }

    public setLives():void {
        this.lifes-=1;
    }

    public setOccupiedArea(occupiedArea: number): void {
        this.occupiedArea = occupiedArea;
    }

    public setFirstMove(flag: boolean): void {
        this.firstMove = flag;
    }
}