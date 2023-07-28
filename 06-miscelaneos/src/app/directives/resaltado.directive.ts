import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/* Esta Directiva ha sido generada usada el comando "ng g d directives/resaltado" de Angular CLI.
   Al crear una Directiva de esta manera, automáticamente se registra en el módulo principal de la aplicación "app.module.ts" */

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  // Esta propiedad "nuevoColor" obtiene su valor desde el atributo "appResaltado" del elemento HTML donde se aplica esta Directiva
  @Input("appResaltado") nuevoColor: string;

  // Inyectamos el "ElementRef" de Angular en la propiedad "_el"
  // "ElementRef" nos permite obtener la referencia del elemento HTML al que estamos aplicando esta Directiva
  constructor(private _el: ElementRef) {
    console.log("Directiva 'ResaltadoDirective' llamada");
  }

  // "HostListener" nos permite escuchar eventos para ejecutar métodos

  // Método que se ejecuta cuando se produce el evento "mouseenter"
  @HostListener("mouseenter")
  mouseEntro(): void {
    // Aplica un fondo amarillo al elemento HTML
    this.resaltar(this.nuevoColor || "yellow");
  }

  // Método que se ejecuta cuando se produce el evento "mouseleave"
  @HostListener("mouseleave")
  mouseSalio(): void {
    // Elimina el color de fondo del elemento HTML
    this.resaltar(null);
  }

  private resaltar(color: string): void {
    this._el.nativeElement.style.backgroundColor = color;
  }

}
