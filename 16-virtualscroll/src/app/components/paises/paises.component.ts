import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html'
})
export class PaisesComponent implements OnInit {
  paises: any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get("https://restcountries.com/v2/lang/es")
      .subscribe(paises => this.paises = paises);
  }

  drop(event: CdkDragDrop<any>): void{
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
  }
}
