import { MessageType } from "./message-modules/message-type";
import { MessageSetName } from "./message-modules/message-set-name";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";
import { MessageJoinRoom } from "./message-modules/message-join-room";
import { MessageTossDice } from "./message-modules/message-toss-dice";
import { MessageEvent } from "./message-modules/message-event";
import { MessageDisconnect } from "./message-modules/message-disconnect";
import { MessageCreateRoom } from "./message-modules/message-create-room";
import { MessagePushNamesToRoom } from "./message-modules/message-push-names-to-room";
import { MessageEventTossDice } from "./message-modules/message-event-toos-dice";
import { MessageChangePlayer } from "./message-modules/message-change-player";
import { MessageMoveToHollPage } from "./message-modules/message-move-to-holl-page";
import { MessageBlock } from "./message-modules/message-block";
import { MessageLinesFuild } from "./message-modules/message-lines-fuild";
import { MessageArrayBlocks } from "./message-modules/message-array-blocks";
import { MessageRotateBlock } from "./message-modules/message-rotate-block";
import { MessageFailure } from "./message-modules/message-failure";
import { MessageArrraySaveBlocks } from "./message-modules/message-array-save-blocks";
export class MessageFactory {
    public createMessageSetName(name: string): string {//+
        let message = new MessageSetName();
        message.name = name;
        message.type = MessageType.SetName;
        return JSON.stringify(message);
    }

    public createMessageSetNameRoom(name: string, properties: Array<any>): string {//+
        let message = new MessageSetNameRoom();
        message.name = name;
        message.properties = properties;
        message.type = MessageType.SetNameRoom;
        return JSON.stringify(message);
    }

    public createMessageCreateRoom(rooms: Array<Object>) {//+
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

    public createMessagePushNamesToRoom(name1: string, name2: string, currentPlayer: number, settings: Array<any>): string {//+
        let message = new MessagePushNamesToRoom();
        message.name1 = name1;
        message.name2 = name2;
        message.settings = settings;
        message.currentPlayer = currentPlayer;
        message.type = MessageType.PushNamesToRoom;
        return JSON.stringify(message);
    }

    public createMessageTossDice(dices: number[]): string {//+
        let message = new MessageTossDice();
        message.dices = dices;
        message.type = MessageType.TossDice;
        return JSON.stringify(message);
    }

    public createMessageEvent(event: string): string {//+
        let message = new MessageEvent();
        message.event = event;
        message.type = MessageType.Event;
        return JSON.stringify(message);
    }

    public createMessageEventTossDice(color: string): string {//+
        let message = new MessageEventTossDice();
        message.type = MessageType.EventTossDice;
        message.color = color;
        return JSON.stringify(message);
    }

    public createMessageChangePlayer(): string {//+
        let message = new MessageChangePlayer();
        message.type = MessageType.ChangePlayer;
        return JSON.stringify(message);
    }

    public createMessageMoveToHollPage(): string {
        let message = new MessageMoveToHollPage();
        message.type = MessageType.MoveToHollPage;
        return JSON.stringify(message);
    }

    public createMessageDisconnect(): string {
        let message = new MessageDisconnect();
        message.type = MessageType.Disconnect;
        return JSON.stringify(message);
    }

    public createMessageBlock(block: any): string {
        let message = new MessageBlock();
        message.block = block;
        message.type = MessageType.Block;
        return JSON.stringify(message);
    }

    public createMessageLinesFuild(v: number, h: number): string {
        let message = new MessageLinesFuild();
        message.type = MessageType.LinesFuild;
        message.vertical = v;
        message.horizontal = h;
        return JSON.stringify(message);
    }

    public createMessageArrayBlocks(blocks: object[]): string {
        let message = new MessageArrayBlocks();
        message.type = MessageType.ArrayBlocks;
        message.blocks = blocks;
        return JSON.stringify(message);
    }

    public createMessageRotateBlock(dices: number[], color: string): string {
        let message = new MessageRotateBlock();
        message.type = MessageType.RotateBlock;
        message.dices = dices;
        message.color = color;
        return JSON.stringify(message);
    }

    public createMessageFailure(): string {
        let message = new MessageFailure();
        message.type = MessageType.Failure;
        return JSON.stringify(message);
    }

    public createMessageArraySaveBlocks(blocks: Array<object>): string {
        let message = new MessageArrraySaveBlocks();
        message.type = MessageType.ArraySaveBlocks;
        message.blocks = blocks;
        return JSON.stringify(message);
    }
}