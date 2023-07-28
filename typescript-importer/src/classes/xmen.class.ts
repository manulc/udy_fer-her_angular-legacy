

function imprimirConsola(constructor: Function) {
    console.log(constructor);
}

// Exportamos esta clase para usarla en otro módulo de la aplicación
// Las exportaciones de esta forma se hacen a través de un objeto, es decir, la clase "Xmen" es una propiedad de ese objeto
@imprimirConsola // Decorador de clase - Añade nuevas funcionalidades a la clase - En este caso, invoca automáticamente a la función "imprimirConsola"
export class Xmen {
    constructor(
        public nombre: string,
        public clave: string
    )
    {}

    imprimir() {
        console.log(`${this.nombre} - ${this.clave}`);
    }
}