interface DiceTypes {
    span: Element;
}

export enum DiceValues {
     one = 1,
     two = 2,
     three = 3,
     four = 4,
     five = 5,
     six = 6
 }

export class Dice {
    span: Element;
    constructor(span: Element) {
        this.span = span;
    }
}

export class DiceRoller extends Dice {
    constructor(span: Element) {
        super(span);
        (<HTMLElement>span).style.cssText = "border: 2px solid black; display: inline-block; height: 45px;  width: 60px; text-align: center; margin-top: 5px; margin-left: 10px; padding-top : 15px"; 
    }

     rolleDice(diceValue: number): boolean {
          (<HTMLElement>this.span).textContent = DiceValues[getRandomIntInclusive(1, 6)];
          return true;
    }
}

let Elements: Array<DiceTypes> = [];

export let diceCollection: Array<DiceRoller> = [];

for (let index: number = 0; index < 2; index++) {
    Elements.push({ 'span': document.createElement('span'), });
}

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