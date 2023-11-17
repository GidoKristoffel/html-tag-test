import { ComponentRef, DestroyRef, Injectable } from '@angular/core';
import { DialogComponent } from "../../../components/dialog/dialog.component";
import { EDialog, TDialogs } from "../../../interfaces/tags.interface";
import { ModalService } from "../modal.service";
import { LanguageComponent } from "../../../components/language/language.component";
import { dialogs } from "../../../../assets/dialogs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly params: TDialogs = dialogs;

  constructor(
    private modal: ModalService,
    private destroyRef: DestroyRef
  ) {}

  public openReload(agree: () => void): void {
    const dialogRef: ComponentRef<DialogComponent> = this.modal.open(DialogComponent);
    const instance: DialogComponent = dialogRef.instance;

    instance.answer = this.params[EDialog.Reset].answer;
    instance.agreeLabel = this.params[EDialog.Reset].agreeLabel;
    instance.disagreeLabel = this.params[EDialog.Reset].disagreeLabel;

    instance.agree
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        agree();
        this.modal.close(dialogRef);
      });
    instance.disagree
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.modal.close(dialogRef));
  }

  public openBackToMainMenu(agree: () => void): void {
    const dialogRef: ComponentRef<DialogComponent> = this.modal.open(DialogComponent);
    const instance: DialogComponent = dialogRef.instance;

    instance.answer = this.params[EDialog.BackToMainMenu].answer;
    instance.agreeLabel = this.params[EDialog.BackToMainMenu].agreeLabel;
    instance.disagreeLabel = this.params[EDialog.BackToMainMenu].disagreeLabel;

    instance.agree
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        agree();
        this.modal.close(dialogRef);
      });
    instance.disagree
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.modal.close(dialogRef));
  }

  public openLanguages(): void {
    const dialogRef: ComponentRef<LanguageComponent> = this.modal.open(LanguageComponent);
    const instance: LanguageComponent = dialogRef.instance;

    instance.close
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.modal.close(dialogRef));
  }
}
