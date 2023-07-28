import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup;

  constructor(private _fb: FormBuilder, private _validadores: ValidadoresService) {
    this.crearFormulario();
    this.cargarDatosIniciales();
    this.crearListeners();
  }

  ngOnInit(): void {
  }

  get isNombreInvalid(): boolean {
    return this.forma.get("nombre").invalid && this.forma.get("nombre").touched;
  }

  get isApellidoInvalid(): boolean {
    return this.forma.get("apellido").invalid && this.forma.get("apellido").touched;
  }

  get isCorreoInvalid(): boolean {
    return this.forma.get("correo").invalid && this.forma.get("correo").touched;
  }

  get isUsuarioInvalid(): boolean {
    return this.forma.get("usuario").invalid && this.forma.get("usuario").touched;
  }

  get isPass1Invalid(): boolean {
    return this.forma.get("pass1").invalid && this.forma.get("correo").touched;
  }

  get isPass2Invalid(): boolean {
    const pass1: string = this.forma.get("pass1").value;
    const pass2: string = this.forma.get("pass2").value;
    return !(pass1 === pass2);
  }

  get isDistritoInvalid(): boolean {
    return this.forma.get("direccion.distrito").invalid && this.forma.get("direccion.distrito").touched;
  }

  get isCiudadInvalid(): boolean {
    return this.forma.get("direccion.ciudad").invalid && this.forma.get("direccion.ciudad").touched;
  }

  get pasatiempos(): FormArray {
    return this.forma.get("pasatiempos") as FormArray;
  }

  guardar(): void {
    if(this.forma.invalid) {
      // Si el formulario no se ha tocado y es inválido, marcamos aquellos inputs inválidos como tocados o modificados para que se muestren sus mensajes de error correspondientes 
      return Object.values(this.forma.controls).forEach(control => {
        // Si tenemos grupos anidado, es decir, segundos niveles en el objeto de construcción del formulario, hacemos lo mismo en esos niveles
        if(control instanceof FormGroup)
          Object.values(control.controls).forEach(control => control.markAsTouched());
        else
          control.markAsTouched();
      });
    }

    // Elimina los valores de todos los campos del formulario
    this.forma.reset();
  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this._fb.control(""));
  }

  borrarPasatiempo(index: number): void {
    this.pasatiempos.removeAt(index);
  }

  private crearFormulario(): void {
    this.forma = this._fb.group({
      nombre: ["", [Validators.required, Validators.minLength(5)]],
      apellido: ["", [Validators.required, this._validadores.noHerrera]],
      correo: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      usuario: ["", , this._validadores.existeUsuario],
      pass1: ["", Validators.required],
      pass2: ["", Validators.required],
      direccion: this._fb.group({
        distrito: ["", Validators.required],
        ciudad: ["", Validators.required]
      }),
      pasatiempos: this._fb.array([])
    },
    {
      validators: this._validadores.passwordsIguales("pass1", "pass2")
    });
  }

  private cargarDatosIniciales(): void {
    // Si establecemos los valores del formulario usando el método "setValue", estamos obligados a establecer todos los campos, o sino, se producirá un error
    /*this.forma.setValue({
      "nombre": "Manuel",
      "apellido": "Lorenzo",
      "correo": "test@test.com",
      "direccion": {
        "distrito": "Ontario",
        "ciudad": "Ottawa"
      }
    });*/

    // Si establecemos los valores del formulario usando el método "reset", podemos establecer los valores de los campos que queramos
    this.forma.reset({
      "nombre": "Manuel",
      "apellido": "Lorenzo",
      "correo": "test@test.com",
      "pass1": "123",
      "pass2": "123",
      "direccion": {
        "distrito": "Ontario",
        "ciudad": "Ottawa"
      }
    });
  }

  crearListeners() {
    // Tarea que se ejecuta cuando se produce un cambio en el formulario
    //this.forma.valueChanges.subscribe(console.log); // Versión simplificada de la expresión "valor => console.log(valor)"

    // Tarea que se ejecuta cuando se produce un cambio en el estado formulario
    //this.forma.statusChanges.subscribe(status => console.log({ status }));

    // Tarea que se ejecuta cuando se produce un cambio en el campo "nombre" del formulario
    this.forma.get("nombre").valueChanges.subscribe(console.log); // Versión simplificada de la expresión "valor => console.log(valor)"
  }

}
