import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageResultOfGame extends MessageBase {
    public area1: number;
    public area2: number;
    public type =  MessageType.ResultOfGame;
}