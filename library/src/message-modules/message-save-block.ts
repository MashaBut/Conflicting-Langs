import { MessageBase } from './message-base';
import { Block } from '../assistants/block';

export class MessageSaveBlock extends MessageBase {
    public block: Block;
}