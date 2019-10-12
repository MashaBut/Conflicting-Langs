import { MessageBase } from './message-base';
export class MessagePushNamesToRoom extends MessageBase {
    public name1: string;
    public name2: string;
    public settings: Array<any>;
    public currentPlayer: number;
}