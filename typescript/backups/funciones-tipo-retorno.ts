
// Función anónima de tipo flecha autoinvocada - Patrón módulo
(() => {

    const sumar = (a: number, b: number): number => a + b;

    const nombre = (): string => "Hola Manuel";

    const obtenerSalario = (): Promise<string> => new Promise((resolve, reject) => resolve("Manuel"));

    obtenerSalario()
        .then(console.log); // Versión simplificada de la expresión "(nombre: string) => console.log(nombre)"

})();