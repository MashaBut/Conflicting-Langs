import { MessageType } from "./message-modules/message-type";
import { MessageSetName } from "./message-modules/message-set-name";
import { MessageSetNameRoom } from "./message-modules/message-set-name-room";
import { MessageJoiningRoom } from "./message-modules/message-joining-room";

export class MessageFactory {
  public createMessageSetName(name: string): string {
    let message = new MessageSetName();
    message.Type = MessageType.SetName;
    message.Name = name;
    return JSON.stringify(message);
  }

  public createMessageSetNameRoom(name: string): string {
    let message = new MessageSetNameRoom();
    message.Type = MessageType.SetNameRoom;
    message.nameRoom = name;
    return JSON.stringify(message);
  }
  public createMessageJoiningRoom(nameRoom: string, client: string): string {
    let message = new MessageJoiningRoom();
    message.Type = MessageType.JoiningRoom;
    message.nameRoom = nameRoom;
    message.client = client;
    return JSON.stringify(message);
  }
}