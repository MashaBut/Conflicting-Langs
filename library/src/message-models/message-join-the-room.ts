import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageJoinTheRoom extends MessageBase {
    public id: string;
    public type = MessageType.JoinTheRoom;
}