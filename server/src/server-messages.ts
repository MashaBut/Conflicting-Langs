import { Room } from "./room";
import { MessageFactory } from "../../library/dist/message-factory";
import { Block } from "./game/block";
import { Calculation } from "./game/calculation";

export class ServerMessages {
    messageFactory = new MessageFactory();
    calc = new Calculation();
    public sendRooms(rooms: Array<Room>, sockets: Map<string, any>): void {
        let openRooms = new Array<Room>();
        let msg: string;
        let ws: any;
        rooms.forEach((room: Room) => {
            if (room.players.length === 1) {
                openRooms.push(room);
            }
        });
        msg = this.messageFactory.createMessageCreateRoom(openRooms);
        sockets.forEach((value: string, key: string, socket: Map<string, string>) => {
            ws = socket.get(key);
            ws.send(msg);
        })
    }

    public gameStart(rooms: Array<Room>, sockets: Map<string, any>, clients: Map<string, string>, secondClientId: string, roomId: string): void {
        for (let room of rooms) {
            if (room.id === roomId) {
                room.join(secondClientId);
                let name1 = clients.get(room.players[0]);
                let name2 = clients.get(room.players[1]);
                this.sendName(name1, name2, room.players[0], room.settings, room.setUpCurrentPlayerNumb, sockets);
                this.sendName(name1, name2, room.players[1], room.settings, room.setUpCurrentPlayerNumb, sockets);
                break;
            }
        }
    }

    private sendName(nameFisrtClient: any, nameSecondClient: any, idClient: string, settings: Array<any>, currentPlayer: number, sockets: Map<string, any>): void {
        sockets.get(idClient).send(this.messageFactory.createMessagePushNamesToRoom(nameFisrtClient, nameSecondClient, currentPlayer, settings));
    }

    public sendTossDice(id: string, rooms: Array<Room>, sockets: Map<string, any>, color: string): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                let dices: number[] = [this.generationNumber(), this.generationNumber()];
                let msg = this.messageFactory.createMessageTossDice(dices);
                room.players.forEach((key: string) => {
                    sockets.get(key).send(msg);
                })
                if (room.blocks.length >= 2) {
                    this.calc.color = color;
                    this.calc.CalculatePosition(dices, room.blocks);
                    if (this.calc.arrayCurrentPosition.length != 0) {
                        let msg = this.messageFactory.createMessageArrayBlocks(this.calc.arrayCurrentPosition);
                        room.players.forEach((key: string) => {
                            sockets.get(key).send(msg);
                        })
                    }
                }
                break;
            }
        }
    }
    public sendArrayBlockToClient(id: string, rooms: Array<Room>, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                let msg = this.messageFactory.createMessageArrayBlocks(this.calc.arrayCurrentPosition);
                room.players.forEach((key: string) => {
                    sockets.get(key).send(msg);
                })
                break;
            }
        }
    }

    public saveBlock(id: string, rooms: Array<Room>, block: Block): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                room.saveBlock(block);
                console.log(block);
                break;
            }
        }
    }

    private generationNumber(): number {
        return Math.floor((Math.random() * 6) + 1);
    }

    public changePlayerInCurrentRoom(id: string, rooms: Array<Room>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                room.setUpCurrentPlayer();
                break;
            }
        }
    }

    public sendEvent(id: string, event: string, rooms: Array<Room>, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (room.isCurrentPlayer() === id) {
                room.players.forEach((key: string) => {
                    sockets.get(key).send(this.messageFactory.createMessageEvent(event));
                })
                if ("setUpBlock" == event) {
                    this.changePlayerInCurrentRoom(id, rooms);
                }
                break;
            }
        }
    }

    public setLines(vertical: number, horizontal: number): void {
        this.calc.setLines(vertical, horizontal);
    }
}