import { ManipulationWithDOM } from "../../work-with-html/manipulations-with-dom";
interface DiceTypes {
    span: Element;
}

export class Dice {
    span: Element;
    constructor(span: Element) { this.span = span; }
}

let Elements: Array<DiceTypes> = [];
export let diceCollection: Array<Dice> = [];

Elements.push({ 'span': ManipulationWithDOM.dice1, });
Elements.push({ 'span': ManipulationWithDOM.dice2, });

export let getRandomIntInclusive: Function = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

Elements.map((elem, index) => {
    let cube = new Dice(elem.span);
    diceCollection.push(cube);
});