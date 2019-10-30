import { MessageBase } from "./message-base";
import { Settings } from "../assistants/settings";

export class MessageSetNameRoom extends MessageBase {
    public name: string;
    public settings: Settings;
}