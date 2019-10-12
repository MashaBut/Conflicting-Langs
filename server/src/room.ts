export class Room {
    public currentPlayerId: string;
    public setUpCurrentPlayerNumb: number;
    public name: string;
    public id: string;
    public creator: string;
    public players: Array<string> = new Array();
    public settings: Array<any> = new Array();

    constructor(name: string, id: string, creator: any) {
        this.name = name;
        this.id = id;
        this.creator = creator;
        this.players.push(id);
        this.firstPlayerNumb();
    }

    public join(id: string): void {
        this.players.push(id);
        this.setUpCurrentPlayer();
    }

    public isCurrentPlayer(): string {
        return this.currentPlayerId;
    }

    public setUpCurrentPlayer(): void {
        this.setUpCurrentPlayerNumb == 1 ? this.setUpCurrentPlayerNumb = 0 : this.setUpCurrentPlayerNumb = 1;
        this.currentPlayerId = this.players[this.setUpCurrentPlayerNumb];
    }

    public settingsRoom(properties: Array<any>): void {
        this.settings = properties;
    }

    private firstPlayerNumb(): void {
        this.setUpCurrentPlayerNumb = Math.floor(Math.random() * 2);
    }
}