interface DiceTypes {
    span: Element;
}

export class Dice {
    span: Element;
    constructor(span: Element) { this.span = span; }
}

let Elements: Array<DiceTypes> = [];
export let diceCollection: Array<Dice> = [];

Elements.push({ 'span': <HTMLElement>document.getElementById('dice1'), });
Elements.push({ 'span': <HTMLElement>document.getElementById('dice2'), });

export let getRandomIntInclusive: Function = (min:number, max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

Elements.map((elem, index) => {
    let cube = new Dice(elem.span);
    document.body.appendChild(elem.span);
    diceCollection.push(cube);
});