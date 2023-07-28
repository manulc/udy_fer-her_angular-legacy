import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'; // Vamos a usar en este componente nuestro servicio "HeroesService", que proporciona los datos relacionados con los héroes, y la interfaz definida "Heroe"
import { Router } from '@angular/router'; // Importamos el módulo "Router" de Angular para implementar la navegabilidad entre componentes

/* Este componente ha sido creado con el comando "ng c g components/shared/heroes -is" de Angular CLI.
   La opción "-is" es para no crear la hoja de estilos
   Creando componentes de esta forma, automáticamente se registran en el módulo principal de la aplicación "app.module.ts" */

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  // Inyectamos nuestro servicio "HeroesService" y el "Router" de Angular en las propiedades "_heroesService" y "_router" respectivamente
  constructor( private _heroesService: HeroesService,
               private _router: Router
  ) { }

  // Este método se ejecuta seguidamente después del constructor
  ngOnInit() {
    // Obtenemos los datos de los héroes a partir del servicio
    this.heroes = this._heroesService.getHeroes();
  }

  // Este método establece la navegación al path "/heroe/:id"
  verHeroe(idx: number) {
    this._router.navigate(['/heroe/', idx]);
  }

}
