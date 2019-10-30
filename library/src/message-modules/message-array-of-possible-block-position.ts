import { MessageBase } from './message-base';
import { Block } from '../assistants/block';

export class MessageArrayOfPossibleBlockPosition extends MessageBase {
    public blocks: Array<Block>;
}