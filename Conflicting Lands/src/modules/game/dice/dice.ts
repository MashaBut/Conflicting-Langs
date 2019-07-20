interface DiceTypes {
    span: Element;
}

export enum DiceValues {
     one = 18,
     two = 38,
     three = 58,
     four = 78,
     five = 98,
     six = 118
 }

export class Dice {
    span: Element;
    constructor(span: Element) { this.span = span; }
}

export class DiceRoller extends Dice {
    constructor(span: Element) {
        super(span);
        }

    // rolleDice(diceValue: number): boolean {
    //      (<HTMLElement>this.span).textContent = DiceValues[78];
    //        return true;
    //   }
}

let Elements: Array<DiceTypes> = [];

export let diceCollection: Array<DiceRoller> = [];

Elements.push({ 'span': <HTMLElement>document.getElementById('dice1'), });
Elements.push({ 'span': <HTMLElement>document.getElementById('dice2'), });

export let getRandomIntInclusive: Function = (min:number, max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

Elements.map((elem, index) => {
    let cube = new DiceRoller(elem.span);
    document.body.appendChild(elem.span);
    diceCollection.push(cube);
});