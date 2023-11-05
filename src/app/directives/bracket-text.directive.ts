import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[httBracketText]'
})
export class BracketTextDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    this.el.nativeElement.value = `<${value}>`;
  }
}
