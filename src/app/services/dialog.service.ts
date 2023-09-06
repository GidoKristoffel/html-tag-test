import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from "../components/dialog/dialog.component";
import { dialogs } from "../../assets/tags";
import { EDialog, TDialogs } from "../interfaces/tags.interface";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly params: TDialogs = dialogs;
  private readonly config: MatDialogConfig = {
    backdropClass: 'dialog-backdrop',
    panelClass: 'dialog-panel',
    disableClose: true,
    autoFocus: false,
  };

  constructor(
    private dialog: MatDialog
  ) {}

  public openReload(agree: () => void): void {
    const dialogRef = this.dialog.open(DialogComponent, this.config);
    const instance = dialogRef.componentInstance;

    instance.answer = this.params[EDialog.Reset].answer;
    instance.agreeLabel = this.params[EDialog.Reset].agreeLabel;
    instance.disagreeLabel = this.params[EDialog.Reset].disagreeLabel;

    instance.agree
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        agree();
        dialogRef.close()
      });
    instance.disagree
      .pipe(untilDestroyed(this))
      .subscribe(() => dialogRef.close());
  }
}
