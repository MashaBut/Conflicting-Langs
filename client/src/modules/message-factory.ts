import { MessageType } from "./message-modules/message-type";
import { MessageSetName } from "./message-modules/message-set-name";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";
import { MessageJoiningRoom } from "./message-modules/message-joining-room";
import { MessageTossDice } from "./message-modules/message-toss-dice";
import { MessageKeyCode } from "./message-modules/message-key-code";

export class MessageFactory {
  public createMessageSetName(name: string): string {
    let message = new MessageSetName();
    message.type = MessageType.SetName;
    message.name = name;
    return JSON.stringify(message);
  }

  public createMessageSetNameRoom(name: string): string {
    let message = new MessageSetNameRoom();
    message.type = MessageType.SetNameRoom;
    message.nameRoom = name;
    return JSON.stringify(message);
  }

  public createMessageJoiningRoom(nameRoom: string, client: string): string {
    let message = new MessageJoiningRoom();
    message.type = MessageType.JoiningToRoom;
    message.nameRoom = nameRoom;
    message.client = client;
    return JSON.stringify(message);
  }

  public createMessageTossDice(dices: number[]): string {
    let message = new MessageTossDice();
    message.type = MessageType.TossDice;
    message.dices = dices;
    return JSON.stringify(message);
  }

  public createMessageKeyCode(e: KeyboardEvent): string {
    let message = new MessageKeyCode();
    message.type = MessageType.KeyCode;
    message.e = e.keyCode;
    return JSON.stringify(message);
  }
}