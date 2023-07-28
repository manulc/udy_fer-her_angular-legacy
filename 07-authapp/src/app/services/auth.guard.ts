import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/* Este Guard ha sido creado usando el comando "ng g g services/auth --skipTests" de Angular CLI.
   La opción "--skipTests" es para que no genere el archivo de pruebas */

// Guard que sólo permite ir o navegar a una ruta si el usuario está autenticado

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._authService.isAuthenticated$;
  }
  
}
