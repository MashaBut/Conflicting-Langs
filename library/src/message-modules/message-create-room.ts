import { MessageBase } from "./message-base";
import { Room } from "../models/room";
import { MessageType } from "./message-type";

export class MessageCreateRoom extends MessageBase {
    public rooms: Array<Room>;
    public type = MessageType.CreateRoom;
}