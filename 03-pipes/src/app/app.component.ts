import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Capitán América";
  nombre2: string = "maNueL LOreNZo";
  personajes: string[] = ["Ironman", "Spiderman", "Thor", "Loki", "Groot"];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  heroe: any = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      numero: 20
    }
  };
  fecha = new Date();
  idioma: string = "es";
  videoUrl: string = "https://www.youtube.com/embed/phCArrujlTk";
  activar: boolean = true;

  valorPromesa = new Promise<string>(resolve => setTimeout(() => resolve("LLegó los datos"), 3500));
}
