import { MessageBase } from './message-base';
import { Block } from '../models/block';
import { MessageType } from "../message-type";

export class MessageArrayOfFixedBlocks extends MessageBase {
    public blocks: Array<Array<string>>;
    public type = MessageType.ArrayOfFixedBlocks;
}