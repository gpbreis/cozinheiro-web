import { Contratante } from "./contratante";

export class Evento {
    id: number;
    contratante: Contratante;
    name: string;
    date: Date;
    hour: string;
    local: string;
    value: number;
    numberOfPeople: number;
    menu: string[];
    constructor(
    ) {
        this.id = 0;
        this.contratante = new Contratante;
        this.name = '';
        this.date = new Date;
        this.hour = '';
        this.local = '';
        this.value = 0.0;
        this.numberOfPeople = 0;
        this.menu = [];
    }
}