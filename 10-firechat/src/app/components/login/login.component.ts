import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor(private _chatService: ChatService) { }

  login(proveedor: string): void {
    this._chatService.login(proveedor);
  }
}
