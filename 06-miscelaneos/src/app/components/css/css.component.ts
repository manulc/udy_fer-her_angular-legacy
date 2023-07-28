import { Component } from '@angular/core';

/* Este componente ha sido creado usando Angular-CLI mediante el comando "ng g c components/css' -it -is".
   La opción "-it" sirve para que el template html se genere en este fichero y no como un fichero externo.
   La opción "-is" es para que no genere un archivo de estilos css externo para este componente
   Al crearlo de esta manera, se registra automáticamente en el módulo principal de la aplicación "app.module.ts". */

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  // Los estilos que se definen aquí sólo afectan a los elementos HTML del template asociado a este componente
  styles: [
    `p {
      color: red;
      font-size: 20px
    }`
  ]
})
export class CssComponent {

  constructor() { }

}
