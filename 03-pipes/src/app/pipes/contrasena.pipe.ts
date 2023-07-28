import { Pipe, PipeTransform } from '@angular/core';

/* Este Pipe ha sido creado usando el comando "ng g p pipes/contrasena" de Angular-CLI.
   Creando los Pipes de esta manera, de forma automática se registran en el módulo principal de la aplicación "app.module.ts" */

@Pipe({
    name: 'contrasena' // Este es el nombre de nuestro Pipe personalizado
})
export class ContrasenaPipe implements PipeTransform {
    // En este método "PipeTransform" definimos el comportamiento de nuestro Pipe
    // El argumento de entrada "value" es obligatorio y todo los argumentos de entrada que venga a continuación se consideran opcionales
    transform(value: string, activar: boolean = true): string {
        // Si "activar" es "true", devuelve un texto de "*" con la longitud del texto en "value". En caso contrario, devuelve directamente el texto en "value"
        return activar ? "*".repeat(value.length) : value;
    }
}