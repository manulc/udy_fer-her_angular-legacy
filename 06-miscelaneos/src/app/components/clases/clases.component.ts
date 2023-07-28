import { Component } from '@angular/core';

/* Este componente ha sido creado usando Angular-CLI mediante el comando "ng g c components/clases' -is".
   La opción "-is" es para que no genere un archivo de estilos css externo para este componente.
   Al crearlo de esta manera,se registra automáticamente en el módulo principal de la aplicación "app.module.ts". */


@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent {
  alerta: string = "alert-danger";
  loading: boolean;

  propiedades: Object = {
    "danger": false
  };

  constructor() { }

  // Método que simula un proceso asíncrono
  ejecutar(): void {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}
