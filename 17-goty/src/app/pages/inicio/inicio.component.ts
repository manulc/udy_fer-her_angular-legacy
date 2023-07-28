import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  datosGrafica: { name: string, value: number }[] = [];

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this._gameService.cargarDatosJuegos()
      // Preparamos los datos para la gráfica. La gráfica utiliza un array o arreglo de objetos { name, value }
      .pipe(map(games => games.map(({ name, votos }) => ({ name, value: votos }))))
      .subscribe(datosGrafica => this.datosGrafica = datosGrafica);
  }

}
