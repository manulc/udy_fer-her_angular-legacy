import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';

import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "precios", component: PreciosComponent },
  { 
    path: "protegida",
    canActivate: [ AuthGuard ], // Aplicamos el Guard "AuthGuard" a esta ruta. De esta forma, sólo se puede navegar a esta ruta si cumple el Guard, que, en este caso, hace que sólo los usuarios autenticados pueden ir a ella
    component: ProtegidaComponent
  },
  { path: "callback", component: CallbackComponent }, // Esta ruta es para la redirección que hace Auth0 después de la autenticación con éxito(Hemos configurado en Auth0 la ruta de redirección "http://localhost:4200/callback")
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
