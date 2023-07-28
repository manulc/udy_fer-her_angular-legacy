import { Pipe, PipeTransform } from '@angular/core';

/* Este Pipe ha sido creado usando el comando "ng g p pipes/capitalizado" de Angular-CLI.
   Creando los Pipes de esta manera, de forma automática se registran en el módulo principal de la aplicación "app.module.ts" */

@Pipe({
    name: 'capitalizado' // Este es el nombre de nuestro Pipe personalizado
})
export class CapitalizadoPipe implements PipeTransform {
    // En este método "PipeTransform" definimos el comportamiento de nuestro Pipe
    // El argumento de entrada "value" es obligatorio y todo los argumentos de entrada que venga a continuación se consideran opcionales
    transform(value: string, todas: boolean = true): string {
        value = value.toLowerCase(); // El nombre recibido lo ponemos en minúscula
        let nombres = value.split(" "); // Luego lo partimos en palabras delimitadas por " "
        if(todas) // Si el parámetro opcional "todas" es true(por defecto lo es), se capitaliza todas las palabras del nombre
            nombres = nombres.map(nombre => nombre[0].toUpperCase() + nombre.substring(1));
        else // En caso contrario, sólo se capitaliza la primera palabra del nombre
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
        return nombres.join(" "); // Por último, se vuelve a unir todas las palabras del nombre usando el delimitador " "
    }
}