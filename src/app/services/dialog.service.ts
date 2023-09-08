import { Injectable } from '@angular/core';
import { DialogComponent } from "../components/dialog/dialog.component";
import { dialogs } from "../../assets/tags";
import { EDialog, TDialogs } from "../interfaces/tags.interface";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { ModalService } from "./modal.service";

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly params: TDialogs = dialogs;

  constructor(
    private modal: ModalService,

  ) {}

  public openReload(agree: () => void): void {
    const dialogRef = this.modal.open(DialogComponent);
    const instance = dialogRef.instance;

    instance.answer = this.params[EDialog.Reset].answer;
    instance.agreeLabel = this.params[EDialog.Reset].agreeLabel;
    instance.disagreeLabel = this.params[EDialog.Reset].disagreeLabel;

    instance.agree
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        agree();
        this.modal.close(dialogRef);
      });
    instance.disagree
      .pipe(untilDestroyed(this))
      .subscribe(() => this.modal.close(dialogRef));
  }

  public openBackToMainMenu(agree: () => void): void {
    const dialogRef = this.modal.open(DialogComponent);
    const instance = dialogRef.instance;

    instance.answer = this.params[EDialog.BackToMainMenu].answer;
    instance.agreeLabel = this.params[EDialog.BackToMainMenu].agreeLabel;
    instance.disagreeLabel = this.params[EDialog.BackToMainMenu].disagreeLabel;

    instance.agree
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        agree();
        this.modal.close(dialogRef);
      });
    instance.disagree
      .pipe(untilDestroyed(this))
      .subscribe(() => this.modal.close(dialogRef));
  }
}
