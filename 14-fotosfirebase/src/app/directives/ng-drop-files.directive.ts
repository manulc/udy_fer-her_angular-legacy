import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

/* Esta Directiva ha sido generada con el comando "ng g d directives/ngDropFiles --spec=false" de Angular CLI.
   De esta forma, la Directiva se registra automáticamente en el módulo principal de la aplicación "app.module.ts".
   La opción "--spec=false" es para que no genere el archivo de pruebas */

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  // Para recibir las imágenes desde los componentes padre, es decir, desde cualquier componente que tenga elementos que usan esta Directiva
  @Input() archivos: FileItem[]; 
  // Para pasar un dato booleano a los componentes padre, es decir, a cualquier componente que tenga elementos que usan esta Directiva
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  // Cuando se produzca el evento "dragover"(ratón sobre el elemento Drag & Drop), ejecutamos este método que emitirá otro evento(Por eso ponemos la expresión '["$event"]') con un dato booleano
  @HostListener("dragover", ["$event"])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  // Cuando se produzca el evento "dragleave"(cuando el ratón deja el elemento Drag & Drop), ejecutamos este método que emitirá otro evento(Por eso ponemos la expresión '["$event"]') con un dato booleano
  @HostListener("dragleave", ["$event"])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  // Cuando se produzca el evento "drop"(cuando se arrastra un archivo y se suelta en el elemento Drag & Drop), ejecutamos este método que emitirá otro evento(Por eso ponemos la expresión '["$event"]') con un dato booleano
  @HostListener("drop", ["$event"])
  public onDrop(event: any) {
    const transferencia = this._getTransferencia(event);

    if(!transferencia)
      return;

    this._extraerArchivos(transferencia.files);

    this._prevenirDetener(event);

    this.mouseSobre.emit(false);
  }

  // Compatibilidad con navegadores - Algunos navegadores obtienen la transferencia de "event.dataTransfer" y otros de "event.original.dataTransfer"
  private _getTransferencia(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.original.dataTransfer;
  }

  private _extraerArchivos(listaArchivos: FileList) {
    for(const propiedad in Object.getOwnPropertyNames(listaArchivos)) {
      const archivoTemp = listaArchivos[propiedad];

      if(this._puedeSerCargadoArchivo(archivoTemp))
        this.archivos.push(new FileItem(archivoTemp));
    }
  }

  // Validaciones

  // Para que el navegador no abra el archivo cuando se arrastra y se suelta sobre el elemento Drag & Drop(comportamiento por defecto)
  private _prevenirDetener(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private _puedeSerCargadoArchivo(archivo: File): boolean {
    return !this._existeArchivo(archivo.name) && this._esImagen(archivo.type);
  }

  private _existeArchivo(nombreArchivo: string): boolean {
    const archivoEncontrado: FileItem = this.archivos.find(archivo => archivo.nombre === nombreArchivo);
    if(archivoEncontrado) {
      console.log(`El archivo ${nombreArchivo} ya está agregado`);
      return true;
    }

    return false;
  }

  private _esImagen(tipoArchivo: string): boolean {
    return (tipoArchivo === "" || tipoArchivo === undefined) ? false : tipoArchivo.startsWith("image");
  }
}
