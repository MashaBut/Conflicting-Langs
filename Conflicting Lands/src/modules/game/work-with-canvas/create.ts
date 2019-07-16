export class CanvasCreate {

    private firstDice: number;
    private secondDice: number;
    //temporary function
    private random(): void {
        this.firstDice = Math.floor(Math.random() * 6) + 1;
        this.secondDice = Math.floor(Math.random() * 6) + 1;
        console.log(this.firstDice, this.secondDice);
    }

    public setSizeBlockForFuild(): number[] {
        this.random();
        this.firstDice = 18*this.firstDice + 2 * (this.firstDice - 1);
        this.secondDice = 18*this.secondDice + 2 * (this.secondDice - 1);
        console.log(this.firstDice, this.secondDice);
        return [this.firstDice, this.secondDice];
    }

    public turnSize(): number[] {
        let firstDice: number;
        firstDice = this.firstDice;
        this.firstDice = this.secondDice;
        this.secondDice = firstDice;
        return [this.firstDice, this.secondDice];
    }
}