
// Función anónima de tipo flecha autoinvocada - Patrón módulo
(() => {
     // Las Promesas son útiles para realizar invocaciones asíncronas
    const prom1 = new Promise((resolve, reject) => {
        // El código de la Promesa se ejecutará transcurrido 1 seg
        setTimeout(() => {
            // Debe ejecutarse esta función para indicar que la Promesa se resolvió con éxito
            //resolve("Se terminó el timeout");
    
            // Debe ejecutarse esta función para indicar que la Promesa se resolvió de forma errónea
            reject("Se terminó el timeout");
        }, 1000);
    });
    
    console.log("Inicio");
    
    // El método "then" se ejecuta cuando se resuelve satisfactoriamente la Promesa, es decir, cuando se invoca la función "resolve" de esa Promesa
    // En este caso, el método "then" recibe un argumento de entrada que se corresponde con el texto que se le pasa a la función "resolve" de la Promesa
    // El método "catch" se ejecuta cuando la Promesa se resuelve con algún error, es decir, cuando se invoca la función "reject" de esa Promesa
    // En este caso, el método "catch" recibe un argumento de entrada que se corresponde con el texto que se le pasa a la función "reject" de la Promesa
    // Este código es no bloqueante
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
    
    console.log("Fin");
})();