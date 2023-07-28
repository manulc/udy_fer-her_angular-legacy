// Función anónima autoinvocada - Patrón módulo
(function(){
    const nombre = "Manuel";
    const apellido = "Lorenzo";
    const edad = 33;

    function getEdad() {
        return 100 + 100 + 300;
    }

    // Concatenación tradicional, es decir, sin usar Template Strings(Si queremos hacer un salto de línea, tenemos que añadir el caracter especial "\n")
    const salida = nombre + " " + apellido + "\n (Edad: " + edad + ")";
    // Concateación usando Template Strings y haciendo un salto de línea
    // Los Template Strings admiten el procesamiento de expresiones como calcular expresiones aritméticas, llamadas a funciones, etc...
    const salida2 = `${nombre} ${apellido}
    (Edad: ${getEdad()})
    (Número de hermanos: ${1 + 1})`;

    console.log(salida);
    console.log(salida2);
})();