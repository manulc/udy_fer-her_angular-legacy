
// Función anónima de tipo flecha autoinvocada - Patrón módulo
(() => {
    
    // Uso de Let y Const
    const nombre: string = 'Ricardo Tapia';
    const edad: number = 23;

    const PERSONAJE: { nombre: string, edad: number } = { nombre, edad }; // Versión simplificada de la expresión "{ nombre: nombre, edad: edad }"

    // Cree una interfaz que sirva para validar el siguiente objeto
    interface Heroe {
        nombre: string,
        artesMarciales: string[]
    }

    const batman: Heroe = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    };

    // Convertir esta funcion a una funcion de flecha
    /*function resultadoDoble( a, b ){
        return (a + b) * 2;
    }*/

    const resultadoDoble = (a: number, b: number): number => (a + b) * 2;

    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger( nombre: string, poder?: string, arma: string = "arco" ): string {
        let mensaje;

        if( poder ){
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else{
            mensaje = nombre + ' tiene un ' + poder;
        }

        return mensaje;
    };

    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.

    class Rectangulo {
        constructor(private base: number, public altura: number ) {

        }

        calcularArea = (): number => this.base * this.altura;
    }

})();