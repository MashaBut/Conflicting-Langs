import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageEventTossDice extends MessageBase {
    public color: string;
    public type = MessageType.EventTossDice;
}