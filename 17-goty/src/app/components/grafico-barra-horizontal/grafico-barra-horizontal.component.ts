import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {
  @Input() results: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Votos";
  showYAxisLabel = true;
  yAxisLabel = "Juegos";

  colorScheme = "nightLights";

  constructor() {

  }

  onSelect(event): void {
    console.log(event);
  }

}
