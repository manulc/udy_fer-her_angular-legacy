import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private _url: string = "https://login-app-5913f-default-rtdb.europe-west1.firebasedatabase.app";

  constructor(private _http: HttpClient) { }

  crearHeroe(heroe: HeroeModel): Observable<HeroeModel> {
    return this._http.post(`${this._url}/heroes.json`, heroe)
      .pipe(map((resp: any) => {
        heroe.id = resp["name"];
        return heroe;
      }));
  }

  actualizarHeroe(heroe: HeroeModel): Observable<HeroeModel> {
    // Creamos un héroe temporal para eliminarle el id ya que no queremos crear una propiedad id en el objeto de Firebase
    const heroeTemp: any = {
      ...heroe
    };

    delete heroeTemp["id"];

    return this._http.put<HeroeModel>(`${this._url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  obtenerHeroes(): Observable<HeroeModel[]> {
    return this._http.get(`${this._url}/heroes.json`)
      .pipe(map(this.crearArrayHeroes));
  }

  obtenerHeroe(id: string): Observable<HeroeModel> {
    return this._http.get<HeroeModel>(`${this._url}/heroes/${id}.json`)
      .pipe(tap(resp  => resp.id = id));
  }

  eliminarHeroe(id: string): Observable<void> {
    return this._http.delete<void>(`${this._url}/heroes/${id}.json`);
  }

  private crearArrayHeroes(heroesObj: any): HeroeModel[] {
    const heroesArr: HeroeModel[] = [];

    // Si no hay héroes creados, devolvemos un array o arreglo vacío
    if(heroesObj == null)
      return heroesArr;

    Object.keys(heroesObj).forEach(key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroesArr.push(heroe);
    });

    return heroesArr;
  }
}
