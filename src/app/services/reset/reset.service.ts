import { Injectable } from '@angular/core';
import { ELocalStorage } from "../../interfaces/tags.interface";
import { LocalStorageService } from "../caching/storages/local-storage/local-storage.service";
import { AnswerService } from "../answers/answer/answer.service";
import { QuestionNumberService } from "../questions/question-number/question-number.service";
import { QuestionOrderService } from "../questions/question-order/question-order.service";
import { RightAnswersService } from "../answers/right-answers/right-answers.service";
import { WrongAnswersService } from "../answers/wrong-answers/wrong-answers.service";
import { SkippedAnswersService } from "../answers/skipped-question/skipped-answers.service";
import { TestResultsService } from "../test-results.service";

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  private localStorageExceptions: ELocalStorage[] = [ELocalStorage.ShowStatistics, ELocalStorage.TestResult, ELocalStorage.Language];
  constructor(
    private localStorageService: LocalStorageService,
    private answerService: AnswerService,
    private questionNumberService: QuestionNumberService,
    private questionOrderService: QuestionOrderService,
    private rightAnswersService: RightAnswersService,
    private wrongAnswersService: WrongAnswersService,
    private skippedAnswersService: SkippedAnswersService,
    private testResultsService: TestResultsService,
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
    this.skippedAnswersService.set([]);
  }

  private resetQuestionNumber(): void {
    this.questionNumberService.set(0);
  }

  private generateQuestionOrder(): void {
    this.questionOrderService.generate();
  }

  public resetTestResult(): void {
    this.localStorageService.removeItem(ELocalStorage.TestResult);
    this.localStorageService.removeItem(ELocalStorage.UserAnswers);
    this.testResultsService.reset();
  }
}
