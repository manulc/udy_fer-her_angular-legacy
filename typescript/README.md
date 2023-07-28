-- Comandos para compilar archivos Typescrip y generar los archvis Javascript --

tsc app.ts -> Para compilar un simple archvio Typescript y generar el archivo Javascript.
tsc app.ts -w -> Para compilar un simple archvio Typescript y generar el archivo Javascript de manera automática cuando se detectan cambios.
tsc -init -> Mejor opción cuando se tienen varios archivos Typescript.Crea un proyecto Typescript a partir de un directorio con uno o varios archivos Tpescript.Genera el archivo tsconfig.json que permite configurar el proyecto Typescript.Tendiendo un proyecto Typescript,con el comando tsc se compilarán todos los archivos Typescript que existan en el directorio del proyecto automáticamnete sin ser necesario aplicar el caomando tsc app.ts para cada archivo Typescript.
