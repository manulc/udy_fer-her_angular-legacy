import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Game } from 'src/app/interfaces/game.interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  games: Game[] = [];

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
    this._gameService.getJuegos().subscribe(games => this.games = games);
  }

  votarJuego(game: Game): void {
    this._gameService.votarJuego(game.id).subscribe(resp => 
      resp ? Swal.fire("Votación", `Gracias por tu voto a ${game.name}`, "success")
           : Swal.fire("Votación", `No existe un juego con id ${game.id}`, "error"));
  }

}
