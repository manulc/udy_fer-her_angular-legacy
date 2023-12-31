import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private _router: Router) { }

  buscarPelicula(texto: string): void {
    if(texto.trim().length === 0)
      return;

    this._router.navigate(["buscar", texto]);
  }

}
