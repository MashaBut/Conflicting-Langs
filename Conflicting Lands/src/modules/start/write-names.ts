export class Identification {
    public static setName(namePlayer: string, defaultName: string): string {
        if(namePlayer === "") {
            namePlayer = defaultName;
        }
        return namePlayer;
    }
}