import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidacion {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl): ErrorValidacion {
    // "null" significa que la validación pasa
    return control.value?.toLowerCase() === "herrera" ? { noHerrera: true } : null;
  }

  passwordsIguales(pass1Name: string, pass2Name: string): Function {
    return (formGroup: FormGroup): void => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      // "null" significa que la validación pasa
      if(pass1Control.value === pass2Control.value)
        pass2Control.setErrors(null);
      else
        pass2Control.setErrors({ noEsIgual: true });
    };
  }

  // Validador asíncrono - Devuelven una Promesa o un Observable
  existeUsuario(control: FormControl): Promise<ErrorValidacion> | Observable<ErrorValidacion> {
    // Si el control no existe, resolvemos una Promesa inmeditamente
    // Ésto lo hacemos para que no se ejecute el timeout de abajo en caso de que no exista el control
    // "null" significa que la validación pasa
    if(!control.value)
      return Promise.resolve(null);

    return new Promise((resolve, reject) => setTimeout(() => control.value === "strider" ? resolve({ existe: true }) : resolve(null), 3500));
  }
}
