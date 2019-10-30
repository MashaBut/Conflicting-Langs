import { MessageBase } from './message-base';
import { MessageType } from "./message-type";
import { Block } from '../models/block';

export class MessageSaveBlock extends MessageBase {
    public block: Block;
    public type =  MessageType.SaveBlock;
}