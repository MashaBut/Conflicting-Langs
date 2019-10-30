import { MessageBase } from './message-base';
import { Block } from '../assistants/block';

export class MessageArrayOfFixedBlocks extends MessageBase {
    public blocks: Array<Block>;
}