import { Room } from "./room";
import { MessageFactory } from "../../library/dist/message-factory";

export class ServerMessages {
    messageFactory = new MessageFactory();

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

    public sendTossDice(id: string, rooms: Array<Room>, sockets: Map<string, any>): void {
        for (let room of rooms) {
            if (id === room.isCurrentPlayer()) {
                let msg = this.messageFactory.createMessageTossDice([this.generationNumber(), this.generationNumber()]);
                room.players.forEach((key: string) => {
                    sockets.get(key).send(msg);
                })
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
                break;
            }
        }
    }
}