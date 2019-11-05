import { Block } from "./game/block";
import { Settings } from "./settings";
import { settings } from "cluster";

export class Room {
    public id: string;
    public name: string;
    public creatorName: string;
    public players: Array<string> = new Array();
    public settings: Settings;
    public currentPlayerId: string;
    public setUpCurrentPlayerNumb: number;
    public blocks: Array<Array<string>>;
    public count: number = 0;

    constructor(name: string, id: string, creator: any) {
        this.name = name;
        this.id = id;
        this.creatorName = creator;
        this.players.push(id);
        this.setUpCurrentPlayerNumb = this.firstPlayerNumb();
    }

    public join(id: string): void {
        this.players.push(id);
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
        this.blocks = new Array<Array<string>>(this.settings.width);
        for (let i = 0; i < this.settings.height; i++) {
            this.blocks[i] = new Array<string>(this.settings.width).fill('');
        }
    }

    private firstPlayerNumb(): number {
        return Math.floor(Math.random() * 2);
    }
}