import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Movie, CarteleraResponse } from '../interfaces/cartelera-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';
import { MovieDetailsResponse } from '../interfaces/movie-details-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private _baseUrl: string = "https://api.themoviedb.org/3";
  private _carteleraPage: number = 1;
  // Propiedad para evitar realizar peticiones http innecesarias durante el scroll infinito
  cargando: boolean = false;

  constructor(private _http: HttpClient) { }

  private get _params() {
    return {
      api_key: "",
      language: "es-ES",
      page: this._carteleraPage.toString()
    };
  }

  getCartelera(): Observable<Movie[]> {
    this.cargando = true;
    // Cada vez que se emita un elemento de tipo "CarteleraResponse", es decir, las películas de una determinada página, con el operador "tap" preparamos la siguiente página para la siguiente emisión
    return this._http.get<CarteleraResponse>(`${this._baseUrl}/movie/now_playing`, { params: this._params })
      .pipe(
        map(resp => resp["results"]),
        tap(() => {
          this._carteleraPage += 1;
          this.cargando = false;
        })
      );
  }

  buscarPeliculas(texto: string): Observable<Movie[]> {
    const params = { ...this._params, page: "1", query: texto };

    return this._http.get<CarteleraResponse>(`${this._baseUrl}/search/movie`, { params })
      .pipe(map(resp => resp.results));
  }

  getDetallesPelicula(id: string): Observable<MovieDetailsResponse> {
    const params = { ...this._params };

    delete params.page;

    return this._http.get<MovieDetailsResponse>(`${this._baseUrl}/movie/${id}`, { params });
  }

  getCast(id: string): Observable<Cast[]> {
    const params = { ...this._params };

    delete params.page;

    return this._http.get<CreditsResponse>(`${this._baseUrl}/movie/${id}/credits`, { params })
      .pipe(
        map(resp => resp["cast"]),
        catchError(err => of([]))
      );
  }

  resetCarteleraPage(): void {
    this._carteleraPage = 1;
  }

}
