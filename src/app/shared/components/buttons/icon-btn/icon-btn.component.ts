import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'htt-icon-btn',
  templateUrl: './icon-btn.component.html',
  styleUrls: ['./icon-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBtnComponent {

  @Input() src: string = '';
  @Input() hover: boolean = false;
}
