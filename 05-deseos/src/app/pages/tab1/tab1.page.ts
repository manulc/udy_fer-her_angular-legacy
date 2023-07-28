import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html'
})
export class Tab1Page {

  constructor(
    private _deseosService: DeseosService,
    private _router: Router,
    private _alertCtrl: AlertController
  ) {
  }

  async agregarLista(): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: "Nueva lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => console.log("Cancelar")
        },
        {
          text: "Crear",
          handler: datosForm => {
            const { titulo }: { titulo: string } = datosForm;

            if(titulo.length === 0)
              return;

            const id: number = this._deseosService.crearLista(titulo);

            this._router.navigateByUrl(`/tabs/tab1/agregar/${id}`);
          }
        }
      ]
    });

    alert.present();
  }

}
