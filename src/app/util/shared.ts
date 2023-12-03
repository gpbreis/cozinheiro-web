import { Constants } from "./constants";
import { Contratante } from "../model/contratante";

export class Shared {
    constructor() {

    }

    public static initializeWebStorage(): void {
        if (localStorage.getItem(Constants.CONTRATANTE_KEY) != null) {
            return
        }

        let contratante: Contratante[] = [];

        localStorage.setItem(Constants.CONTRATANTE_KEY, JSON.stringify(contratante));
    }
}