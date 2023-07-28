import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/Usuario.model';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators';

// Servicio que utiliza la API REST de Firebase

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey: string = "";

  constructor(private _http: HttpClient) { }

  crearUsuario(usuario: UsuarioModel): Observable<any> {
    const { email, password }: { email: string, password: string } = usuario;

    const data: Object = {
      email,
      password,
      returnSecureToken: true
    };

    return this._http.post(`${this.url}signUp?key=${this.apiKey}`, data)
      .pipe(tap(({ idToken, expiresIn }) => this.guardarToken(idToken, expiresIn)));
  }

  login(usuario: UsuarioModel): Observable<any> {
    const { email, password }: { email: string, password: string } = usuario;

    const data: Object = {
      email,
      password,
      returnSecureToken: true
    };

    return this._http.post(`${this.url}signInWithPassword?key=${this.apiKey}`, data)
      .pipe(tap(({ idToken, expiresIn }) => this.guardarToken(idToken, expiresIn)));
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresIn");
  }

  estaAutenticado(): boolean {
    const token = localStorage.getItem("token") || "";

    if(token.length < 2)
      return false;

    const expireInMs: number = Number(localStorage.getItem("expiresIn"));
    const expiraDate: Date = new Date(expireInMs);
    const actualDate: Date = new Date();

    console.log({ expiraDate, actualDate })

    return expiraDate > actualDate;
  }

  private guardarToken(idToken: string, expiresIn: string) {
    localStorage.setItem("token", idToken);

    const hoy = new Date();

    // Añade estos segundos a la fecha actual del sistema
    hoy.setSeconds(Number(expiresIn).valueOf());

    localStorage.setItem("expiresIn", hoy.getTime().toString());
  }

}
