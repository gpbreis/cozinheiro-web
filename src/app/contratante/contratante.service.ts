import { Injectable } from "@angular/core";
import { Contratante } from "../model/contratante";
import { WebStorageUtil } from "../util/web-storage-util";
import { Constants } from "../util/constants";
import { ContratantePromiseService } from "./contratante-promise.service";

@Injectable({
    providedIn: 'root'
})

export class ContratanteService {
    contratantes: Contratante[] = [];

    constructor(private contratantePromiseService: ContratantePromiseService) {

    }

    save(contratante: Contratante): Promise<Contratante> {
        this.contratantes = WebStorageUtil.getArray(Constants.CONTRATANTE_KEY);
        this.contratantes.push(contratante);
        WebStorageUtil.set(Constants.CONTRATANTE_KEY, this.contratantes);
        return this.contratantePromiseService.save(contratante);
    }

    update(contratante: Contratante): Promise<Contratante> {
        //this.delete(contratante.id);
        //this.save(contratante);
        return this.contratantePromiseService.update(contratante);
    }

    delete(id: number): Promise<Contratante> {
        //this.contratantes = WebStorageUtil.getArray(Constants.CONTRATANTE_KEY);
        //this.contratantes = this.contratantes.filter(contratante => contratante.id != id);
        //WebStorageUtil.set(Constants.CONTRATANTE_KEY, this.contratantes);
        //return true;
        return this.contratantePromiseService.delete(id);
    }

    getContratantes(): Promise<Contratante[]> {
        //return WebStorageUtil.getArray(Constants.CONTRATANTE_KEY);
        return this.contratantePromiseService.findAll();
    }

    findById(id: number): Promise<Contratante> {
        return this.contratantePromiseService.findById(id);
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