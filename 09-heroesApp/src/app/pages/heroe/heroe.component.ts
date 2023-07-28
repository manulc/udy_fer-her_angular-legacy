import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();

  constructor(private _route: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    // Forma de obtener parámetros de la url subscribiéndonos a los cambios
    /*this._route.params
      .subscribe(params => this._heroesService.obtenerHeroe(params["id"])
        .subscribe(heroe => this.heroe = heroe));*/

    // Forma de obtener parámetros de la url sin subscribirse a los cambios
    const id: string = this._route.snapshot.paramMap.get("id") as string;

    if(id !== "nuevo")
      this._heroesService.obtenerHeroe(id).subscribe(heroe => this.heroe = heroe);
  }

  guardar(form: NgForm): void {
    if(form.invalid) {
      console.warn("Formulario no válido");
      return;
    }

    Swal.fire({
      title: "Espere",
      text: "Guardando información",
      type: "info",
      allowOutsideClick: false // Para que el usuario no pueda cerrar la alerta haciendo click fuera de ella
    });
    Swal.showLoading();

    let peticion: Observable<any>;
    if(this.heroe.id)
      peticion = this._heroesService.actualizarHeroe(this.heroe);
    else
      peticion = this._heroesService.crearHeroe(this.heroe);

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: "La información se guardó correctamente",
        type: "success"
      });
    });
  }

}
