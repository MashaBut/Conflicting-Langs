import { MessageBase } from './message-base';
import { MessageType } from "./message-type";

export class MessageBlockReversalEvent extends MessageBase {
    public dices: number[];
    public color: string;
    public type = MessageType.BlockReversalEvent;
}