import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevosAlbumes: any[] = [];
  loading: boolean; // Propiedad que indica si hemos recibido o no los datos solicitados desde la API REST de Spotify para mostrar o no un icono de carga de datos
  error: boolean; // Propiedad que indica si ha habido o no algún error en la obtenicón de datos desde la API REST de Spotify
  mensajeError: string;

  // Inyectamos nuestro servicio "SpotifyService" en la propiedad "_spotify"
  constructor(private _spotify: SpotifyService) {
  }

  ngOnInit() {
    // Ponemos esta 2 propiedades a "false" y a "true" respectivamente para indicar que no hay ningún error en la obtención de datos desde el servicio "_spotify" y para que se muestre el icono de carga de datos
    this.error = false;
    this.loading = true;
    // Llamamos al método "getNewReleases" de nuestro servicio '_spotify' y nos subscribimos al observable que nos devuelve para procesar los datos
    // Cuando nos subscribimos a algún observable, este tiene dos estados(success, cuando todo va bien; error, cuando algo ha ido mal)
    this._spotify.getNewReleases()
      .subscribe((data: any) => {
        this.nuevosAlbumes = data;
        // Una vez que hemos recibido los datos, ponemos esta propiedad a "false" para quitar el icono de carga
        this.loading = false;
      },
      (errorServicio => {
        // Ponemos esta propiedad a "true" para indicar que ha habido un error en la obtención de datos desde la API REST de Spotify
        this.error = true;
        // Una vez que hemos recibido el error, ponemos esta propiedad a "false" para quitar el icono de carga
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      }));
  }

}
