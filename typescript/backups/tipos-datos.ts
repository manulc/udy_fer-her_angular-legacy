
// Función anónima autoinvocada - Patrón módulo
(function(){
    // 2 maneras de declarar una variable de tipo string en TypeScript
    let nombre:string = "Peter";
    let nombre2 = "Juan"; // Especificar el tipo es opcional, pero cuando se define a un valor, en ese momento adquiere un tipo y ya no puede ser de otro
    console.log("nombre "  + nombre);
    console.log("nombre2 " + nombre2);

    let num:number = 123 // Variable de tipo number
    let num2 = 56;
    console.log("num " + num);
    console.log("num2 " + num2);

    let booleano:boolean = false; // Variable de tipo boolean
    let booleano2 = true;
    console.log("booleano " + booleano);
    console.log("booleano2 " + booleano2);

    let fecha:Date = new Date(); // Variable de tipo Date
    let fecha2 = new Date("2020-10-10");
    console.log("fecha " + fecha);
    console.log("fecha2 " + fecha2);

    let cualquiera:any; // Variable de tipo any. Puede usarse para almacenar cualquier tipo de dato(string, number, boolean, ...)
    cualquiera = nombre;
    console.log("cualquiera " + cualquiera);
    cualquiera = num;
    console.log("cualquiera " + cualquiera);
    cualquiera = fecha2;
    console.log("cualquiera " + cualquiera);

    let spiderman = { // TypeScript crea un tipo especializado para el objeto 'spiderman' y siempre que se vaya a modificar tiene que tener la estructura declarada(nombre,edad)
        nombre: "Peter",
        edad: 20
    };

    console.log("spiderman.nombre " + spiderman.nombre);
    console.log("spiderman.edad " + spiderman.edad);
})();