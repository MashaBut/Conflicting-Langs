import { Room } from "./room";
import { MessageCreator } from "../../library/dist/message-creator";
import { Block } from "./game/block";
import { Calculation } from "./game/calculation";
import { Settings } from "../../library/dist";

export class EventHandling {
    messageCreator = new MessageCreator();
    calc = new Calculation();

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

    public gameStart(room: Room, sockets: Map<string, any>, clients: Map<string, string>, secondClientId: string): void {
        room.join(secondClientId);
        let name1 = clients.get(room.players[0]);
        let name2 = clients.get(room.players[1]);
        this.sendName(name1, name2, room.players[0], room.settings, room.setUpCurrentPlayerNumb, sockets);
        this.sendName(name1, name2, room.players[1], room.settings, room.setUpCurrentPlayerNumb, sockets);
    }

    private sendName(nameFisrtClient: any, nameSecondClient: any, idClient: string, settings: Settings, currentPlayer: number, sockets: Map<string, any>): void {
        sockets.get(idClient).send(JSON.stringify(this.messageCreator.createMessageSendInfoToPlayerRooms(nameFisrtClient, nameSecondClient, currentPlayer, settings)));
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
                        let msg = JSON.stringify(this.messageCreator.createMessageArrayOfPossibleBlockPositions(this.calc.arrayCurrentPosition));
                        room.players.forEach((key: string) => {
                            sockets.get(key).send(msg);
                        })
                    }
                    else {
                        this.changePlayerInCurrentRoom(id, rooms);
                        room.players.forEach((key: string) => {
                            sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageFailure()));
                        })
                    }
                }
                break;
            }
        }
    }

    public saveBlock(id: string, rooms: Array<Room>, block: Block, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                room.blocks.push(block);
                room.players.forEach((key: string) => {
                    sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageArrayOfFixedBlocks(room.blocks)));
                })
            }
        }
    }

    public rotateBlock(id: string, dices: number[], color: string, rooms: Array<Room>, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                this.calc.color = color;
                this.calc.сalculatePosition(dices, room.blocks);
                if (this.calc.arrayCurrentPosition.length != 0) {
                    let msg = JSON.stringify(this.messageCreator.createMessageArrayOfPossibleBlockPositions(this.calc.arrayCurrentPosition));
                    room.players.forEach((key: string) => {
                        sockets.get(key).send(msg);
                    })
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

    public sendDisconnect(id: string, rooms:Array<Room>,sockets: Map<string,any>):void {
        let numbPosition = 0 ;
        for(let room of rooms) {
            if(room.players[0] == id || room.players[1] == id) {
                room.players.forEach((key: string) => {
                    sockets.get(key).send(JSON.stringify(this.messageCreator.createMessageMoveToHollPage()));
                })
                rooms.splice(numbPosition,1);
            }
            numbPosition++;
        }
    }
}