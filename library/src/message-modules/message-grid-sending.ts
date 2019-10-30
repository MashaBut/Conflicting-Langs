import { MessageBase } from './message-base';
import { MessageType } from "./message-type";

export class MessageGridSending extends MessageBase {
    public verticalLines: number;
    public horizontalLines: number;
    public type = MessageType.GridSending;
}