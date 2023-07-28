import { Component } from '@angular/core';
import { FileItem } from 'src/app/models/file-item';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html'
})
export class CargaComponent {
  archivos: FileItem[] = [];
  estaSobreElemento: boolean = false;

  constructor(private _cargaImagenesService: CargaImagenesService) { }

  cargarImagenes(): void {
    this._cargaImagenesService.cargarImagenes(this.archivos);
  }

  pruebaSobreElemento(event: any): void {
    console.log(event);
  }

  limpiarArchivos(): void {
    this.archivos = [];
  }

}
