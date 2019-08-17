import { MessageSetName } from "./message-modules/message-set-name";
import { MessageType } from "./message-modules/message-type";

export class MessageFactory {
    public createMessageSetName(name: string): string {
        let message = new MessageSetName();
        message.Type= MessageType.SetName;
        message.Name=name;
        return "Heeloo";
    }
}