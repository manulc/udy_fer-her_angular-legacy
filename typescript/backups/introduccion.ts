
/* NOTA: Con el comando "tsc app -w" o "tsc app --watch", el compilador de TypeScript se queda en modo observardor y
   todos los cambios que se hagan en el archivo "app.ts" van a ser compilados automáticamente generándose la nueva versión de
   su correspondiente archivo JavaScript .js*/

/* NOTA: Para que se compilen automáticamente todos los archivos TypeScript existentes en un proyecto al mismo tiempo,
   primero hay que ejecutar el comando "tsc -init" para crear una aplicación o proyecto TypeScript(este proceso genera
   un fichero JSON llamado "tsconfig.json" con la configuración por defecto de TypeScript). Y después, con el comando
   "tsc" o "tsc -w(--watch)"(modo observador) se compilarán todos los archivos .ts existentes generándose las nuevas
   versiones de sus correspondientes archivos .js */

// "nombre" tiene que ser una variable de tipo texto

// Función anónima autoinvocada - Patrón módulo
(function() {
    function saludar(nombre:string){
        console.log("Hola " + nombre);
    }

    var wolverine = {
        nombre: "Logan"
    }

    saludar(wolverine.nombre.toUpperCase());
})();