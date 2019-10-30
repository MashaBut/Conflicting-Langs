import { MessageBase } from "./message-base";
import { Settings } from "../models/settings";
import { MessageType } from "./message-type";

export class MessageSetNameRoom extends MessageBase {
    public name: string;
    public settings: Settings;
    public type = MessageType.SetNameRoom;
}