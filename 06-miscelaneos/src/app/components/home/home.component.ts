import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
         AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- Renderizamos el componente cuyo selector "app-ng-style" en este componente padre -->
    <app-ng-style></app-ng-style>
    <br>
    <!-- Renderizamos el componente cuyo selector "app-css" en este componente padre -->
    <app-css></app-css>
    <br>
    <!-- Renderizamos el componente cuyo selector "app-clases" en este componente padre -->
    <app-clases></app-clases>
    <br><br>
    <!-- Los estilos visuales para el elemento párrafo definidos en el componente "app-css" no se aplican a este elemento por estar fuera de su scope, es decir, por estar fuera de dicho componente -->
    <!-- Aplicamos nuestra Directiva personalizada "appResaltado" a este elemento HTML. Puede recibir un color de fondo que se utilizará para resaltar ese elemento. Si no se pasa el color, por defecto el fondo es amarillo -->
    <p appResaltado="red">
      Hola Mundo... desde home.component
    </p>
    <br>
    <!-- Renderizamos el componente cuyo selector "app-ng-switch" en este componente padre -->
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");
  }

  // Métodos o Hooks del ciclo de vida de un componente

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
