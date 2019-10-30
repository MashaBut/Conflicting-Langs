import { MessageType } from "./message-type";
import { MessageBase } from './message-base';

export class MessageSendDice extends MessageBase {
    public dices: number[];
    public type = MessageType.SendDice;
}