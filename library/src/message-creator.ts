import { MessageSetName } from "./message-models/message-set-name";
import { MessageSetNameRoom } from "./message-models/message-set-name-room";
import { MessageJoinTheRoom } from "./message-models/message-join-the-room";
import { MessageSendDice } from "./message-models/message-send-dice";
import { MessageGameActionEvents } from "./message-models/message-game-action-events";
import { MessageCreateRoom } from "./message-models/message-create-room";
import { MessageSendInfoToPlayerRooms } from "./message-models/message-send-info-to-player-rooms";
import { MessageEventTossDice } from "./message-models/message-event-toss-dice";
import { MessageMoveToHollPage } from "./message-models/message-move-to-holl-page";
import { MessageSaveBlock } from "./message-models/message-save-block";
import { MessageGridSending } from "./message-models/message-grid-sending";
import { MessageBlockReversalEvent } from "./message-models/message-block-reversal-event";
import { MessageFailure } from "./message-models/message-failure";
import { MessagePositionCheck } from "./message-models/message-position-check";
import { MessageResultOfGame } from "./message-models/message-result-of-game";

import { Settings } from "./models/settings";
import { Room } from "./models/room";
import { Block } from "./models/block";
import { MessageBase } from "./message-models/message-base";
import { MessageType } from "./message-type";



export class MessageCreator {

    public createMessaageRunTimer(): MessageBase {
        let message = new MessageBase();
        message.type = MessageType.RunTimer;
        return message;
    }

    public createMessageStopTimer(): MessageBase {
        let message = new MessageBase();
        message.type = MessageType.StopTimer;
        return message;
    }

    public createMessageResultOfGame(area: number): MessageResultOfGame {
        let message = new MessageResultOfGame();
        message.area = area;
        return message;
    }

    public createMessagePositionCheck(block: Block): MessagePositionCheck {
        let message = new MessagePositionCheck();
        message.block = block;
        return message;
    }

    public createMessageSetName(name: string): MessageSetName {
        let message = new MessageSetName();
        message.name = name;
        return message;
    }

    public createMessageSetNameRoom(name: string, settings: Settings): MessageSetNameRoom {
        let message = new MessageSetNameRoom();
        message.name = name;
        message.settings = settings;
        return message;
    }

    public createMessageCreateRoom(rooms: Array<Room>): MessageCreateRoom {
        let message = new MessageCreateRoom();
        message.rooms = rooms;
        return message;
    }

    public createMessageJoinTheRoom(idRoom: string): MessageJoinTheRoom {
        let message = new MessageJoinTheRoom();
        message.id = idRoom;
        return message;
    }

    public createMessageSendInfoToPlayerRooms(firstPlayerName: string, secondPlayerName: string, currentPlayer: number, settings: Settings): MessageSendInfoToPlayerRooms {
        let message = new MessageSendInfoToPlayerRooms();
        message.firstPlayerName = firstPlayerName;
        message.secondPlayerName = secondPlayerName;
        message.settings = settings;
        message.currentPlayer = currentPlayer;
        return message;
    }

    public createMessageSendDice(dices: number[]): MessageSendDice {
        let message = new MessageSendDice();
        message.dices = dices;
        return message;
    }

    public createMessageGameActionEvents(event: string): MessageGameActionEvents {
        let message = new MessageGameActionEvents();
        message.event = event;
        return message;
    }

    public createMessageEventTossDice(color: string): MessageEventTossDice {
        let message = new MessageEventTossDice();
        message.color = color;
        return message;
    }

    public createMessageMoveToHollPage(): MessageBase {
        let message = new MessageMoveToHollPage();
        return message;
    }

    public createMessageSaveBlock(block: Block): MessageSaveBlock {
        let message = new MessageSaveBlock();
        message.block = block;
        return message;
    }

    public createMessageGridSending(setting: Settings): MessageGridSending {
        let message = new MessageGridSending();
        message.verticalLines = setting.height;
        message.horizontalLines = setting.width;
        return message;
    }

    public createMessageBlockReversalEvent(dices: number[], color: string): MessageBlockReversalEvent {
        let message = new MessageBlockReversalEvent();
        message.dices = dices;
        message.color = color;
        return message;
    }

    public createMessageFailure(): MessageBase {
        let message = new MessageFailure();
        return message;
    }

    public createMessageDisconect(): MessageBase {
        let message = new MessageBase();
        message.type = MessageType.Disconect;
        return message;
    }

    public createMessageIsPosition(): MessageBase {
        let message = new MessageBase();
        message.type = MessageType.IsPosition;
        return message;
    }
}