import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private _auth: AuthService, private _router: Router) { }

  salir() {
    this._auth.logout();
    this._router.navigateByUrl("/login");
  }
}
