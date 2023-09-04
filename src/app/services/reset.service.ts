import { Injectable } from '@angular/core';
import { ELocalStorage } from "../interfaces/tags.interface";
import { LocalStorageService } from "./local-storage.service";
import { AnswerService } from "./answer.service";
import { QuestionNumberService } from "./question-number.service";
import { QuestionOrderService } from "./question-order.service";

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  constructor(
    private localStorageService: LocalStorageService,
    private answerService: AnswerService,
    private questionNumberService: QuestionNumberService,
    private questionOrderService: QuestionOrderService,
  ) {}

  public run(): void {
    this.resetLocalStorage();
    this.resetScores();
    this.resetQuestionNumber();
    this.generateQuestionOrder();
  }

  private resetLocalStorage(): void {
    Object.values(ELocalStorage).forEach((key: string) => {
      this.localStorageService.removeItem(key);
    });
  }

  private resetScores(): void {
    this.resetRightAnswers();
    this.resetWrongAnswers();
  }

  private resetRightAnswers(): void {
    this.answerService.setRightAnswers(0);
  }

  private resetWrongAnswers(): void {
    this.answerService.setWrongAnswers(0);
  }

  private resetQuestionNumber(): void {
    this.questionNumberService.set(0);
  }

  private generateQuestionOrder(): void {
    this.questionOrderService.generate();
  }
}
