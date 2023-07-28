import { NgModule } from '@angular/core';

import { FiltroCompletadasPipe } from './filtro-completadas.pipe';

@NgModule({
  declarations: [FiltroCompletadasPipe],
  exports: [FiltroCompletadasPipe]
})
export class PipesModule { }
