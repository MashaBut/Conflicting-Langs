import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageToken extends MessageBase {
    public type = MessageType.Token;
    public token: string;
}