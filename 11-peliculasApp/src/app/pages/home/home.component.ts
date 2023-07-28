import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  peliculas: Movie[] = [];
  peliculasSlideShow: Movie[] =[];

  constructor(private _peliculasService: PeliculasService) { }
  
  ngOnInit(): void {
    // Creamos un nuevo array de películas para la propiedad "peliculasSlideShow" para que sea diferente del array de la propiedad "peliculas".
    // De esta forma, cuando en el método "onScroll" se añadan nuevas películas al array de la propiedad "peliculas", no afecte esta
    // modificación también al array de la propiedad "peliculasSlideShow". Es decir, el array de la propiedad "peliculasSlideShow" sólo debe tener las películas
    // que se asignan aquí y nada más
    this._peliculasService.getCartelera().subscribe(peliculas => {
      this.peliculas = peliculas;
      this.peliculasSlideShow = [...peliculas];
    });
  }

  ngOnDestroy(): void {
    this._peliculasService.resetCarteleraPage();
  }

  // Este método va a ejecutarse cada vez que se haga scroll
  @HostListener("window:scroll", ["$event"])
  onScroll(): void {
    // Obtenemos la posición del scroll(algunos navegadores obtienen los datos desde la expresión "document.documentElement" y otros desde la expresión "document.body")
    // Usamos el valor aleatorio 1300 como un offset de la posición para que cuando el scroll alcance casí el máximo, el valor final de esta posición sobrepase el valor del máximo y, de esta forma, se carguen más películas en la página
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    // Obtenemos la máxima altura del scroll
    const max = document.documentElement.scrollHeight || document.body.scrollHeight;

    if((pos > max) && !this._peliculasService.cargando)
      this._peliculasService.getCartelera().subscribe(peliculas => this.peliculas.push(...peliculas));

  }

}
