
export class HeroeModel {
    id: string | null;
    nombre: string;
    poder: string;
    vivo: boolean;

    constructor() {
        this.id = null;
        this.nombre = "";
        this.poder = "";
        this.vivo = true;
    }
}