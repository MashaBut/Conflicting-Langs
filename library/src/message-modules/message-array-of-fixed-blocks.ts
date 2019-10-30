import { MessageBase } from './message-base';
import { Block } from '../models/block';
import { MessageType } from "./message-type";

export class MessageArrayOfFixedBlocks extends MessageBase {
    public blocks: Array<Block>;
    public type = MessageType.ArrayOfFixedBlocks;
}