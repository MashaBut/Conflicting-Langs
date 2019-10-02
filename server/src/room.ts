export class Room {
    public name: string;
    public id: string;
    public players: Map<number, string> = new Map();
    private currentPlayer: string;
    private numb: number = 2;

    constructor(name: string, id: string) {
        this.name = name;
        this.id = id;
        this.players.set(1, id);
    }

    public add(id: string): void {
        this.players.set(2, id);
    }

    public isCurrentPlayer(): string {
        return this.currentPlayer;
    }

    public setUpCurrentPlayer(): void {
        this.numb == 2 ? this.numb = 1 : this.numb = 2;
        this.currentPlayer = String(this.players.get(this.numb));
    }
}