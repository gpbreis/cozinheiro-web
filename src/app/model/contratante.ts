import { Evento } from "./evento";

export class Contratante {
    id: number;
    name: string;
    phone: string;
    email: string;
    priority: boolean;
    events: Evento[];
    constructor(
    ) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = '';
        this.phone = '';
        this.email = '';
        this.priority = false;
        this.events = [];
    }

    populaTabela() {
        let contratantes: Contratante[] = [];

        let contratante = new Contratante();
        contratante.id = 1;
        contratante.name = 'Gustavo Breis';
        contratante.phone = '4499998888';
        contratante.email = 'gpbreis@gmail.com';
        contratante.priority = false;
        contratantes.push(contratante);

        contratante = new Contratante();
        contratante.id = 2;
        contratante.name = 'Claudia Regina';
        contratante.phone = '4488887777';
        contratante.email = 'claudia@gmail.com';
        contratante.priority = true;
        contratantes.push(contratante);

        contratante = new Contratante();
        contratante.id = 3;
        contratante.name = 'Lanna';
        contratante.phone = '4477776666';
        contratante.email = 'lanna@gmail.com';
        contratante.priority = true;
        contratantes.push(contratante);

        contratante = new Contratante();
        contratante.id = 4;
        contratante.name = 'Naomi';
        contratante.phone = '4466665555';
        contratante.email = 'naomi@gmail.com';
        contratante.priority = true;
        contratantes.push(contratante);

        contratante = new Contratante();
        contratante.id = 5;
        contratante.name = 'Channel';
        contratante.phone = '4455554444';
        contratante.email = 'claudia@gmail.com';
        contratante.priority = true;
        contratantes.push(contratante);

        return contratantes;
    }
}