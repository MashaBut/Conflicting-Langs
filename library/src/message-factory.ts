import { MessageType } from "./message-modules/message-type";
import { MessageSetName } from "./message-modules/message-set-name";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";
import { MessageJoinRoom } from "./message-modules/message-join-room";
import { MessageTossDice } from "./message-modules/message-toss-dice";
import { MessageKeyCode } from "./message-modules/message-key-code";
import { MessageDisconnect } from "./message-modules/message-disconnect";
import { MessageCreateRoom } from "./message-modules/message-create-room";
import { MessagePushNamesToRoom } from "./message-modules/message-push-names-to-room";

export class MessageFactory {
    public createMessageSetName(name: string): string {//+
        let message = new MessageSetName();
        message.name = name;
        message.type = MessageType.SetName;
        return JSON.stringify(message);
    }

    public createMessageSetNameRoom(name: string): string {//+
        let message = new MessageSetNameRoom();
        message.name = name;
        message.type = MessageType.SetNameRoom;
        return JSON.stringify(message);
    }

    public createMessageCreateRoom(rooms: any) {//+
        let message = new MessageCreateRoom();
        message.rooms = rooms;
        message.type = MessageType.CreateRoom;
        return JSON.stringify(message);
    }


    public createMessageJoinRoom(idRoom: string): string {//+
        let message = new MessageJoinRoom();
        message.id = idRoom;
        message.type = MessageType.JoinRoom;
        return JSON.stringify(message);
    }

    public createMessagePushNamesToRoom(name1: string, name2: string): string {
        let message = new MessagePushNamesToRoom();
        message.name1 = name1;
        message.name2 = name2;
        message.type = MessageType.PushNamesToRoom;
        return JSON.stringify(message);
    }

    public createMessageTossDice(dices: number[]): string {
        let message = new MessageTossDice();
        message.dices = dices;
        message.type = MessageType.TossDice;
        return JSON.stringify(message);
    }

    public createMessageKeyCode(e: KeyboardEvent): string {
        let message = new MessageKeyCode();
        message.e = e.keyCode;
        message.type = MessageType.KeyCode;
        return JSON.stringify(message);
    }

    public createDisconnect(report: string): string {
        let message = new MessageDisconnect();
        message.connect = report;
        message.type = MessageType.Disconnect;
        return JSON.stringify(message);
    }
}