import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MapMouseEvent } from 'mapbox-gl';
import { Marcador } from '../../classes/marcador.class';
import { MapaEditarComponent } from './mapa-editar.component';

/* Este componente ha sido generado usando el comando "ng g c components/mapa --module=app.module --skipTests" de Angular CLI.
   Como tenemos 2 módulos en la aplicación, "app.module.ts" y "material.module.ts", usamos la opción "--module=app.module" para
   que este componente se registre automáticamente en el módulo "app.module.ts".
   La opción "--skipTests" es para que no genere el archivo de pruebas */

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent {
  lng: number = 7.809007;
  lat: number = 51.678418;
  style: string = "mapbox://styles/mapbox/streets-v11";
  zoom: number = 15;
  marcadores: Marcador[];

  constructor(private _snackBar: MatSnackBar, private _dialog: MatDialog) {
    this.marcadores = JSON.parse(localStorage.getItem('marcadores')) || [];
  }

  agregarMarcador(evt: MapMouseEvent): void {
    const { lngLat } = evt;
    this.marcadores.push(new Marcador(lngLat.lng, lngLat.lat));
    this.guardarStorage();
    this._snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  eliminarMarcador(index: number): void {
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this._snackBar.open('Marcador eliminado', 'Cerrar', { duration: 3000 });
  }

  editarMarcador(marcador: Marcador): void {
    const dialogRef = this._dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if(!result)
        return;

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();

      this._snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });
    });
  }

  private guardarStorage(): void {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
}
