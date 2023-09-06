import { Component } from '@angular/core';
import { SettingsService } from "../../services/settings.service";
import { ResetService } from "../../services/reset/reset.service";
import { DialogService } from "../../services/dialog.service";

@Component({
  selector: 'htt-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    private settingService: SettingsService,
    private resetService: ResetService,
    private dialogService: DialogService
  ) {}

  public toggleShowStatistics(): void {
    this.settingService.toggleShowStatistics();
  }

  public resetTest(): void {
    this.dialogService.openReload(() => this.resetService.run());
  }
}
