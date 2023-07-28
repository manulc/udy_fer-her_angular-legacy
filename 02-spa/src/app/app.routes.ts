import { RouterModule, Routes} from '@angular/router'; // Importamos los modulos y librerias de enrutamiento de Angular

// Importamos nuestros componentes para usarlos en las rutas
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesSearchComponent } from './components/heroes-search/heroes-search.component';

// Se trata de una constante que contiene una array de rutas. Aquí es donde definimos nuestras rutas de navegación
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent }, // Para el path o url "/home" vamos a usar el componente "HomeComponent"
    { path: 'about', component: AboutComponent }, // Para el path o url "/about" vamos a usar el componente "AboutComponent"
    { path: 'heroes', component: HeroesComponent }, // Para el path o url "/heroes" vamos a usar el componente "HeroesComponent"
    { path: 'heroes/:termino', component: HeroesSearchComponent }, // Para el path o url "/heroes/:termino" vamos a usar el componente "HeroesSearchComponent"
    { path: 'heroe/:id', component: HeroeComponent }, // Para el path o url "/heroe" vamos a usar el componente "HeroeComponent". Recibe el parámetro "id". Como aquí no hay parámetro "termino", sabe que tiene que volver al componente "HeroesComponent" cuando se pulsa el botón "Regresar"
    { path: '**', pathMatch: 'full', redirectTo: 'home' } // Para cualquier otro path, nos vamos a dirigir a "/home"
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);