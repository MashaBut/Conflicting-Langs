import { MessageType } from "./message-modules/message-type";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";

export class MessageFactory {
  public createMessageSetNameRoom(name: string): string {
    let message = new MessageSetNameRoom();
    message.Type=MessageType.SetNameRoom;
    message.nameRoom = name;
    return JSON.stringify(message);
  }
}