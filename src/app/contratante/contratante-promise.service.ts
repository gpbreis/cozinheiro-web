import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contratante } from "../model/contratante";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ContratantePromiseService {
    URL = 'http://localhost:3000/contratantes'

    httpOptions = {
        headers: new HttpHeaders({
            'ContentType': 'application/json'
        }),
    };

    constructor(private httpClient: HttpClient) {

    }

    save(contratante: Contratante): Promise<Contratante> {
        return lastValueFrom(this.httpClient.post<Contratante>(this.URL, contratante, this.httpOptions));
    }

    delete(id: number): Promise<Contratante> {
        return lastValueFrom(this.httpClient.delete<Contratante>(`${this.URL}/${id}`));
    }

    update(contratante: Contratante): Promise<Contratante> {
        return lastValueFrom(this.httpClient.put<Contratante>(`${this.URL}/${contratante.id}`, contratante, this.httpOptions));
    }

    findById(id: number): Promise<Contratante> {
        return lastValueFrom(this.httpClient.get<Contratante>(`${this.URL}/${id}`));
    }

    findAll(): Promise<Contratante[]> {
        return lastValueFrom(this.httpClient.get<Contratante[]>(this.URL));
    }
}