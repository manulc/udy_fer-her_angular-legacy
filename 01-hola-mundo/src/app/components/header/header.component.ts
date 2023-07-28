import { Component } from '@angular/core'; // Siempre, cada componente que creemos, tiene que importar este componente de Angular

@Component({
  selector: 'app-header', // Selector que identifica nuestro componente
  templateUrl: 'header.component.html' // Si el código HTML es pequeño, podemos ponerlo aquí directamente mediante Template Strings usando la propiedad "template" en lugar de esta propiedad "templateUrl"
})
export class HeaderComponent { // Declaración de la clase con la funcionalidad de nuestro componente y su exportación para poder usarlo en otros componentes

}