import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { FileItem } from '../models/file-item';


@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {
  private CARPETA_IMAGENES: string = "img";

  constructor(private _db: AngularFirestore) { }

  cargarImagenes(imagenes: FileItem[]): void {
    const storageRef = firebase.storage().ref();

    for(const imagen of imagenes) {
      imagen.estaSubiendo = true;

      if(imagen.progreso === 100)
        continue;

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.CARPETA_IMAGENES}/${imagen.nombre}`)
        .put(imagen.archivo);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => imagen.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          error => console.log("Error al subir la imagen", error),
          () => {
            console.log("Imagen cargada correctamente");
            uploadTask.snapshot.ref.getDownloadURL()
              .then(url => {
                imagen.url = url;
                imagen.estaSubiendo = false;
                this._guardarImagen({ nombre: imagen.nombre, url: imagen.url });
              });
          }
        );
    }
  }

  private _guardarImagen(imagen: { nombre: string, url: string }): void {
    this._db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
