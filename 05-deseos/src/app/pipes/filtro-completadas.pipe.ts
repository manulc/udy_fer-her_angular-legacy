import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletadas',
  pure: false
})
export class FiltroCompletadasPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {
    return listas.filter(lista => lista.terminada === completada);
  }

}
