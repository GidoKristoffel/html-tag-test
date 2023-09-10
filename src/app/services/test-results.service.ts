import { Injectable } from '@angular/core';
import { ITestResultStatistics } from "../interfaces/tags.interface";
import { RightAnswersService } from "./right-answers.service";
import { WrongAnswersService } from "./wrong-answers.service";
import { SkippedQuestionService } from "./skipped-question.service";

@Injectable({
  providedIn: 'root'
})
export class TestResultsService {
  private statistics!: ITestResultStatistics;


  constructor(
    private rightAnswersService: RightAnswersService,
    private wrongAnswersService: WrongAnswersService,
    private skippedQuestionService: SkippedQuestionService,
  ) {
    this.init();
  }

  private init(): void {
    this.initStatistics();
  }

  private initStatistics(): void {
    this.generateStatistics();
  }

  public generate(): void {
    this.generateStatistics(
      this.rightAnswersService.get().length,
      this.wrongAnswersService.get().length,
      this.skippedQuestionService.get().length
    );
  }

  private generateStatistics(rightAnswers: number = 0, wrongAnswers: number = 0, skippedQuestions: number = 0): void {
    this.statistics = {
      rightAnswers,
      wrongAnswers,
      skippedQuestions,
    };
  }
}
