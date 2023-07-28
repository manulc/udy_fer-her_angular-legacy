import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

/* Este servicio ha sido creado usando el comando "ng g s services/spotify --spec=false"
   La opción "--spec=false" es para que no genere el archivo de pruebas unitarias/integración */

/* El patrón de diseño "Observable" indica que hay uno o varios sujetos observables(Por ejemplo, "Observable<Cliente[]>" -> "Cliente[]" sería un sujeto observable)
   que son escuchados u observados por los observadores(se suscriben a los observables) y que cuando sufren algún tipo de cambio(los observables), los observadores
   ejecutan una determinada tarea. Con este patrón, se trabaja de forma reactiva y asíncrona.*/

/* Las peticiones Http que se realizan devuelven un observable que contiene toda la información la petición */

// Nota: Este objeto con la propiedad "providedIn: 'root'" permite que no haga falta registrar este servicio en el módulo principal de la aplicación "app.module.ts"
// Es decir, ese proceso de registro manual es opcional si a este decorador se le pasa este objeto con esta propiedad "providedIn: 'root'"
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  // Url base de Spotify para realizar las peticiones a su API REST
  urlSpotify: string = "https://api.spotify.com/v1/";
  // Token de sguridad JWT para poder usar la API REST de Spotify(Expira cada hora)
  token: string = "";

  // Inyectamos el módulo "HttpClient" de Angular en la propiedad "_http"
  constructor(private _http: HttpClient) {
    console.log("Spotify Service listo para usarse");
  }

  // Devuelve un objeto "HttpHeaders" con una cabecera "authorization" que contiene el token JWT de acceso a los recursos de la API REST de Spotify(Expira cada hora)
  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  // Método que realiza una petición http de tipo Get a la API REST de Spotify a partir de una url creada usando una query que le pasamos al método y a partir también de una cabecera que contiene el token JWT de seguridad
  getQuery(query: string) {
    const url = this.urlSpotify + query;
    const headers = this.getHeaders();
    return this._http.get(url, { 'headers': headers });
  }

  // Realiza una petición http de tipo GET a la API REST de Spotify para obtener los artistas que coincidan con el término de búsqueda(limitado a 20 artistas)
  getArtistas(termino: string) {
    // Llamamos a nuestro método "getQuery" que va a encargarse de crear la url de la petición http de tipo Get, de realizar dicha petición con la cabecera que contiene el token JWT de seguridad y de devolver el observable con los resultados de dicha petición
    // Mediante el método "pipe" y el operador "map" podemos filtrar toda la información recibida en la petición http para quedarnos con aquella que nos interesa
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
      .pipe(map((data: any) => data["artists"].items));
  }

  // Realiza una petición http de tipo GET a la API REST de Spotify para obtener la información de un artista a partir de su id
  getArtista(id: string) {
    // Llamamos a nuestro método "getQuery" que va a encargarse de crear la url de la petición http de tipo Get, de realizar dicha petición con la cabecera que contiene el token JWT de seguridad y de devolver el observable con los resultados de dicha petición
    return this.getQuery(`artists/${ id }`);
  }

  // Realiza una petición http de tipo GET a la API REST de Spotify para obtener la información de las canciones top de un artista a partir de su id
  getTopTracks(id:string){  
    // Llamamos a nuestro método "getQuery" que va a encargarse de crear la url de la petición http de tipo Get, de realizar dicha petición con la cabecera que contiene el token JWT de seguridad y de devolver el observable con los resultados de dicha petición
    // Mediante el método "pipe" y el operador "map" podemos filtrar toda la información recibida en la petición http para quedarnos con aquella que nos interesa
    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
      .pipe(map((data: any) => data.tracks));
  }

  // Realiza una petición http de tipo GET a la API REST de Spotify para obtener los álbumes más novedosos(limitado a 20 álbumes)
  getNewReleases(){
    // Llamamos a nuestro método "getQuery" que va a encargarse de crear la url de la petición http de tipo Get, de realizar dicha petición con la cabecera que contiene el token JWT de seguridad y de devolver el observable con los resultados de dicha petición
    // Mediante el método "pipe" y el operador "map" podemos filtrar toda la información recibida en la petición http para quedarnos con aquella que nos interesa
    return this.getQuery("browse/new-releases?limit=20")
      .pipe(map((data: any) => data.albums.items ));
  }

}
