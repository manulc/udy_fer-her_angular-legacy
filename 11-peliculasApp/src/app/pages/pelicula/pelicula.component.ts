import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { MovieDetailsResponse } from 'src/app/interfaces/movie-details-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Cast } from 'src/app/interfaces/credits-response';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {
  movie: MovieDetailsResponse;
  cast: Cast[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _peliculasService: PeliculasService,
    private _location: Location,
    private _router: Router
  ) { }

  ngOnInit() {
    // Como en este caso el parámetro de la URL "id" no va a cambiar, podemos obtener su valor de forma síncrona, es decir, sin subscribirnos a un Observable
    const { id } = this._activatedRoute.snapshot.params;
    
    /*this._peliculasService.getDetallesPelicula(id).subscribe(
      movie => this.movie = movie,
      // Si hay un error, significa que el servicio ha devuelto un 404, es decir, no ha encontrado la película(Nota: Se recibe opcionalmente un parámetro con el error pero no vamos a hacer nada con él)
      () => this._router.navigateByUrl("/home")
    );

    this._peliculasService.getCast(id).subscribe(cast => this.cast = cast);*/

    // El código comentado de arriba puede resumirse usando la función "combineLatest" de "rxjs".
    // Esta función recibe una serie de Observables y espera a que se emita un elemento de cada uno de ellos
    combineLatest([
      this._peliculasService.getDetallesPelicula(id),
      this._peliculasService.getCast(id)
    ])
    .subscribe(([ movie, cast ]) => {
      this.movie = movie;
      this.cast = cast;
    },
    // Si hay un error, significa que el servicio ha devuelto un 404, es decir, no ha encontrado la película(Nota: Se recibe opcionalmente un parámetro con el error pero no vamos a hacer nada con él)
    () => this._router.navigateByUrl("/home"));
    
  }

  regresar(): void {
    this._location.back();
  }

}
