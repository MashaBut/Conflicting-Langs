import { MessageBase } from "./message-base";
import { Room } from "../assistants/room";

export class MessageCreateRoom extends MessageBase {
    public rooms: Array<Room>;
}