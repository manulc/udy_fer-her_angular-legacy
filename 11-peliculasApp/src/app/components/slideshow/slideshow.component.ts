import { Component, Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from 'src/app/interfaces/cartelera-response';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterViewInit {
  @Input() peliculas: Movie[];
  private _swiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this._swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true
    });
  }

  onSlidePrev(): void {
    this._swiper.slidePrev();
  }

  onSlideNext(): void {
    this._swiper.slideNext();
  }
}
