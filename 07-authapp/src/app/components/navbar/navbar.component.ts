import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  // Inyectamos el servicio "AuthService" en una propiedad pública para poder acceder a él directamente en la vista(HTML) asociada a este componente
  constructor(public authService: AuthService) { }

}
