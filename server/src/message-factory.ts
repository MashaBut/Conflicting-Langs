import { MessageType } from "./message-modules/message-type";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";
import { MessageNewRoom } from "./message-modules/message-new-room";
import { MessagePushNameToRoom } from "./message-modules/message-push-name-to-room";
import { MessageConnectedUser } from "./message-modules/message-connected-user";
import { MessageTossDice } from "./message-modules/message-toss-dice";
import { MessageKeyCode } from "./message-modules/message-key-code";

export class MessageFactory {
  public createMessageSetNameRoom(name: string, nameClient: string): string {
    let message = new MessageSetNameRoom();
    message.type = MessageType.SetNameRoom;
    message.nameRoom = name;
    message.nameClient = nameClient;
    return JSON.stringify(message);
  }

  public createMessageNewRoom(nameRoom: string): string {
    let message = new MessageNewRoom();
    message.type = MessageType.NewRoom;
    message.nameRoom = nameRoom;
    return JSON.stringify(message);
  }

  public createMessagePushNameToRoom(name: string): string {
    let message = new MessagePushNameToRoom();
    message.type = MessageType.PushNameToRoom;
    message.name = name;
    return JSON.stringify(message);
  }

  public craeteMessageConnectionUser(name: string): string {
    let message = new MessageConnectedUser();
    message.type = MessageType.ConnectionUser;
    message.name = name;
    return JSON.stringify(message);
  }

  public createMessageTossDice(dices: number[]): string {
    let message = new MessageTossDice();
    message.type = MessageType.TossDice;
    message.dices = dices;
    return JSON.stringify(message);
  }

  public createMessageKeycode(e: KeyboardEvent): string {
    let message = new MessageKeyCode();
    message.type = MessageType.KeyCode;
    message.e = e;
    return JSON.stringify(message);
  }
}