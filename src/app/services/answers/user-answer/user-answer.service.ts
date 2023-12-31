import { Injectable } from '@angular/core';
import { ELocalStorage, ETag, TUserAnswers } from "../../../interfaces/tags.interface";
import { SaveService } from "../../caching/save/save.service";
import { LoadService } from "../../caching/load/load.service";
import { UtilityService } from "../../utility/utility.service";

@Injectable({
  providedIn: 'root'
})
export class UserAnswerService {
  private userAnswers!: TUserAnswers;

  constructor(
    private saveService: SaveService,
    private loadService: LoadService,
    private utilityService: UtilityService,
  ) {
    this.init();
  }

  private init(): void {
    const saving: TUserAnswers | null = this.getSaving();

    if (saving) {
      this.set(saving);
    } else {
      const userAnswers: TUserAnswers = this.utilityService.initializeObjectWithEmptyStrings<TUserAnswers>(Object.keys(ETag))
      this.set(userAnswers);
    }
  }

  public get(): TUserAnswers {
    return this.userAnswers;
  }

  public set(value: TUserAnswers): void {
    this.userAnswers = value;
    this.saveService.saveLocalStorage(ELocalStorage.UserAnswers, value);
  }

  public setByKey(key: ETag, value: string): void {
    this.userAnswers[key] = value;
    this.saveService.saveLocalStorage(ELocalStorage.UserAnswers, this.userAnswers);
  }

  private getSaving(): TUserAnswers | null {
    let userAnswers: TUserAnswers | string | null = this.loadService.loadLocalStorage(ELocalStorage.UserAnswers);
    if (userAnswers) {
      return JSON.parse(userAnswers as string) as TUserAnswers;
    }
    return null;
  }
}
