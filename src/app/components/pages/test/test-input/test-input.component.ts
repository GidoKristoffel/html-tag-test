import {
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'htt-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements AfterViewInit {
  @ViewChild('input', {read:ElementRef}) input: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('content', {read:ElementRef}) content!: ElementRef<HTMLInputElement>;
  @ViewChild('testInput', {read:ElementRef}) testInput!: ElementRef<HTMLInputElement>;
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() keyupEnter: EventEmitter<void> = new EventEmitter<void>();
  public inputWidth: number = 0;

  public maxInputSize: number = 0;
  public minInputSize: number = 0;

  ngAfterViewInit(): void {
    this.minInputSize = this.content?.nativeElement.clientWidth;
    setTimeout(() => {
      this.maxInputSize = this.testInput?.nativeElement.clientWidth - this.minInputSize;
    }, 0);
  }

  public resizeMaxInputSize(): void {
    debugger;
    this.maxInputSize = this.testInput?.nativeElement.clientWidth;
  }

  public emitValue(value: string): void {
    setTimeout(() => {
      this.inputWidth = this.content.nativeElement.clientWidth;
    }, 0);
    this.valueChange.emit(value);
  }

  public emitKeyupEnter(): void {
    this.keyupEnter.emit();
  }

  public onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (this.content) {
      this.inputWidth = target.value.length > 0 ? this.content.nativeElement.clientWidth : 0;
    }
  }
}
