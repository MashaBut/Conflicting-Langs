import { MessageType } from "./message-modules/message-type";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";
import { MessageNewRoom } from "./message-modules/message-new-room";

export class MessageFactory {
  public createMessageSetNameRoom(name: string, nameClient): string {
    let message = new MessageSetNameRoom();
    message.Type = MessageType.SetNameRoom;
    message.nameRoom = name;
    message.nameClient = nameClient;
    return JSON.stringify(message);
  }

  public createMessageNewRoom(name: string): string {
    let message = new MessageNewRoom();
    message.Type = MessageType.NewRoom;
    message.nameRoom = name;
    return JSON.stringify(message);
  }
}