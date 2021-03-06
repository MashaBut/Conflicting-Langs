import { Room } from "./room";
import { MessageCreator } from "../../library/dist/message-creator";
import { Block } from "../../library/dist";
import { Calculation } from "../../library/dist";
import { Settings } from "../../library/dist";
import { Result } from "./result";

export class EventHandling {
    messageCreator = new MessageCreator();
    calc = new Calculation();

    public sendToken(id: string, sockets: Map<string, any>): void {
        sockets.get(id).send(JSON.stringify(this.messageCreator.createMessageToken("token")));
    }

    public sendRooms(rooms: Array<Room>, sockets: Map<string, any>): void {
        let openRooms: any = new Array<Room>();
        let msg: string;
        let ws: any;
        rooms.forEach((room: Room) => {
            if (room.players.length === 1) {
                openRooms.push(room);
            }
        });
        msg = JSON.stringify(this.messageCreator.createMessageCreateRoom(openRooms));
        sockets.forEach((value: string, key: string, socket: Map<string, string>) => {
            ws = socket.get(key);
            ws.send(msg);
        })
    }

    public gameStart(room: Room, sockets: Map<string, any>, clients: Map<string, string>, secondClientId: string, picture: any): void {
        room.join(secondClientId, picture);
        let name1 = clients.get(room.players[0]);
        let name2 = clients.get(room.players[1]);
        this.sendName(name1, name2, room.players[0], room.picture, room.settings, room.setUpCurrentPlayerNumb, sockets);
        this.sendName(name1, name2, room.players[1], room.picture, room.settings, room.setUpCurrentPlayerNumb, sockets);
    }

    private sendName(nameFisrtClient: any, nameSecondClient: any, idClient: string, picture: any, settings: Settings, currentPlayer: number, sockets: Map<string, any>): void {
        sockets.get(idClient).send(JSON.stringify(this.messageCreator.createMessageSendInfoToPlayerRooms(nameFisrtClient, nameSecondClient, currentPlayer, settings, picture)));
    }

    public sendTossDice(id: string, rooms: Array<Room>, sockets: Map<string, any>, color: string): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                let dices: number[] = [this.generationNumber(), this.generationNumber()];
                let msg = JSON.stringify(this.messageCreator.createMessageSendDice(dices));
                room.players.forEach((key: string) => {
                    sockets.get(key).send(msg);
                })
                if (room.blocks.length >= 2) {
                    this.calc.color = color;
                    this.calc.сalculatePosition(dices, room.blocks);
                    if (this.calc.arrayCurrentPosition.length != 0) {
                        room.currentBlocks = this.calc.arrayCurrentPosition;
                        console.log("Position current on server");
                        console.log(room.currentBlocks);
                    }
                    else {
                        this.changePlayerInCurrentRoom(id, rooms);
                        room.players.forEach((key: string) => {
                            sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageFailure()));
                            if (key == id) {
                                sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageEoorForPosition()));
                            }
                        })
                    }
                }
                break;
            }
        }
    }

    public positionCheck(id: string, rooms: Array<Room>, block: Block, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                for (let position of room.currentBlocks) {
                    if (position.x == block.x && position.y == block.y && position.width == block.width && position.height == block.height && position.color == block.color) {
                        room.players.forEach((key: string) => {
                            sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageIsPosition()));
                        })
                    }
                }
            }
        }
    }

    public saveBlock(id: string, rooms: Array<Room>, block: Block, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                room.blocks.push(block);
            }
            console.log("all blocks saved");
            console.log(room.blocks);
        }
    }

    public rotateBlock(id: string, dices: number[], color: string, rooms: Array<Room>, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                this.calc.color = color;
                this.calc.сalculatePosition(dices, room.blocks);
                if (this.calc.arrayCurrentPosition.length != 0) {
                    room.currentBlocks = this.calc.arrayCurrentPosition;
                }
            }
        }
    }

    private generationNumber(): number {
        return Math.floor((Math.random() * 6) + 1);
    }

    public changePlayerInCurrentRoom(id: string, rooms: Array<Room>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                room.currentPlayerId = room.setUpCurrentPlayer();
                break;
            }
        }
    }

    public sendEvent(id: string, event: string, rooms: Array<Room>, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (room.isCurrentPlayer() === id) {
                room.players.forEach((key: string) => {
                    sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageGameActionEvents(event)));
                })
                if ("setUpBlock" == event) {
                    this.changePlayerInCurrentRoom(id, rooms);
                }
            }
        }
    }

    public setLines(vertical: number, horizontal: number): void {
        this.calc.setLines(vertical, horizontal);
    }

    public sendDisconnect(id: string, rooms: Array<Room>, sockets: Map<string, any>): void {
        let numbPosition = 0;
        for (let room of rooms) {
            if (room.players[0] == id || room.players[1] == id) {
                room.players.forEach((key: string) => {
                    sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageMoveToHollPage()));
                })
                rooms.splice(numbPosition, 1);
            }
            numbPosition++;
        }
    }

    public setResultOfGame(id: string, rooms: Array<Room>, sockets: Map<string, any>): void {
        let numbPosition = 0;
        for (let room of rooms) {
            if (room.isCurrentPlayer() === id) {
                setTimeout(() => {
                    room.players.forEach((key: string) => {
                        sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageMoveToHollPage()));
                    })
                    rooms.splice(numbPosition, 1);
                }, 2000);
            }
            numbPosition++;
        }
    }

    public setResult(id: string, rooms: Array<Room>, area1: number, area2: number, results: Array<Result>, clients: Map<string, string>, sockets: Map<string, any>): void {
        let a: any;
        for (let room of rooms) {
            if (room.isCurrentPlayer() === id) {
                if (room.players[0] == id) {
                    let now = new Date().toLocaleString();
                    let r = new Result();
                    a = clients.get(id);
                    r.name = a;
                    r.result = area1;
                    r.isWinner = "winner";
                    r.dateOfDate = now;
                    results.push(r);

                    r = new Result();
                    a = clients.get(room.players[1]);
                    r.name = a;
                    r.result = area2;
                    r.isWinner = "loser";
                    r.dateOfDate = now;
                    results.push(r);
                }
                if (room.players.length > 1) {
                    if (room.players[1] == id) {
                        let now = new Date().toLocaleString();
                        let r = new Result();
                        a = clients.get(id);
                        r.name = a;
                        r.result = area1;
                        r.isWinner = "winner";
                        r.dateOfDate = now;
                        results.push(r);
                        r = new Result();
                        a = clients.get(room.players[0]);
                        r.name = a;
                        r.result = area2;
                        r.isWinner = "loser";
                        r.dateOfDate = now;
                        results.push(r);
                    }
                }
            }
        }
        let message = JSON.stringify(this.messageCreator.createMessageResultsAllPlayers(results));
        sockets.forEach((value: string, key: string, socket: Map<string, string>) => {
            let ws:any = socket.get(key);
            ws.send(message);
        })
    }
}