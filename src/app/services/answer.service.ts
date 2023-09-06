import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ELocalStorage, ETag } from "../interfaces/tags.interface";
import { TagsService } from "./tags/tags.service";
import { LocalStorageService } from "./local-storage.service";
import { SaveService } from "./save.service";
import { RightAnswersService } from "./right-answers.service";
import { WrongAnswersService } from "./wrong-answers.service";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private tagsService: TagsService,
    private localStorageService: LocalStorageService,
    private saveService: SaveService,
    private rightAnswersService: RightAnswersService,
    private wrongAnswersService: WrongAnswersService,
  ) {}

  public giveAnswer(answer: string, questionIndex: ETag): void {
    const question = this.tagsService.get()[questionIndex];

    if (question.answer === answer) {
      const rightAnswers: ETag[] = [...this.rightAnswersService.get(), questionIndex];
      this.rightAnswersService.set(rightAnswers);
    } else {
      const wrongAnswers: ETag[] = [...this.wrongAnswersService.get(), questionIndex];
      this.wrongAnswersService.set(wrongAnswers);
    }
  }
}
