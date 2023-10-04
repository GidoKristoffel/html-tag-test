import { EDialog, TDialogs } from "../app/interfaces/tags.interface";

export const dialogs: TDialogs = {
  [EDialog.Reset]: {
    answer: 'dialog.reset',
    agreeLabel: 'btn.yes',
    disagreeLabel: 'btn.no',
  },
  [EDialog.BackToMainMenu]: {
    answer: 'dialog.back-to-main-menu',
    agreeLabel: 'btn.yes',
    disagreeLabel: 'btn.no',
  },
};
