import { Block } from "../../library/dist/index";
import { Settings } from "../../library/dist/index";

export class Room {
    public id: string;
    public name: string;
    public creatorName: string;
    public players: Array<string> = new Array();
    public settings: Settings;
    public currentPlayerId: string;
    public setUpCurrentPlayerNumb: number;
    public blocks = new Array<Block>();
    public currentBlocks = new Array<Block>();
    public picture = new Array<string>();

    constructor(name: string, id: string,picture:any, creator: any) {
        this.name = name;
        this.id = id;
        this.creatorName = creator;
        this.players.push(id);
        console.log(picture);
        this.picture.push(picture);
        this.setUpCurrentPlayerNumb = this.firstPlayerNumb();
    }

    public join(id: string,picture:any): void {
        this.players.push(id);
        this.picture.push(picture);
        this.currentPlayerId = this.setUpCurrentPlayer();
    }

    public isCurrentPlayer(): string {
        return this.currentPlayerId;
    }

    public setUpCurrentPlayer(): string {
        this.setUpCurrentPlayerNumb == 1 ? this.setUpCurrentPlayerNumb = 0 : this.setUpCurrentPlayerNumb = 1;
        return this.players[this.setUpCurrentPlayerNumb];
    }

    public settingsRoom(settings: Settings): void {
        this.settings = settings;
    }

    private firstPlayerNumb(): number {
        return Math.floor(Math.random() * 2);
    }
}