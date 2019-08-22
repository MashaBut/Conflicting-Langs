export class DataGenerator {
    public static idClient(): number {
        let id: number = (Math.random() * (999999 - 100000 + 1) + 100000);
        return Number(id.toPrecision(6));
    }
}