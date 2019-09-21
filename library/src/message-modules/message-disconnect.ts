import { MessageBase } from './message-base';
import { MessageType } from './message-type';

export class MessageDisconnect extends MessageBase {
    public connect: string;
}