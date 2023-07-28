import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  // Inyectamos el DomSanitizer de Angular
  constructor(private _domSanitizer: DomSanitizer) {

  }

  transform(value: string, url: string): SafeResourceUrl {
    // Hace segura y confiable una URL(Para eliminar el error "Error: unsafe value used in a resource URL context" cuando, por ejemplo, utilizamos la URL de un vídeo de Youtube para insertarlo en el DOM)
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
