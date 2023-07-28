import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { environment } from '../environments/environment';


@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapboxKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
