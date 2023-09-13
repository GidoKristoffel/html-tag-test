import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SettingsService } from "../../services/settings.service";
import { ResetService } from "../../services/reset/reset.service";
import { DialogService } from "../../services/dialog.service";
import { Router } from "@angular/router";

@Component({
  selector: 'htt-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() showStatisticsBtn: boolean = false;
  @Input() resetTestBtn: boolean = false;
  @Output() back: EventEmitter<void> = new EventEmitter<void>();


  constructor(
    private settingService: SettingsService,
    private resetService: ResetService,
    private dialogService: DialogService,
    private router: Router,
  ) {}

  public toggleShowStatistics(): void {
    this.settingService.toggleShowStatistics();
  }

  public resetTest(): void {
    this.dialogService.openReload(() => this.resetService.run());
  }

  public backToMainMenu(): void {
    this.back.emit();
  }
}
