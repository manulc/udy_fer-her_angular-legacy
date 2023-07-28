import { Component } from '@angular/core';

/* Este componente ha sido creado usando Angular-CLI mediante el comando "ng g c components/ngStyle' -it -is".
   La opción "-it" sirve para que el template html se genere en este fichero y no como un fichero externo.
   La opción "-is" es para que no genere un archivo de estilos css externo para este componente.
   Al crearlo de esta manera, se registra automáticamente en el módulo principal de la aplicación "app.module.ts". */

/* La directiva "ngStyle" de Angular nos permite aplicar estilos visuales a elemento HTML de forma dinámica */
@Component({
  selector: 'app-ng-style',
  template: `
    <!-- Otra manera de hacerlo es mediante la expresión '[style.fontSize.px]="tamano"' -->
    <p [ngStyle]="{ 'font-size': tamano + 'px' }">
      Hola Mundo... Esto es una etiqueta
    </p>

    <!-- Cuando pulsamos el bóton, incrementamos el tamaño de la fuente del párrafo de 5 en 5 -->
    <button class="btn btn-primary mr-2" (click)="tamano = tamano + 5">
      <!-- Icono de Font Awesome -->
      <i class="fa fa-plus"></i>
    </button>

    <!-- Cuando pulsamos el bóton, decrementamos el tamaño de la fuente del párrafo de 5 en 5 -->
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <!-- Icono de Font Awesome -->
      <i class="fa fa-minus"></i>
    </button>
  `
})
export class NgStyleComponent {

  tamano: number = 10; // Propiedad que indica el tamaño por defecto de la fuente del párrafo

  constructor() { }

}
