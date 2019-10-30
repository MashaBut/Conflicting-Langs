import { MessageType } from "./message-modules/message-type";
import { MessageSetName } from "./message-modules/message-set-name";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";
import { MessageJoinTheRoom } from "./message-modules/message-join-the-room";
import { MessageSendDice } from "./message-modules/message-send-dice";
import { MessageGameActionEvents } from "./message-modules/message-game-action-events";
import { MessageCreateRoom } from "./message-modules/message-create-room";
import { MessageSendInfoToPlayerRooms } from "./message-modules/message-send-info-to-player-rooms";
import { MessageEventTossDice } from "./message-modules/message-event-toss-dice";
import { MessageMoveToHollPage } from "./message-modules/message-move-to-holl-page";
import { MessageSaveBlock } from "./message-modules/message-save-block";
import { MessageGridSending } from "./message-modules/message-grid-sending";
import { MessageArrayOfPossibleBlockPosition } from "./message-modules/message-array-of-possible-block-position";
import { MessageBlockReversalEvent } from "./message-modules/message-block-reversal-event";
import { MessageFailure } from "./message-modules/message-failure";
import { MessageArrayOfFixedBlocks } from "./message-modules/message-array-of-fixed-blocks";

import { Settings } from "./assistants/settings";
import { Room } from "./assistants/room";
import { Block } from "./assistants/block";
export class MessageCreator {

    public createMessageSetName(name: string): Object {
        let message = new MessageSetName();
        message.name = name;
        message.type = MessageType.SetName;
        return message;
    }

    public createMessageSetRoomName(name: string, settings: Settings): Object {
        let message = new MessageSetNameRoom();
        message.name = name;
        message.settings = settings;
        message.type = MessageType.SetNameRoom;
        return message;
    }

    public createMessageCreateRoom(rooms: Array<Room>): Object {
        let message = new MessageCreateRoom();
        message.rooms = rooms;
        message.type = MessageType.CreateRoom;
        return message;
    }

    public createMessageJoinTheRoom(idRoom: string): Object {
        let message = new MessageJoinTheRoom();
        message.id = idRoom;
        message.type = MessageType.JoinTheRoom;
        return message;
    }

    public createMessageSendInfoToPlayerRooms(firstPlayerName: string, secondPlayerName: string, currentPlayer: number, settings: Settings): Object {
        let message = new MessageSendInfoToPlayerRooms();
        message.firstPlayerName = firstPlayerName;
        message.secondPlayerName = secondPlayerName;
        message.settings = settings;
        message.currentPlayer = currentPlayer;
        message.type = MessageType.SendInfoToPlayerRooms;
        return message;
    }

    public createMessageSendDice(dices: number[]): Object {
        let message = new MessageSendDice();
        message.dices = dices;
        message.type = MessageType.SendDice;
        return message;
    }

    public createMessageGameActionEvents(event: string): Object {
        let message = new MessageGameActionEvents();
        message.event = event;
        message.type = MessageType.GameActionEvents;
        return message;
    }

    public createMessageEventTossDice(color: string): Object {
        let message = new MessageEventTossDice();
        message.type = MessageType.EventTossDice;
        message.color = color;
        return message;
    }

    public createMessageMoveToHollPage(): Object {
        let message = new MessageMoveToHollPage();
        message.type = MessageType.MoveToHollPage;
        return message;
    }

    public createMessageSaveBlock(block: Block): Object {
        let message = new MessageSaveBlock();
        message.block = block;
        message.type = MessageType.SaveBlock;
        return message;
    }

    public createMessageGridSending(setting: Settings): Object {
        let message = new MessageGridSending();
        message.type = MessageType.GridSending;
        message.verticalLines = setting.numberOfVerticalLines;
        message.horizontalLines = setting.numberOfHorizontalLines;
        return message;
    }

    public createMessageArrayOfPossibleBlockPositions(blocks: Block[]): Object {
        let message = new MessageArrayOfPossibleBlockPosition();
        message.type = MessageType.ArrayOfPossibleBlockPosition;
        message.blocks = blocks;
        return message;
    }

    public createMessageBlockReversalEvent(dices: number[], color: string): Object {
        let message = new MessageBlockReversalEvent();
        message.type = MessageType.BlockReversalEvent;
        message.dices = dices;
        message.color = color;
        return message;
    }

    public createMessageFailure(): Object {
        let message = new MessageFailure();
        message.type = MessageType.Failure;
        return message;
    }

    public createMessageArrayOfFixedBlocks(blocks: Array<Block>): Object {
        let message = new MessageArrayOfFixedBlocks();
        message.type = MessageType.ArrayOfFixedBlocks;
        message.blocks = blocks;
        return message;
    }
}