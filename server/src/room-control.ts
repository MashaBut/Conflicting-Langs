import { Room } from "./room";
import { Player } from "./player";
export class RoomControl {
    rooms = new Array<Room>();
    openRooms =  new Array<Room>();

    add(room: Room): void {
        this.rooms.push(room);
        this.openRooms.push(room);
    }

    pushToClient(): Array<Room> {
        return this.openRooms;
    }

    joinRoom(client: Player, idRoom: string): void {
        for (let room of this.openRooms) {
            if (room.id = idRoom) {
            //    this.openRooms.
            }
        }
        for (let room of this.rooms) {
            if (room.id = idRoom) {
                room.add(client);
            }
        }
    }
}