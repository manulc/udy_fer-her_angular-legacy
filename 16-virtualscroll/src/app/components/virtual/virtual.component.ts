import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html'
})
export class VirtualComponent {
  // Propiedad con la referencia del elemento "cdk-virtual-scroll-viewport" de la vista
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  personas: number[] = Array(500).fill(0);

  constructor() { }

  irFinal(): void {
    this.viewport.scrollToIndex(this.personas.length);
  }

  irInicio(): void {
    this.viewport.scrollToIndex(0);
  }

  irMitad(): void {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

}
