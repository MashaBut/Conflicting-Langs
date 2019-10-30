import { MessageBase } from './message-base';
import { Settings } from '../assistants/settings';

export class MessageSendInfoToPlayerRooms extends MessageBase {
    public firstPlayerName: string;
    public secondPlayerName: string;
    public settings: Settings;
    public currentPlayer: number;
}