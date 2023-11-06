import {
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
export class TestInputComponent {
  @ViewChild('input', {read:ElementRef}) input: ElementRef<HTMLInputElement> | undefined;
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() keyupEnter: EventEmitter<void> = new EventEmitter<void>();

  public readonly maxInputLength: number = 39;

  public emitValue(value: string): void {
    this.valueChange.emit(value);
  }

  public emitKeyupEnter(): void {
    this.keyupEnter.emit();
  }
}
