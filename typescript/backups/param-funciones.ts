
// Función anónima autoinvocada - Patrón módulo
(function() {
    // Es recomendable declarar primer los argumentos de entrada obligatorios, luego los opcionales y, por último, los que tienen valores por defecto
    // "quien" es obligatorio, "momento" es opcional y "objeto" es también opcional pero con valor por defecto
    function activar(quien: string, momento?: string, objeto: string = "batiseñal") {
        if(momento)
            console.log(`${quien} activó la ${objeto} en la ${momento}`);
        else
            console.log(`${quien} activó la ${objeto}`);
    }

    activar("Gordon");
    activar("Gordon", "tarde");
})();