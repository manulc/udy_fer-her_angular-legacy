
// Función anónima autoinvocada - Patrón módulo
(function(){
    var mensaje = "hola"; // Variable global "mensaje"

    if(true){
        var mensaje = "adios"; // Aparentemente paraece una variable de ámbito local pero, con la palabra reserveada "var", "mensaje" sigue siendo de ámbito global
    }

    console.log(mensaje); // Mostrará "adios"

    let mensaje2 = "hola"; // Variable global "mensaje2"

    if(true){
        let mensaje2 = "adios"; // Con la palabra reservada "let", "mensaje2" tiene ámbito local
        console.log(mensaje2); // Mostrará "adios"
    }

    console.log(mensaje2); // Mostrará "hola"

    const opciones = "todas"; // Declaración de constantes. No se puede cambiar su valor después de su declaración

    if(true){
        const opciones = "123"; // Debido a que estamos en otro ámbito, podemos volver a declarar la constante "opciones" sin problema
    }

    console.log(opciones); // Mostrará "todas"
})();
