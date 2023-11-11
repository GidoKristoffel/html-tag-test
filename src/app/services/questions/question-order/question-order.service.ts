import { Injectable } from '@angular/core';
import { ELocalStorage, ETag } from "../../../interfaces/tags.interface";
import { ShuffleService } from "../../shuffle/shuffle.service";
import { LocalStorageService } from "../../caching/storages/local-storage/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionOrderService {
  private questionOrder: ETag[] = [];

  constructor(
    private shuffleService: ShuffleService,
    private localStorageService: LocalStorageService,
  ) {
    this.init();
  }

  public get(): ETag[] {
    return this.questionOrder;
  }

  private set(value: ETag[]): void {
    this.questionOrder = value;
    this.save(this.questionOrder);
  }

  private save(value: ETag[]): void {
    this.localStorageService.setItem(ELocalStorage.QuestionOrder, value);
  }

  private getSaving(): ETag[] | null {
    let questionOrder: ETag[] | string | null = this.localStorageService.getItem(ELocalStorage.QuestionOrder);
    if (questionOrder) {
      return JSON.parse(this.localStorageService.getItem(ELocalStorage.QuestionOrder) as string) as ETag[];
    }
    return null;
  }

  public generate(): void {
    const tagIds: ETag[] = Object.values(ETag);
    const shuffledTagIds: ETag[] = this.shuffleService.runArray<ETag>(tagIds);
    this.set(shuffledTagIds);
  }

  private init(): void {
    const saving: ETag[] | null = this.getSaving();

    if (saving) {
      this.set(saving);
    } else {
      this.generate();
    }
  }
}
