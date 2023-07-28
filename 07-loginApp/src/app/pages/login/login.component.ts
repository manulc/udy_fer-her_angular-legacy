import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel;
  recordarme: boolean = false;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    const email: string = localStorage.getItem("email") || undefined;

    // Si en "LocalStorage" existe un item con el email del usuario, significa que el usuario previamente seleccionó la opción de recuerdame
    // Por lo tanto, mantenemos su email en el formulario de login y la casilla de recuerdame activada
    if(email) {
      this.usuario.email = email;
      this.recordarme = true;
    }
  }

  login(form: NgForm) {
    if(form.invalid) return;

    Swal.fire({
      allowOutsideClick: false, // Para que el usuario no pueda cerrar la alerta cuando pulsa fuera de ella
      icon: "info",
      text: "Espere por favor"
    });
    Swal.showLoading();
    
    this._auth.login(this.usuario).subscribe(
      resp => {
        Swal.close(); // Aquí ya ha finalizado el proceso de login y cerramos la alerta anterior

        if(this.recordarme)
          localStorage.setItem("email", this.usuario.email);
        else
          localStorage.removeItem("email");

        this._router.navigateByUrl("/home");
      },
      ({ error }) => Swal.fire({
        icon: "error",
        title: "Error al autenticar",
        text: error.error.message
      }));
  }

}
