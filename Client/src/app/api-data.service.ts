import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GetDataInterface } from './interfaces/get-data.interface';
import { FilmClass } from './classes/film.class';

@Injectable({ providedIn: 'root' })
export class ApiDataService implements GetDataInterface {
  private apiUrl = 'http://localhost:5110/api/filmy'; 

  constructor(private http: HttpClient) { }

  Get(): Observable<FilmClass[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(res => res.map(item => ({ ...item, dataPremiery: new Date(item.dataPremiery || item.DataPremiery) })))
    );
  }

  GetByID(id: number): Observable<FilmClass> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(item => ({ ...item, dataPremiery: new Date(item.dataPremiery || item.DataPremiery) }))
    );
  }
}