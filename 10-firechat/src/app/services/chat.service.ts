import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private _itemsCollection: AngularFirestoreCollection<Mensaje>;
  usuario: any = {};

  constructor(private _afs: AngularFirestore, private _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe(usuario => {
      if(!usuario)
        return;
      
      this.usuario.nombre =  usuario.displayName;
      this.usuario.uid =  usuario.uid;
    });
  }

  login(proveedor: string): void {
    if(proveedor === "google")
      this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    else
      this._afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout(): void {
    this._afAuth.auth.signOut();
    this.usuario = {};
  }

  cargarMensajes(): Observable<Mensaje[]> {
    // Es posible que obtengamos los mensajes en orden distinto a su creación o envío. Por esta razón, creamos una query para que nos devuelva los mensajes ordenados por su fecha de creación
    // Además, como puede haber una gran cantidad de mensajes creados, sólo queremos obtener una cantidad límitada de los últimos mensajes creados(En este caso, los 5 últimos)
    this._itemsCollection = this._afs.collection<Mensaje>("chats", ref => ref.orderBy("fecha", "desc").limit(5));
    return this._itemsCollection.valueChanges()
      .pipe(tap(mensajes => mensajes.reverse())); // Damos la vuelta al array o arreglo de mensajes para que en el chat se muestre el último mensaje creado en el último lugar(abajo del todo)
  }

  agregarMensaje(texto: string): Promise<any> {
    const mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };

    return this._itemsCollection.add(mensaje);
  }
}
