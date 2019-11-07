import { MessageBase } from './message-base';
import { Settings } from '../models/settings';
import { MessageType } from "../message-type";

export class MessageSendInfoToPlayerRooms extends MessageBase {
    public firstPlayerName: string;
    public secondPlayerName: string;
    public settings: Settings;
    public currentPlayer: number;
    public type = MessageType.SendInfoToPlayerRooms;
    public picture: any;
}