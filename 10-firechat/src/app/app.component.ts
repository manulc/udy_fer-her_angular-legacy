import { Component } from '@angular/core'; 
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Inyectamos nuestro servicio "ChatService" en una propiedad pública para poder usarla en la vista(HTML)
  constructor(public chatService: ChatService) {
  }
}
