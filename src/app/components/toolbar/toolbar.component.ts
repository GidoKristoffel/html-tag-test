import { Component } from '@angular/core';
import { SettingsService } from "../../services/settings.service";
import { ResetService } from "../../services/reset.service";

@Component({
  selector: 'htt-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    private settingService: SettingsService,
    private resetService: ResetService,
  ) {}

  public toggleShowStatistics(): void {
    this.settingService.toggleShowStatistics();
  }

  public resetTest(): void {
    this.resetService.run();
  }
}
