import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(posterUrl: string): string {
    if(posterUrl)
      return `https://image.tmdb.org/t/p/w400${posterUrl}`;

    return "assets/no-image.jpg";
  }

}
