import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'; // Vamos a usar en este componente nuestro servicio "HeroesService", que proporciona los datos relacionados con los héroes, y la interfaz definida "Heroe"
import { ActivatedRoute } from '@angular/router'; // Necesitamos el elemento "ActivatedRoute" para obtener el término de búsqueda que se le pasa en la url
import { Router } from '@angular/router'; // Importamos el elemento "Router" de Angular para establecer la navegación desde este componente

/* Este componente ha sido creado con el comando "ng c g components/shared/heroesSearch -is" de Angular CLI.
   La opción "-is" es para no crear la hoja de estilos
   Creando componentes de esta forma, automáticamente se registran en el módulo principal de la aplicación "app.module.ts" */

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
})
export class HeroesSearchComponent implements OnInit {
  heroes: Heroe[]; // Este array o arreglo va a contener los héroes encontrados a partir del término de búsqueda
  termino: string;

  // Inyectamos nuestro servicio "HeroesService", el "ActivatedRoute" de Angular y el "Router" de Angular en las propiedades "_heroesService", "_activatedRoute" y "_router" respectivamente
  constructor(private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      // Obtenemos el parámetro "termino" de la url
      this.termino = params['termino'];
      // Invocamos al método "buscarHeroes" de nuestro servicio "_heroesService" pasándole el parámetro "termino" obtenido de la url
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

  verHeroe(id: number){
    // Navegamos a la ruta "/heroe/:id" asociada al componente "HeroeComponent"
    this._router.navigate(['/heroe/', id]);
  }

}
