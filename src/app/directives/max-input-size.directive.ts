import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[httMaxInputSize]'
})
export class MaxInputSizeDirective implements AfterViewInit {
  @Input() httMaxInputSize: number = 0;
  private contentElement!: HTMLSpanElement;
  private contentText!: Renderer2;

  constructor(private el: ElementRef<HTMLInputElement>, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    // setTimeout(() => {
    //   const input: HTMLInputElement = this.el.nativeElement;
    //
    //   const newSize: number = (value.length <= this.httMaxInputSize) ? (value.length) : this.httMaxInputSize;
    //   console.log('value: ', value);
    //   console.log('httMaxInputSize: ', this.httMaxInputSize);
    //   console.log('newSize: ', newSize);
    //   console.log('input: ', this.el);
    //   input.setAttribute('size', newSize.toString());
    // }, 0);
    this.renderer.setProperty(this.contentText, 'data', value);
    console.log('contentElement: ', this.contentElement.clientWidth);
    if (this.contentElement.clientWidth) {
      if (this.contentElement.clientWidth < this.httMaxInputSize) {
        this.renderer.setStyle(this.el.nativeElement, 'width', this.contentElement.clientWidth + 'px');
      }
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    }
      console.log('contentElement: ', this.el.nativeElement.clientWidth);
  }

  ngAfterViewInit(): void {
    this.initContentElement();
    // const span = this.renderer.createElement('span');
    // const text = this.renderer.createText('Hello, world!');
    // this.renderer.appendChild(span, text);
    // this.renderer.setStyle(span, 'visibility', 'hidden'); // скрыть элемент отображения
    //
    // this.renderer.appendChild(this.el.nativeElement, span);
    //
    // this.checkElementSize(span);
    //
    // // Симуляция изменения текста
    // setTimeout(() => {
    //   this.renderer.setProperty(text, 'data', 'New text dynamically changed');
    //   this.checkElementSize(span);
    // }, 1000);
  }

  private initContentElement(): void {
    this.contentElement = this.renderer.createElement('span');
    this.contentText = this.renderer.createText('');
    this.renderer.appendChild(this.contentElement, this.contentText);
    this.renderer.setStyle(this.contentElement, 'width', 'min-content');
    this.renderer.setStyle(this.contentElement, 'visibility', 'hidden');
    this.renderer.setStyle(this.contentElement, 'height', '0');
    this.renderer.appendChild(this.el.nativeElement.parentElement, this.contentElement);

    console.log('el: ', this.el);
    console.log('contentElement: ', this.contentElement.style.width);
    this.el.nativeElement.style.width = this.contentElement.style.width + 'px';
  }

  checkElementSize(element: HTMLElement) {
    const width = element.offsetWidth; // получить ширину элемента
    const height = element.offsetHeight; // получить высоту элемента
    console.log('Width:', width, 'Height:', height);
  }

}
