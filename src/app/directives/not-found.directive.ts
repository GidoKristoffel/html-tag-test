import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { take } from "rxjs";

@UntilDestroy()
@Directive({
  selector: '[httNotFound]',
})
export class NotFoundDirective  implements OnInit, OnChanges {
  @Input('httNotFound') httNotFound: boolean = false;
  private element!: ElementRef;

  @HostBinding('class.directive-not-found-flex') isFlex: boolean = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private translateService: TranslateService
  ) {
    this.initElement();
  }

  ngOnInit(): void  {
    this.watchLanguage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['httNotFound'].currentValue) {
      this.renderer.appendChild(this.el.nativeElement, this.element);
    } else if (changes['httNotFound'].previousValue) {
      this.renderer.removeChild(this.el.nativeElement, this.element);
    }
  }

  private initElement(): void {
    this.translateService
      .get('directive.not-found')
      .pipe(take(1))
      .subscribe((translate: string): void => {
        this.element = this.renderer.createElement('div');
        const text: Renderer2 = this.renderer.createText(translate);
        this.renderer.appendChild(this.element, text);

        this.renderer.setStyle(this.element, 'display', 'flex');
        this.renderer.setStyle(this.element, 'align-items', 'center');
        this.renderer.setStyle(this.element, 'justify-content', 'center');
        this.renderer.setStyle(this.element, 'width', '100%');
        this.renderer.setStyle(this.element, 'height', '27px');
      });
  }

  private watchLanguage(): void {
    this.translateService.onLangChange.pipe(untilDestroyed(this)).subscribe((event: LangChangeEvent): void => {
      this.renderer.setProperty(this.element, 'textContent', event.translations.directive['not-found']);
    });
  }
}
