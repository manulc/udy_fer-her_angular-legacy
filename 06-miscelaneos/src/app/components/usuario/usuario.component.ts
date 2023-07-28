import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    
  }

  ngOnInit() {
    // Obtenmos los parámetros de la URL
    this._router.params.subscribe(params => {
      console.log("RUTA PADRE");
      console.log(params);
    });
  }

}
