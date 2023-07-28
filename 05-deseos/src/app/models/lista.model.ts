import { ListaItem } from "./lista-item.model";

export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor(titulo: string) {
        const fechaAct = new Date();

        this.id = fechaAct.getTime();
        this.titulo = titulo;
        this.creadaEn = fechaAct;
        this.terminada = false;
        this.items = [];
    }
}