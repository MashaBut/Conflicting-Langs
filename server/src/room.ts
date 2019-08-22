export class Room {
    public name: string;
    public countUsers: number;
    public fisrtClient: number = 0;
    public secondClient: number = 0;

    constructor(name: string, firstClient: number) {
        this.name = name;
        this.fisrtClient = firstClient;
        this.countUsers = 1;
        this.secondClient = 0;
    }
}