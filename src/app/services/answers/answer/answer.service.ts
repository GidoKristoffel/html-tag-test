import { Injectable } from '@angular/core';
import { ETag, ITag } from "../../../interfaces/tags.interface";
import { TagsService } from "../../tags/tags.service";
import { RightAnswersService } from "../right-answers/right-answers.service";
import { WrongAnswersService } from "../wrong-answers/wrong-answers.service";
import { SkippedAnswersService } from "../skipped-question/skipped-answers.service";
import { UserAnswerService } from "../user-answer/user-answer.service";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private tagsService: TagsService,
    private rightAnswersService: RightAnswersService,
    private wrongAnswersService: WrongAnswersService,
    private skippedAnswersService: SkippedAnswersService,
    private userAnswerService: UserAnswerService,
  ) {}

  public giveAnswer(answer: string, questionIndex: ETag): void {
    const question: ITag = this.tagsService.get()[questionIndex];

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
    const skippedQuestions: ETag[] = [...this.skippedAnswersService.get(), questionIndex];
    this.skippedAnswersService.set(skippedQuestions);
  }
}
