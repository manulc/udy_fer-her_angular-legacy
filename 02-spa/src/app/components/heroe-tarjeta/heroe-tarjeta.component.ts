import { Component, Input, Output, EventEmitter } from '@angular/core'; // El Módulo "EventEmitter" nos permite emitir un evento y así poder pasar información desde un componente hijo a uno padre
import { Heroe } from '../../services/heroes.service';  // Vamos a usar en este componente nuestra interfaz "Heroe" definida en nuestro servicio "heroes.service"

/* Los módulos "Input" y "Output" se usan para la comunicación entre componentes de padres a hijos y viceversa.
   Nos permite el paso de información entre los componentes afectados */

/* Este componente ha sido generado usando el comando de Angular CLI "ng g c components/heroeTarjeta --is --spec=false"
   El parámetro "--spec=false" es para que no se genere el archivo de pruebas unitarias/integración y la opción "-is" es para no crear la hoja de estilos
   Creando componentes de esta forma, automáticamente se registran en el módulo principal de la aplicación "app.module.ts"*/

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {
  @Input() heroe: Heroe; // Con el decorador "Input", indicamos que el valor de esta propiedad viene de fuera, es decir, desde otro componente padre(En este caso, el componente que le pasa información es "HeroesComponent")
  @Input() index: number; // La propiedad "index" también va a recibir su valor desde que el componente padre "HeroesComponent"
  @Output() heroeSeleccionado: EventEmitter<number>; // Se trata de un evento emisor de información hacia el componente padre("HeroesComponent").

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  // Método que emite el índice de este héroe al componente padre("HeroesComponent") mediante nuestro evento "heroeSeleccionado" 
  verHeroe(){
    this.heroeSeleccionado.emit(this.index);
  }

}
