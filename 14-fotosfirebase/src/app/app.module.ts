import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

import { APP_ROUTES } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [ // En este array o arreglo van los Componentes, Pipes y Directivas
    AppComponent,
    FotosComponent,
    CargaComponent,
    NavbarComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
