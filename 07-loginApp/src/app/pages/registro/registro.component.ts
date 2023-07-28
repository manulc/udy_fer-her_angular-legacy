import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/Usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  usuario: UsuarioModel;
  recordarme: boolean = false;

  constructor(private _auth: AuthService, private _router: Router) {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if(form.invalid) return;

    Swal.fire({
      allowOutsideClick: false, // Para que el usuario no pueda cerrar la alerta cuando pulsa fuera de ella
      icon: "info",
      text: "Espere por favor"
    });
    Swal.showLoading();
    
    this._auth.crearUsuario(this.usuario).subscribe(
      resp => {
        Swal.close(); // Aquí ya ha finalizado el proceso de registro y cerramos la alerta anterior

        if(this.recordarme)
          localStorage.setItem("email", this.usuario.email);
        else
          localStorage.removeItem("email");

        this._router.navigateByUrl("/home");
      }, 
      ({ error }) => Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: error.error.message
      }));

  }


}
