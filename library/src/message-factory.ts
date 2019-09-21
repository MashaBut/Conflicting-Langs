import { MessageType } from "./message-modules/message-type";
import { MessageSetName } from "./message-modules/message-set-name";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";
import { MessageJoiningRoom } from "./message-modules/message-joing-room";
import { MessageTossDice } from "./message-modules/message-toss-dice";
import { MessageKeyCode } from "./message-modules/message-key-code";
import { MessagePushNameToRoom} from "./message-modules/message-push-name-to-room";
import { MessageConnectedUser} from "./message-modules/message-connected-user";
import { MessageDisconnect} from "./message-modules/message-disconnect";

export class MessageFactory {
  public createMessageSetName(name: string): string {//good
    let message = new MessageSetName();
    message.name = name;
    message.type = MessageType.SetName;
    return JSON.stringify(message);
  }

  public createMessageSetNameRoom(name: string): string {
    let message = new MessageSetNameRoom();
    message.nameRoom = name;
    message.type = MessageType.SetNameRoom;
    return JSON.stringify(message);
  }
  public craeteMessageConnectionUser(name: string): string {
    let message = new MessageConnectedUser();
    message.name = name;
    message.type = MessageType.ConnectionUser;
    return JSON.stringify(message);
  }

  public createMessageJoiningRoom(nameRoom: string, client: string): string {
    let message = new MessageJoiningRoom();
    message.nameRoom = nameRoom;
    message.client = client;
    message.type = MessageType.JoiningToRoom;
    return JSON.stringify(message);
  }

  public createMessagePushNameToRoom(name: string): string {
    let message = new MessagePushNameToRoom();
    message.name = name;
    message.type = MessageType.PushNameToRoom;
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