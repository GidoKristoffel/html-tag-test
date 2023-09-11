import { Injectable } from '@angular/core';
import {
  ELocalStorage,
  ETag,
  ETestResultStatus, ISavedResults,
  ITags,
  ITestResultsAnswers,
  ITestResultStatistics,
  TUserAnswers
} from "../interfaces/tags.interface";
import { RightAnswersService } from "./right-answers.service";
import { WrongAnswersService } from "./wrong-answers.service";
import { SkippedQuestionService } from "./skipped-question.service";
import { TagsService } from "./tags/tags.service";
import { QuestionOrderService } from "./question-order.service";
import { UserAnswerService } from "./user-answer.service";
import { SaveService } from "./save.service";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class TestResultsService {
  private statistics!: ITestResultStatistics;
  private answers: ITestResultsAnswers[] = [];
  private rightAnswers: ETag[] = [];
  private wrongAnswers: ETag[] = [];
  private skippedQuestion: ETag[] = [];
  private questionOrder: ETag[] = [];
  private userAnswers!: TUserAnswers;
  private tags!: ITags;


  constructor(
    private rightAnswersService: RightAnswersService,
    private wrongAnswersService: WrongAnswersService,
    private skippedQuestionService: SkippedQuestionService,
    private tagsService: TagsService,
    private questionOrderService: QuestionOrderService,
    private userAnswerService: UserAnswerService,
    private saveService: SaveService,
    private localStorageService: LocalStorageService,
  ) {
    this.init();
  }

  private init(): void {
    this.initStatistics();

    const saving: ISavedResults | null = this.getSaving();
    if (saving) {
      this.generateStatistics(
        saving.statistics.rightAnswers,
        saving.statistics.wrongAnswers,
        saving.statistics.skippedQuestions,
        saving.statistics.totalQuestions,
      );
      this.answers = saving.answers;
    }
  }

  private initStatistics(): void {
    this.generateStatistics();
  }

  private generateAnswers(): void {
    this.questionOrder.forEach((trueAnswer: ETag) => {
      const answer: ITestResultsAnswers = {
        question: this.tags[trueAnswer].question,
        trueAnswer,
        userAnswer: this.userAnswers[trueAnswer],
        status: this.getStatus(trueAnswer, this.userAnswers[trueAnswer]),
      };
      this.answers.push(answer);
    });
  }

  public generate(): void {
    this.getAnswerStatistics();
    this.generateStatistics(
      this.rightAnswers.length,
      this.wrongAnswers.length,
      this.skippedQuestion.length,
      Object.keys(this.tags).length,
    );
    this.generateAnswers();
    this.save();
  }

  private save(): void {
    const result: ISavedResults = {
      statistics: this.statistics,
      answers: this.answers,
    };
    this.saveService.saveLocalStorage(ELocalStorage.TestResult, result);
  }

  private getSaving(): ISavedResults | null {
    let questionOrder: ISavedResults | string | null = this.localStorageService.getItem(ELocalStorage.TestResult);
    if (questionOrder) {
      return JSON.parse(this.localStorageService.getItem(ELocalStorage.TestResult) as string) as ISavedResults;
    }
    return null;
  }

  private generateStatistics(
    rightAnswers: number = 0,
    wrongAnswers: number = 0,
    skippedQuestions: number = 0,
    totalQuestions: number = 0
  ): void {
    this.statistics = {
      rightAnswers,
      wrongAnswers,
      skippedQuestions,
      totalQuestions,
    };
  }

  public getStatistics(): ITestResultStatistics {
    return this.statistics;
  }

  public getAnswers(): ITestResultsAnswers[] {
    return this.answers;
  }

  private getAnswerStatistics(): void {
    this.rightAnswers = this.rightAnswersService.get();
    this.wrongAnswers = this.wrongAnswersService.get();
    this.skippedQuestion = this.skippedQuestionService.get();
    this.questionOrder = this.questionOrderService.get();
    this.userAnswers = this.userAnswerService.get();
    this.tags = this.tagsService.get();
  }

  private getStatus(trueAnswer: ETag, userAnswer: string): ETestResultStatus {
    return !userAnswer ? ETestResultStatus.SkippedAnswer : userAnswer === trueAnswer ? ETestResultStatus.RightAnswer : ETestResultStatus.WrongAnswer;
  }
}
