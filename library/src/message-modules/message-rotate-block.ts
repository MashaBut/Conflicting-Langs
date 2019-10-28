import { MessageBase } from './message-base';

export class MessageRotateBlock extends MessageBase {
    dices: number[];
    color: string;
}