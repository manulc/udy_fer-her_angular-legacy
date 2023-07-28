import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para realizar peticiones http
import { HttpClientModule } from '@angular/common/http';

// Formularios controlados por Angular
import { FormsModule } from '@angular/forms';

// Nuestros servicios
import { SpotifyService } from './services/spotify.service';

// Componente principal
import { AppComponent } from './app.component';

// Nuestros componentes
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

// Nuestras rutas de navegavilidad entre componentes
import { APP_ROUTING } from './app.routes';

// Nuestros pipes
import { NoImagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { LoadingComponent } from './components/shared/loading/loading.component';


@NgModule({
  declarations: [ // En este array van los componentes y los Pipes
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NoImagePipe,
    DomseguroPipe,
    ArtistComponent,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [ // Aquí van los módulos
    BrowserModule,
    APP_ROUTING, // Para poder realizar la navegabilidad entre componentes
    HttpClientModule, // Para realizar peticiones http
    FormsModule // Para el uso de formularios controlados por Angular en la aplicación
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
