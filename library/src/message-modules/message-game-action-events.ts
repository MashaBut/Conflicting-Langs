import { MessageBase } from './message-base';
import { MessageType } from "./message-type";

export class MessageGameActionEvents extends MessageBase {
    public event: string;
    public type = MessageType.GameActionEvents;
}