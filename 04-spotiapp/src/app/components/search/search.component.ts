import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino: string = '';
  artistas: any[] = [];
  loading: boolean; // Propiedad que indica si hemos recibido o no los datos solicitados desde la API REST de Spotify para mostrar o no un icono de carga de datos

  // Inyectamos nuestro servicio "SpotifyService" en la propiedad "_spotify"
  constructor(private _spotify: SpotifyService ) {
  }

  buscarArtista() {
    // Si no hay término de búsqueda, no hacemos nada
    if(this.termino.length == 0)
      return;

    // Ponemos esta propiedad a "true" para que se muestre el icono de carga de datos
    this.loading = true;
    // Invocamos a al método "getArtistas" de nuestro servicio "_spotify" para obtener la información de los artistas de la API REST de Spotify
    // La invocación anterior nos devuelve un observable con la información solicitada y nos subscribimos
    this._spotify.getArtistas(this.termino)
      .subscribe((resp: any) => {
        this.artistas = resp;
        // Una vez que hemos recibido la información, ponemos esta propiedad a "false" para quitar el icono de carga de datos
        this.loading = false;
      });
  }

}
