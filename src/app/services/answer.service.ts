import { Injectable } from '@angular/core';
import { ETag } from "../interfaces/tags.interface";
import { TagsService } from "./tags/tags.service";
import { LocalStorageService } from "./caching/storages/local-storage/local-storage.service";
import { SaveService } from "./caching/save/save.service";
import { RightAnswersService } from "./right-answers.service";
import { WrongAnswersService } from "./wrong-answers.service";
import { SkippedQuestionService } from "./skipped-question.service";
import { UserAnswerService } from "./user-answer.service";

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
    private skippedQuestionService: SkippedQuestionService,
    private userAnswerService: UserAnswerService,
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
    this.userAnswerService.setByKey(questionIndex, answer);
  }

  public skipQuestion(questionIndex: ETag): void {
    const skippedQuestions: ETag[] = [...this.skippedQuestionService.get(), questionIndex];
    this.skippedQuestionService.set(skippedQuestions);
  }
}
