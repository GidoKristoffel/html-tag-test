import { Injectable } from '@angular/core';
import { ELocalStorage } from "../../interfaces/tags.interface";
import { LocalStorageService } from "../local-storage.service";
import { AnswerService } from "../answer.service";
import { QuestionNumberService } from "../question-number.service";
import { QuestionOrderService } from "../question-order.service";
import { RightAnswersService } from "../right-answers.service";
import { WrongAnswersService } from "../wrong-answers.service";
import { SkippedQuestionService } from "../skipped-question.service";

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  private localStorageExceptions: ELocalStorage[] = [ELocalStorage.ShowStatistics];
  constructor(
    private localStorageService: LocalStorageService,
    private answerService: AnswerService,
    private questionNumberService: QuestionNumberService,
    private questionOrderService: QuestionOrderService,
    private rightAnswersService: RightAnswersService,
    private wrongAnswersService: WrongAnswersService,
    private skippedQuestionService: SkippedQuestionService,
  ) {}

  public run(): void {
    this.resetLocalStorage();
    this.resetScores();
    this.resetQuestionNumber();
    this.generateQuestionOrder();
  }

  private resetLocalStorage(): void {
    Object.values(ELocalStorage).forEach((key: ELocalStorage) => {
      if (!this.localStorageExceptions.includes(key)) {
        this.localStorageService.removeItem(key);
      }
    });
  }

  private resetScores(): void {
    this.resetRightAnswers();
    this.resetWrongAnswers();
    this.resetSkippedQuestion();
  }

  private resetRightAnswers(): void {
    this.rightAnswersService.set([]);
  }

  private resetWrongAnswers(): void {
    this.wrongAnswersService.set([]);
  }

  private resetSkippedQuestion(): void {
    this.skippedQuestionService.set([]);
  }

  private resetQuestionNumber(): void {
    this.questionNumberService.set(0);
  }

  private generateQuestionOrder(): void {
    this.questionOrderService.generate();
  }
}
