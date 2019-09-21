import { Player } from "./player";

export class Room {
    public name: string;
    public id: string;
    public players: Map<number, string> = new Map();

    constructor(name: string, player: Player) {
        this.name = name;
        this.id = player.id;
        this.players.set(1, player.id);
    }

    public add(player: Player): void {
        this.players.set(2, player.id);
    }
}