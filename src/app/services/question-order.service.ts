import { Injectable } from '@angular/core';
import { ETag, ITag, ITags } from "../interfaces/tags.interface";
import { TagsService } from "./tags.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionOrderService {
  private questionOrder: ArrayLike<ETag> = [];

  constructor() {
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
    this.set(tagIds);
  }
}
