import { Injectable } from "@angular/core";
import { GetDataInterface } from "../interfaces/get-data.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FilmClass } from "../classes/film.class";

@Injectable({
    providedIn: 'root'
})
export class ApiDataService implements GetDataInterface {
    private apiUrl = 'http://localhost:5110/api/filmy';

    constructor(private http: HttpClient) {}

    Get(): Observable<FilmClass[]> {
        return this.http.get<FilmClass[]>(this.apiUrl);
    }

    GetByID(id: number): Observable<FilmClass> {
        return this.http.get<FilmClass>(`${this.apiUrl}/${id}`);
    }
}