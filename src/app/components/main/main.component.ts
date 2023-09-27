import { Component } from '@angular/core';
import { DialogService } from "../../services/modal/dialog/dialog.service";

@Component({
  selector: 'htt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(
    private dialogService: DialogService,
  ) {}

  public changeLanguage(): void {
    this.dialogService.openLanguages();
  }
}
