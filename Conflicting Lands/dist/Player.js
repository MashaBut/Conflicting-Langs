export default class Player {
    constructor(Name, Color) {
        this.name = Name;
        this.coins = 1200;
        this.color = Color;
    }
    Draw() {
        console.log(this.name);
    }
}
