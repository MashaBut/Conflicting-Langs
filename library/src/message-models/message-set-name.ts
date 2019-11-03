import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageSetName extends MessageBase {
    public name: string;
    public type = MessageType.SetName;
}