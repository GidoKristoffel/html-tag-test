import { NotFoundDirective } from './not-found.directive';
import { ElementRef, Renderer2 } from "@angular/core";
import { TestBed } from "@angular/core/testing";

export class MockElementRef extends ElementRef {}

describe('NotFoundDirective', () => {
  let el: ElementRef;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useClass: MockElementRef,
        },
        Renderer2,
      ],
    });
  });

  it('should create an instance', () => {
    el = TestBed.inject(ElementRef);
    renderer = TestBed.inject(Renderer2);
    const directive = new NotFoundDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
