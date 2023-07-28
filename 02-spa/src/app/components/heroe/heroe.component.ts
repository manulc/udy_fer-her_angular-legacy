import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Necesitamos el elemento "ActivatedRoute" para obtener el id que se le pasa en la url
import { Location } from '@angular/common'; // Necesitamos el elemento "Location" para poder volver a la ruta anterior
import { HeroesService, Heroe } from '../../services/heroes.service'; // Vamos a usar en este componente nuestro servicio "HeroesService", que proporciona los datos relacionados con los héroes, y la interfaz definida "Heroe"

/* Este componente ha sido creado con el comando "ng c g components/shared/heroe -is" de Angular CLI.
   La opción "-is" es para no crear la hoja de estilos
   Creando componentes de esta forma, automáticamente se registran en el módulo principal de la aplicación "app.module.ts" */

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: Heroe;

  // Inyectamos el "ActivatedRoute" de Angular, el "Location" de Angular y nuestro servicio "HeroesService" en las propiedades "_activatedRoute", "_location" y "_heroesService" respectivamente
  constructor( private _activatedRoute: ActivatedRoute,
               private _location: Location,
               private _heroesService: HeroesService
  ) {
     // Obtenemos el parámetro "id" de la url y se lo pasamos al método "getHeroe" de nuestro servicio "_heroesService" para recuperar la información del héroe correspondiente
    this._activatedRoute.params.subscribe(params => this.heroe = _heroesService.getHeroe(params['id']));
  }

  // Método para volver a la ruta anterior
  volver(): void {
    this._location.back();
  }

}
