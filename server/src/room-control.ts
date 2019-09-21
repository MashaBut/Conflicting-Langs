import { Room } from "./room";
export class RoomControl {
    rooms = new Array<Room>();

    add(room: Room): void {
        this.rooms.push(room);
    }

    pushToClient():Array<Room> {
        return this.rooms;
    }
    
}