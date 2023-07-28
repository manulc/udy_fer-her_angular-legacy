import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  texto: string = "";
  movies: Movie[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _peliculasService: PeliculasService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.texto = params["texto"];
      this._peliculasService.buscarPeliculas(this.texto).subscribe(movies => this.movies = movies);
    });
  }

}
