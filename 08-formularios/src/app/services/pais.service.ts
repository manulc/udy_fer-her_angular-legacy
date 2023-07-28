import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private _http: HttpClient) { }

  getPaises(): Observable<any> {
    return this._http.get("https://restcountries.com/v2/lang/es")
      .pipe(map((paises: any[]) => paises.map(pais => ({ codigo: pais.alpha3Code, nombre: pais.name }))));
  }
}
