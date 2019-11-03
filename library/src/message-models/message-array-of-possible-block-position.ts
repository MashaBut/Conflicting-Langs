import { MessageBase } from './message-base';
import { Block } from '../models/block';
import { MessageType } from "../message-type";

export class MessageArrayOfPossibleBlockPosition extends MessageBase {
    public blocks: Array<Block>;
    public type =  MessageType.ArrayOfPossibleBlockPosition;
}