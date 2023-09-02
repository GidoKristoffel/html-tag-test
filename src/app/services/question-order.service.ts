import { Injectable } from '@angular/core';
import { ELocalStorage, ETag } from "../interfaces/tags.interface";
import { ShuffleService } from "./shuffle.service";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionOrderService {
  private questionOrder: ArrayLike<ETag> = [];

  constructor(
    private shuffleService: ShuffleService,
    private localStorageService: LocalStorageService,
  ) {
    this.init();
  }

  public get(): ArrayLike<ETag> {
    return this.questionOrder;
  }

  private set(value: ArrayLike<ETag>): void {
    this.questionOrder = value;
    this.save(this.questionOrder);
  }

  private save(value: ArrayLike<ETag>): void {
    this.localStorageService.setItem(ELocalStorage.QuestionOrder, value);
  }

  private getSaving(): ArrayLike<ETag> | null {
    let questionOrder: ArrayLike<ETag> | string | null = this.localStorageService.getItem(ELocalStorage.QuestionOrder);
    if (questionOrder) {
      return JSON.parse(this.localStorageService.getItem(ELocalStorage.QuestionOrder) as string) as ArrayLike<ETag>;
    }
    return null;
  }

  private init(): void {
    const saving = this.getSaving();

    if (saving) {
      this.set(saving);
    } else {
      const tagIds = Object.values(ETag);
      const shuffledTagIds = this.shuffleService.runArray(tagIds);
      this.set(shuffledTagIds);
    }
  }
}
