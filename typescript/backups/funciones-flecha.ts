
// Función anónima autoinvocada - Patrón módulo
(function() {
    // Función anónima normal
    const mifuncion = function(a: string){
        return a.toUpperCase();
    }
    
    // Función flecha equivalente a "mifuncion"
    const mifuncionF = (a: string) => a.toUpperCase();
    
    console.log("mifuncion: " + mifuncion("Normal"));
    console.log("mifuncionF: " + mifuncionF("Flecha"));
    
    // Función anónima normal
    const sumarN = function(a: number, b: number){
        return a + b;
    }

    // Función flecha equivalente a "sumarN"
    const sumarF = (a: number, b: number) => a + b;
    
    console.log("sumarN: " + sumarN(5, 7));
    console.log("sumarF: " + sumarF(5, 7));
    
    // Función anónima normal con varias líneas
    const mifuncion3 = function(nombre:string){
        nombre = nombre.toUpperCase();
        return nombre;
    }
    
    // Funcioón flecha con varias líneas equivalente a "mifuncion3"
    const mifuncion3F = (nombre: string) => {
        nombre = nombre.toUpperCase();
        return nombre;    
    }
    
    console.log("mifuncion3: " + mifuncion3("juan"));
    console.log("mifuncion3F: " + mifuncion3F("juan"));
    
    const hulk = {
        nombre: "Hulk",
        smash(){
            /*
            setTimeout(function() {
                console.log(`${this.nombre} smash!!!`); // Error porque "this" hace referencia a la función anónima de callback de la función "setTimeout". Ésto es debido a que las funciones tradicionales(aquellas definidas con "function") se consideran objetos
            }, 1000); */

            // Solución al error anterior; usar una función de tipo flecha porque ese tipo de flechas no son objetos y, por lo tanto, "this" no hace referencia a esa función
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000); 
        }
        /* Otra manera de declarar la función "smash" dentro del objeto:
        smash: function(){
            console.log(`${this.nombre} smash!!!`);
        }
        */
    };
    
    hulk.smash();
})();