
// Función anónima de tipo flecha autoinvocada - Patrón módulo
(() => {

    // Definición de la clase "Avenger"
    class Avenger {
        /*nombre: string;
        equipo: string;
        nombreReal: string;
        puedePelear: boolean;
        peleasGanadas: number;
    
        // Los valores de las propiedades "nombre", "equipo" y "nombreReal" son obligatorios
        // Los valores de las propiedades "puedePelear" y "peleasGanadas" son opcionales. Si no se pasan, adquieren los valores "false" y 0 respectivamente
        constructor(nombre: string, equipo: string, nombreReal: string, puedePelear: boolean = false, peleasGanadas: number = 0){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }*/

        // En TypeScript, a través de los constructores, podemos definir directamente las propiedades de una clase de forma simplificada
        // "nombre", "equipo" y "nombreReal" son propiedades públicas de la clase y sus valores son requeridos
        // "puedePelear" y "peleasGanadas" son propiedades privadas de la clase y su valores son opcionales. Si no se pasan, adquieren los valores "false" y 0 respectivamente
        constructor(
            public nombre: string,
            public equipo: string,
            public nombreReal: string,
            private puedePelear: boolean = false,
            private peleasGanadas: number = 0
        ) {

        }

    }
    
    const antman: Avenger = new Avenger("Ant-Man", "Capi", "Scott Lang");
    
    console.log(antman);

})();