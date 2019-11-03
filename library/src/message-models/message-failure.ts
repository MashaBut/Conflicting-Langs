import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageFailure extends MessageBase {
    public type = MessageType.Failure;
}