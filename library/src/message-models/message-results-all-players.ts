import { MessageBase } from './message-base';
import { MessageType } from "../message-type";

export class MessageResultsAllPlayers extends MessageBase {
    public results: Array<any>;
    public type = MessageType.ResultsAllPlayers;
}