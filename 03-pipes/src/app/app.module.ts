import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';

// Nuestros Pipes personalizados
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

// Registra los idiomas español y francés en la aplicación
registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [ // Además de los componentes, aquí también van los Pipes personalizados
    AppComponent,
    CapitalizadoPipe,
    ContrasenaPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // Configuración para poner por defecto el idioma español en la aplicación
    {
      provide: LOCALE_ID,
      useValue: "es"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
