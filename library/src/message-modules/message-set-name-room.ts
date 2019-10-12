import { MessageBase } from "./message-base";

export class MessageSetNameRoom extends MessageBase {
    public name: string;
    public properties: Array<any>;
}