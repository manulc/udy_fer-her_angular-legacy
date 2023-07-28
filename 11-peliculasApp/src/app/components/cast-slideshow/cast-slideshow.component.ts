import { AfterViewInit, Component, Input } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html'
})
export class CastSlideshowComponent implements AfterViewInit {
  @Input() cast: Cast[];

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
