import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ETag } from "../interfaces/tags.interface";
import { TagsService } from "./tags.service";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private rightAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private wrongAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private tagsService: TagsService,
  ) { }

  public giveAnswer(answer: string, questionIndex: ETag): void {
    const question = this.tagsService.get()[questionIndex];

    if (question.answer === answer) {
      this.rightAnswers.next(this.rightAnswers.getValue() + 1);
    } else {
      this.wrongAnswers.next(this.wrongAnswers.getValue() + 1);
    }
  }
}
