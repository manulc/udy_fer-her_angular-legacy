import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/interfaces/mensaje.interface';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  mensaje: string = "";
  chats: Mensaje[] = [];

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
    const elementoHTML = document.getElementById("app-mensajes");
    this.chatService.cargarMensajes().subscribe(chats => {
      this.chats = chats;
      // Para mantener el scroll en la parte baja del chat
      // Usamos un timeout para dar tiempo a que Angular renderice los datos para después ejecutar esta instrucción que coloca el scroll
      setTimeout(() => elementoHTML.scrollTop = elementoHTML.scrollHeight, 20);
    });
  }

  enviarMensaje(): void {
    if(this.mensaje.length === 0)
      return;

    this.chatService.agregarMensaje(this.mensaje)
      .then(() => this.mensaje = "") // Si el mensaje se envío correctamente, lo vaciamos para que el input asociado a esta propiedad "mensaje" se vacíe también
      .catch(err => console.error("Error al guardar", err));
  }

}
