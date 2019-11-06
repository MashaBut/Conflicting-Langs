import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageResultOfGame extends MessageBase {
    public area: number;
    public type =  MessageType.ResultOfGame;
}