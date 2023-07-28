import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _itemsCollection: AngularFirestoreCollection<Game>;
  // Esta propiedad hace de caché de juegos para el método "getJuegos". Útil para que un componente no haga invocaciones innecesarias a la base de datos de Firestore
  private _games: Game[] =[];

  constructor(private _afs: AngularFirestore) {
    this._itemsCollection = this._afs.collection<Game>("goty");
  }

  // En tiempo real
  cargarDatosJuegos(): Observable<Game[]> {
    return this._itemsCollection.valueChanges();
  }

  getJuegos(): Observable<Game[]> {
    if(this._games.length > 0) 
      return of(this._games);
    
    return this._itemsCollection.get().pipe(map(docsSnapshot => {
      docsSnapshot.forEach(doc => this._games.push(doc.data() as Game));
      return this._games;
    }));
  }

  votarJuego(id: string): Observable<boolean> {
    return this._itemsCollection.doc(id).get()
      .pipe(map(docSnapshot => {
        if(docSnapshot.exists) {
          const game = docSnapshot.data();
          this._itemsCollection.doc(id).update({ votos: game.votos + 1 }).then();
          return true;
        }
        return false;
      }));
  }
}
