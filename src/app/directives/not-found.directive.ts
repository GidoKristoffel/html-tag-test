import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[httNotFound]'
})
export class NotFoundDirective  implements OnChanges {
  @Input('httNotFound') httNotFound: boolean = false;
  private element!: ElementRef;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.initElement();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['httNotFound'].currentValue) {
      this.renderer.appendChild(this.el.nativeElement, this.element);
    } else if (changes['httNotFound'].previousValue) {
      this.renderer.removeChild(this.el.nativeElement, this.element);
    }
  }

  private initElement(): void {
    this.element = this.renderer.createElement('div');
    const text = this.renderer.createText('Not found');
    this.renderer.appendChild(this.element, text);

    this.renderer.setStyle(this.element, 'display', 'flex');
    this.renderer.setStyle(this.element, 'align-items', 'center');
    this.renderer.setStyle(this.element, 'justify-content', 'center');
    this.renderer.setStyle(this.element, 'width', '100%');
    this.renderer.setStyle(this.element, 'height', '27px');
  }
}
