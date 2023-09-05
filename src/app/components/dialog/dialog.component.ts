import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'htt-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() answer: string = '';
  @Input() agreeLabel: string = '';
  @Input() disagreeLabel: string = '';
  @Output() agree: EventEmitter<void> = new EventEmitter<void>();
  @Output() disagree: EventEmitter<void> = new EventEmitter<void>();

  public agreeEmit(): void {
    this.agree.emit();
  }

  public disagreeEmit(): void {
    this.disagree.emit();
  }

}
