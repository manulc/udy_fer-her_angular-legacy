import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    
  }

  ngOnInit() {
    // Obtenemos los parámetros de la URL desde el componente padre "UsuarioComponent". Para ello, accedemos a la propiedad "parent"
    this._router.parent.params.subscribe(params => {
      console.log("RUTA HIJA Usuario nuevo");
      console.log(params);
    });
  }

}
