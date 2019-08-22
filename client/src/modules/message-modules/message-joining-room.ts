import { MessageBase } from './message-base';

export class MessageJoiningRoom extends MessageBase {
    public nameRoom: string;
    public client : string;
}