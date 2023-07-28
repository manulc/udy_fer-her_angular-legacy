
// Función anónima de tipo flecha autoinvocada - Patrón módulo
(() => {
    const avenger = {
        nombre: "Steve",
        clave: "Capitán América",
        poder: "Droga"
    };

    /* Método tradicional para obtener los valores de las propiedades de un objeto:
    const nombre = avenger.nombre;
    const clave = avenger.clave;
    const poder = avenger.poder;
    */

    // Desestructuración de objetoS
    // Indicamos que del objeto "avenger" queremos obtener su "nombre", "clave" y "poder"
    // No importan el orden de la desestructuración
    const { clave, nombre, poder } = avenger;

    console.log("Nombre del Avenger: " + nombre);
    console.log("Clave del Avenger: " + clave);
    console.log("Poder del Avenger: " + poder);

    // Desestructuración de objetos en los argumentos de entrada de funciones
    const extraer = function ({ nombre, poder }: { nombre: string, poder: string }) {
        console.log(nombre);
        console.log(poder);
    };

    extraer(avenger);

    const avengers = ["Thor", "Ironman", "Spiderman"];

    /* Método tradicional para obtener los valores de las propiedades de un array o arreglo:
    const avenger1 = avengers[0];
    const avenger2 = avengers[1];
    const avenger3 = avengers[2];
    */

    // Desestructuración de arrays o arreglos
    // A diferencia de la desestructuración de objetos, aquí si es secuencial e importa el orden
    const [ avenger1, avenger2, avenger3 ] = avengers;

    console.log("Avenger 1: " + avenger1);
    console.log("Avenger 2: " + avenger2);
    console.log("Avenger 3: " + avenger3);

    // Con la desestructuración de arrays o arreglos, podemos omitir valores pero siguiendo el orden
    const [ , , avengerFavorito ] = avengers;

    console.log("Avenger favorito: " + avengerFavorito);

    // Desestructuración de arrays o arreglos en los argumentos de entrada de funciones
    const extraerArr = function ([ thor, ironman, spiderman ]: string[]) {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };

    extraerArr(avengers);
})();