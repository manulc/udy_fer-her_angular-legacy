import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../../services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean; // Propiedad que indica si hemos recibido o no los datos solicitados desde la API REST de Spotify para mostrar o no un icono de carga de datos

  // Inyectamos el ActivatedRoute de Angular y el Location de Angular y nuestro servicio "SpotifyService" en las propiedades "_activatedRoute", "_location" y "_spotify" respectivamente
  constructor(private _activatedRoute: ActivatedRoute,
              private _location: Location,
              private _spotify: SpotifyService) {
  }

  ngOnInit() {
    // Obtenemos de la URL el parámetro "id_artista"
    this._activatedRoute.params.pipe(map(params => params['id_artista'])).subscribe(id => {
      // Después de recuperar el id del artista desde la URL, obtenemos los datos y las canciones top de ese artista
      this.getArtista(id);
      this.getTopTracks(id);
    });
  }

  // Método que se encarga de llamar al método "getArtista" de nuestro servicio "_spotify" para obtener los datos de un artista determinado
  getArtista(id: string) {
    // Ponemos esta propiedad a "true" para que se muestre el icono de carga de datos
    this.loadingArtist = true;
    this._spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      // Una vez que hemos recibido los datos, ponemos esta propiedad a "false" para quitar el icono de carga
      this.loadingArtist = false;
    });
  }

  // Método que se encarga de llamar al método "getTopTracks" de nuestro servicio "_spotify" para obtener las canciones top de un artista en concreto
  getTopTracks(id: string){
    this._spotify.getTopTracks(id).subscribe(tracks => {
      this.topTracks = tracks;
    });
  }

  // Método para volver a la ruta anterior
  volver(): void {
    this._location.back();
  }

}
