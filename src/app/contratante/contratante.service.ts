import { Injectable } from "@angular/core";
import { Contratante } from "../model/contratante";
import { WebStorageUtil } from "../util/web-storage-util";
import { Constants } from "../util/constants";

@Injectable({
    providedIn: 'root'
})

export class ContratanteService {
    contratantes: Contratante[] = [];

    constructor() {

    }

    save(contratante: Contratante) {
        this.contratantes = WebStorageUtil.getArray(Constants.CONTRATANTE_KEY);
        this.contratantes.push(contratante);
        WebStorageUtil.set(Constants.CONTRATANTE_KEY, this.contratantes);
    }

    update(contratante: Contratante) {
        this.delete(contratante.id);
        this.save(contratante);
    }

    delete(id: number): boolean {
        this.contratantes = WebStorageUtil.getArray(Constants.CONTRATANTE_KEY);
        this.contratantes = this.contratantes.filter(contratante => contratante.id != id);
        WebStorageUtil.set(Constants.CONTRATANTE_KEY, this.contratantes);
        return true;
    }

    getContratantes(): Contratante[] {
        return WebStorageUtil.getArray(Constants.CONTRATANTE_KEY);
    }

    isExist(value: string): boolean {
        this.contratantes = WebStorageUtil.get(Constants.CONTRATANTE_KEY);
        for(let c of this.contratantes) {
            if(c.id?.toString.valueOf() == value?.valueOf()) {
                return true;
            }
        }

        return false;
    }

}