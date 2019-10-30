import { MessageBase } from './message-base';

export class MessageBlockReversalEvent extends MessageBase {
    dices: number[];
    color: string;
}