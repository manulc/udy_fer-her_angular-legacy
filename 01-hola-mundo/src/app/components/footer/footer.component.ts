import { Component } from '@angular/core';

/* Este componente ha sido creado usando el comando "ng g c components/footer" de Angular-CLI.
   Con este método de creación de componentes ya se importa automáticamente el componente en el módulo principal
   "app.module.ts" y se añade al array de declaraciones */

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }
}
