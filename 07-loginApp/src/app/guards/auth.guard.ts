import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Guard que determina si un usuario está autenticado o no verificando si existe o no un token almacenado en "LocalStorage" y tiene contenido

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) { }

  canActivate(): boolean  {
    if(this._auth.estaAutenticado())
      return true;
    
    this._router.navigateByUrl("/login");

    return false;
  }
  
}
