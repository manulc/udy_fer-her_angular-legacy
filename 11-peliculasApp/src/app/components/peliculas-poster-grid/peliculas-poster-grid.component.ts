import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent {
  // Asociamos el atributo "peliculas" del elemento HTML con esta propiedad "movies".
  // Si el nombre del atributo es igual que el nombre de la propiedad, puede omitirse el texto que se le pasa a la anotación o decorador "@Input" 
  @Input("peliculas") movies: Movie[];

  constructor(private _router: Router) { }

  onMovieClick(movie: Movie): void {
    this._router.navigate(["pelicula", movie.id]);
  }

}
