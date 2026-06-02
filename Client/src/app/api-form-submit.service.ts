import { Injectable } from "@angular/core";
import { FormSubmitInterface } from "./interfaces/form-submit.interface";
import { HttpClient } from "@angular/common/http";
import { FilmClass } from "./classes/film.class";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiFormSubmitService implements FormSubmitInterface {
    private apiUrl = "http://localhost:5110/api/filmy";

    constructor(private http: HttpClient) {}

    Post(nazwa: string, cena: number, data: Date): Observable<any> {
        const payload = { nazwa, cena, data };
        return this.http.post<boolean>(this.apiUrl, payload);
    }

    Put(id: number, nazwa: string, cena: number, data: Date): Observable<any> {
        const payload = { id, nazwa, cena, data };
        return this.http.put<boolean>(`${this.apiUrl}/${id}`, payload);
    }
}