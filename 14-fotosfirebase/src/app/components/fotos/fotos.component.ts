import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface Item {
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html'
})
export class FotosComponent implements OnInit {
  private _itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private _afs: AngularFirestore) { }

  ngOnInit() {
    this._itemsCollection = this._afs.collection<Item>("img");
    this.items = this._itemsCollection.valueChanges();
  }

}
