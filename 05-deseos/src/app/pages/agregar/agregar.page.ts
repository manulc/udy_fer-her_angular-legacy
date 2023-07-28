import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html'
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem: string = "";

  constructor(private _deseosService: DeseosService, private _route: ActivatedRoute) { }

  ngOnInit() {
    // Otra opción equivalente es usar la expresión " Number(this._route.snapshot.paramMap.get("listaId"));"
    const listaId: number = Number(this._route.snapshot.params.listaId);
    this.lista = this._deseosService.obtenerLista(listaId);
  }

  agregarItem(): void {
    if(this.nombreItem.length === 0)
      return;

    this._deseosService.agregarItemLista(this.lista, this.nombreItem);

    this.nombreItem = "";
  }

  cambioCheck(): void {
    this._deseosService.verificarListaCompletada(this.lista);
  }

  borrarItem(index: number): void {
    this._deseosService.eliminarItemLista(this.lista, index);
  }

}
