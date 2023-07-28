import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html'
})
export class ListasComponent implements OnInit {
  listas: Lista[];
  @Input() terminadas: boolean;
  @ViewChild(IonList) ionList: IonList; // Obtenemos la referencia del elemento de tipo IonList de la vista(HTML) asociada a este componente

  constructor(
    private _deseosService: DeseosService,
    private _router: Router,
    private _alertCtrl: AlertController
  ) { }

  ngOnInit(): void {
    this.listas = this._deseosService.obtenerListas();
  }

  listaSeleccionada(idLista: number): void {
    this._router.navigateByUrl(`${this._router.url}/agregar/${idLista}`);
  }

  borrarLista(id: number): void {
    this._deseosService.borrarLista(id);
  }

  async editarTituloLista(lista: Lista): Promise<void> {
    const alert = await this._alertCtrl.create({
      header: "Editar título lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => this.ionList.closeSlidingItems()
        },
        {
          text: "Editar",
          handler: datosForm => {
            const { titulo }: { titulo: string } = datosForm;

            if(titulo.length > 0)
              this._deseosService.editarTituloLista(lista, titulo);
            

            this.ionList.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
  }


}
