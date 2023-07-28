import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/* Este componente ha sido generado usando el comando "ng g c components/mapa/mapa-editar --module=app.module --flat --skipTests" de Angular CLI.
   Como tenemos 2 módulos en la aplicación, "app.module.ts" y "material.module.ts", usamos la opción "--module=app.module" para
   que este componente se registre automáticamente en el módulo "app.module.ts".
   La opción "--skipTests" es para que no genere el archivo de pruebas
   La opción "--flat" es para los archivos del componente se generen en la raíz del directorio "components/mapa"  */

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html'
})
export class MapaEditarComponent {
  forma: FormGroup;

  constructor(
      private _dialogRef: MatDialogRef<MapaEditarComponent>,
      @Inject(MAT_DIALOG_DATA) private _data: any,
      private _fb: FormBuilder
  ) {
    this.forma = this._fb.group({
      'titulo': this._data.titulo,
      'desc': this._data.desc
    });
  }

  guardarCambios(): void {
    this._dialogRef.close(this.forma.value);
  }

  onNoClick(): void {
    this._dialogRef.close();
  }

}
