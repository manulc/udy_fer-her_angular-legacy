import { Injectable } from '@angular/core';
import { ListaItem } from '../models/lista-item.model';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  private _listas: Lista[];

  constructor() {
    this.cargarStorage();
  }

  obtenerListas(): Lista[] {
    return this._listas;
  }

  obtenerLista(id: number): Lista {
    return this._listas.find(lista => lista.id === id);
  }

  crearLista(titulo: string): number {
    const nuevaLista = new Lista(titulo); 
    this._listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  borrarLista(id: number): void {
    const indexList: number = this._listas.findIndex(lista => lista.id === id);
    this._listas.splice(indexList, 1);
    this.guardarStorage();
  }

  editarTituloLista(lista: Lista, titulo: string): void {
    lista.titulo = titulo;
    this.guardarStorage();
  }

  agregarItemLista(lista: Lista, nombreItem: string): void {
    lista.items.push(new ListaItem(nombreItem));

    if(lista.terminada) {
      lista.terminada = false;
      lista.terminadaEn = null;
    }

    this.guardarStorage();
  }

  eliminarItemLista(lista: Lista, indexItem: number): void {
    lista.items.splice(indexItem, 1);
    this.verificarListaCompletada(lista);
  }

  verificarListaCompletada(lista: Lista): void {
    const numPendientes = lista.items.filter(item => !item.completado).length;

    if(lista.items.length === 0 || numPendientes > 0){
      lista.terminadaEn = null;
      lista.terminada = false;
    }
    else {
      lista.terminadaEn = new Date();
      lista.terminada = true;
    }

    this.guardarStorage();
  }

  private guardarStorage(): void {
    localStorage.setItem("listas", JSON.stringify(this._listas));
  }

  private cargarStorage(): void {
    this._listas = JSON.parse(localStorage.getItem("listas")) || [];
  }
}
