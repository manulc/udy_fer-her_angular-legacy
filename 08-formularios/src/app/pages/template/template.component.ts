import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {
  usuario: any = {
    nombre: "Manuel",
    apellido: "Lorenzo",
    email: "test@test.com",
    pais: "",
    genero: "M"
  };
  paises: any[];

  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this._paisService.getPaises().subscribe(paises => this.paises = paises);
  }

  guardar(forma: NgForm): void {
    if(forma.invalid) {
      // Si el formulario no se ha tocado y es inválido, marcamos aquellos inputs inválidos como tocados o modificados para que se muestren sus mensajes de error correspondientes 
      Object.values(forma.controls).forEach(control => control.markAsTouched());
      return;
    }

    console.log(forma.value);
  }
}
