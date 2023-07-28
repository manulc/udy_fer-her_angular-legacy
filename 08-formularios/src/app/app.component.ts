import { Component } from '@angular/core';

/* Nota: En Angular existen 2 tipos de formularios:
   - Formularios Template: Son aquellos que tienen la configuración del formulario en la parte de la vista del componente.
   - Formularios Reactivos: Son aquellos que tienen la configuración del formulario en la clase del componente.
   Se recomienda usar los formularios Reactivos, sobre todo si los formularios son grandes. */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';
}
