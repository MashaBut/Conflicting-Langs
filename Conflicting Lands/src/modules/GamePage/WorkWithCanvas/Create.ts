export namespace CanvasCreate {

    export let firstDice:number;
    export let secondDice:number;
    //temporary function
    function random() {
        firstDice=Math.floor(Math.random() * 6) + 1;
        secondDice=Math.floor(Math.random() * 6) + 1;
        console.log(firstDice,secondDice);
    }

    export function setSizeBlockForFuild() {
        random();
        firstDice=18*firstDice+2*(firstDice-1);
        secondDice=18*secondDice+2*(secondDice-1);
        console.log(firstDice,secondDice);
    }
}