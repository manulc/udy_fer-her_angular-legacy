
// Función anónima de tipo flecha autoinvocada - Patrón módulo
(() => {

    let dineroActual: number = 1000;

    const retirarDinero = (cantidad: number): Promise<number> => {

        return new Promise((resolve, reject) => {
            if(cantidad > dineroActual)
                reject("No hay suficiente dinero");
            else {
                dineroActual -= cantidad;
                resolve(dineroActual);
            }
                
        });
    };

    retirarDinero(500)
        .then((dineroActual: number) => console.log(`Me queda ${dineroActual}`))
        .catch(console.warn); // Versión simplificada de la expresión "err => console.warn(err)"

})();