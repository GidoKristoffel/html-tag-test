import { Injectable } from '@angular/core';
import { ETag } from "../interfaces/tags.interface";
import { ShuffleService } from "./shuffle.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionOrderService {
  private questionOrder: ArrayLike<ETag> = [];

  constructor(
    private shuffleService: ShuffleService,
  ) {
    this.init();
  }

  public get(): ArrayLike<ETag> {
    return this.questionOrder;
  }

  private set(value: ArrayLike<ETag>): void {
    this.questionOrder = value;
  }

  private init(): void {
    const tagIds = Object.values(ETag);
    const shuffledTagIds = this.shuffleService.runArray(tagIds);
    this.set(shuffledTagIds);
  }
}
