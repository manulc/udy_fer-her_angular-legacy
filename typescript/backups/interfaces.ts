
// Función anónima de tipo flecha autoinvocada - Patrón módulo
(() => {

    // Definición de la interfaz "Xmen"
    interface Xmen {
        nombre: string,
        edad: number,
        poder?: string // opcional
    }

    // En vez de repetir el tipo de dato "{ nombre: string }" en los argumentos de entrada de estas funciones, es más óptimo crear una interfaz y usarla para ese tipo de dato
    /*const enviarMision = (xmen: { nombre: string }) => console.log(`Enviando a ${xmen.nombre}`);

    const regresarAlCuartel = (xmen: { nombre: string }) => console.log(`${xmen.nombre} regresa al cuartel`);*/

    const enviarMision = (xmen: Xmen) => console.log(`Enviando a ${xmen.nombre}`);

    const regresarAlCuartel = (xmen: Xmen) => console.log(`${xmen.nombre} regresa al cuartel`);

    const wolverine: Xmen = {
        nombre: "Wolverine",
        edad: 60
    };

    enviarMision(wolverine);
    regresarAlCuartel(wolverine);

})();