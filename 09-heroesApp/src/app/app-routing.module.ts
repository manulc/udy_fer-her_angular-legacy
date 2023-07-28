import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

/* Este módulo ha sido creado mediante el comando "ng g m appRouting --flat" de Angular CLI.
   La opción "--flat" es para que no se cree un directorio */

   const routes: Routes = [
    { path: "heroes", component: HeroesComponent },
    { path: "heroe/:id", component: HeroeComponent },
    { path: "**", pathMatch: "full", redirectTo: "heroes" },
   ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
