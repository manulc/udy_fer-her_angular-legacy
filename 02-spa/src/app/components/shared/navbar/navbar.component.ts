import { Component } from '@angular/core';
import { Router } from '@angular/router'

/* Este componente ha sido creado con el comando "ng c g components/shared/navbar" de Angular CLI.
   Creando componentes de esta forma, automáticamente se registran en el módulo principal de la aplicación "app.module.ts" */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  
  // Inyectamos el "Router" de Angular en la propiedad  "_router"
  constructor(private _router: Router) {
  }

  buscarHeroe(termino: string){
    // Navega a la ruta "/heroes/:termino" que está asociada al componente "HeroesSearchComponent"
    this._router.navigate(['/heroes/', termino]);
  }

}
