import { Component } from '@angular/core'; // Siempre, cada componente que creemos, tiene que importar este componente de Angular

@Component({
  selector: 'app-body', // Selector que identifica nuestro componente
  templateUrl: 'body.component.html'// Si el código HTML es pequeño, podemos ponerlo aquí directamente mediante Template Strings usando la propiedad "template" en lugar de esta propiedad "templateUrl"
})
export class BodyComponent { // Declaración de la clase con la funcionalidad de nuestro componente y su exportación para poder usarlo en otros componentes
  mostrar: boolean = false;
  
  frase: any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  };

  personajes: string[] = ["Spiderman", "Venom", "Dr. Octopus"];
}