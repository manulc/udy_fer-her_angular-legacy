
export class FileItem {
    archivo: File;
    nombre: string;
    url: string;
    estaSubiendo: boolean;
    progreso: number;

    constructor(archivo: File) {
        this.archivo = archivo;
        this.nombre = archivo.name;
        this.estaSubiendo = false;
        this.progreso = 0;
        this.url = "";
    }
}