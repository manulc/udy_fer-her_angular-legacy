import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {
  @Input() items: any[] = []; // Con el decorador "@Input" indicamos que el valor de esta propiedad "items" va a ser recibido desde otros componentes padre. En este caso, le pasamos el valor desde los componentes padre "HomeComponent" y "SearchComponent"

  // Inyectamos el Router de Angula en la propiedad "_router"
  constructor(private _router: Router) {
  }

  // El argumento de entrada de este método "item" puede ser un artista o un álbum debido a que puede ejecutarse desde el componente "SearchComponent" o desde el componente "HomeComponent"
  // Si se ejecuta desde el componente "HomeComponent", el item se trata de un álbum, y si se ejecuta desde el componente "SearchComponente", el item se trata de un artista
  verArtista(item: any) {
    let artistaId;

    // Si el item se trata de un artista, obtenemos su id directamente
    if(item.type === "artist")
      artistaId = item.id;
    // En caso contrario, se trata de un álbum y, en este caso, obtenemos el id del primer artista de ese álbum porque puede haber varios
    else
      artistaId = item.artists[0].id;

    // Una vez obtenido el id del artista, navegamos a la ruta "artist/:id_artista" asociada al componente "ArtistComponent"
    this._router.navigate(["artist/", artistaId]);
  }

}
