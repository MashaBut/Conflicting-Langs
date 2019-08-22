export class Client {
    public id: number;
    public name: string;
    public nameRoom: string;

    constructor(id: number) {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setNameRoom(nameRoom: string): void {
        this.nameRoom = nameRoom;
    }
}