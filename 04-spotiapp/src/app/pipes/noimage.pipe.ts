import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'noimage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): string {
    // Ruta de la imagen por defecto en caso de que no existan las imágenes
    const noimage = "assets/img/noimage.png";

    // Si "images" es null o no hay imágenes en el array o arreglo, devolvemos la ruta de la imagen por defecto
    if(!images || images.length == 0)
      return noimage;
    
    // En caso contrario, devolvemos la url de la primera imagen
    return images[0].url;
  }

}
