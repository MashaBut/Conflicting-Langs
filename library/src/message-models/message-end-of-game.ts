import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageEndOfGame extends MessageBase {
    public areaOfTheFirst: number;
    public areaOfTheSecond: number;
    public type = MessageType.EndOfGame;
}