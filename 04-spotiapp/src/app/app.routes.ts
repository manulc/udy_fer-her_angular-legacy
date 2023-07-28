import { RouterModule, Routes} from '@angular/router'; // Importamos los modulos y librerias de enrutamiento de Angular

// Importamos nuestros componentes para asociarlos a rutas
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

// Se trata de una constante que contiene una array de rutas. Aquí es donde definimos nuestras rutas de navegación
const APP_ROUTES: Routes = [
 { path: 'home', component: HomeComponent }, // Para el path o url "/home" vamos a usar el componente "HomeComponent"
 { path: 'search', component: SearchComponent }, // Para el path o url "/search" vamos a usar el componente "SearchComponent"
 { path: 'artist/:id_artista', component: ArtistComponent }, // Para el path o url "/artist/:id" vamos a usar el componente "ArtistComponent"
 { path: '', pathMatch: 'full', redirectTo: 'home' }, // Para una ruta vacía "" nos vamos al "home"
 { path: '**', pathMatch: 'full', redirectTo: 'home' } // Para cualquier otro path que no sea alguna de las arriba, nos vamos a "home"
];

// El objeto con la propiedad "useHash" es opcional pero es recomendable utilizarlo para evitar problemas de navegabilidad cuando la aplicación se despliegue en el servidor
// Cuando se activa, los enlaces son de la manera "http://localhost:4200/#/home". En caso contrario, son de la forma "http://localhost:4200/home"
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });