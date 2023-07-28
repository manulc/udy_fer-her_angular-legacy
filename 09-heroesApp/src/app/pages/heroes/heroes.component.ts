import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[]  = [];
  cargando: boolean = false;

  constructor(private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.cargando = true;
    this._heroesService.obtenerHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.cargando = false;
    });
  }

  eliminarHeroe(heroe: HeroeModel): void {
    Swal.fire({
      title: "¿Está seguro?",
      text: `¿Está seguro que desea eliminar a ${heroe.nombre}?`,
      type: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if(resp.value) {
        // Nota: Pasamos al método "eliminarHeroe" el id del héroe usando "!" para indicar a TypeScript que, en este caso, el id no es nulo 
        // Ésto es debido a que en nuestra clase modelo "HeroeModel" el tipo de la propiedad "id" puede ser un string o null
        // Si no usamos "!", se produce el error "Argument of type 'string | null' is not assignable to parameter of type 'string'"
        this._heroesService.eliminarHeroe(heroe.id!)
          .subscribe(resp => this.heroes = this.heroes.filter(({ id }) => id !== heroe.id));
      }
    });
  }

}
