import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ETag, ITags } from "../../interfaces/tags.interface";
import { TagsService } from "../../services/tags/tags.service";
import { QuestionOrderService } from "../../services/question-order.service";
import { QuestionNumberService } from "../../services/question-number.service";
import { AnswerService } from "../../services/answer.service";
import { SettingsService } from "../../services/settings.service";
import { distinctUntilChanged } from "rxjs";
import { ScoreService } from "../../services/score/score.service";
import { Router } from "@angular/router";
import { ResetService } from "../../services/reset/reset.service";
import { TestResultsService } from "../../services/test-results.service";

@Component({
  selector: 'htt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit  {
  @ViewChild("input") input!: ElementRef;

  public tags!: ITags;
  public questionOrder: ArrayLike<ETag> = [];
  public questionNumber: number = 0;
  public answerInput: string = '';
  public showStatistics: boolean = false;

  constructor(
    private tagsService: TagsService,
    private questionOrderService: QuestionOrderService,
    private questionNumberService: QuestionNumberService,
    private answerService: AnswerService,
    private settingService: SettingsService,
    private scoreService: ScoreService,
    private router: Router,
    private resetService: ResetService,
    private testResultsService: TestResultsService,
  ) {}

  ngOnInit() {
    this.init();
  }

  ngAfterViewInit() {
    this.inputFocus();
  }

  public answer(answer: string): void {
    this.answerService.giveAnswer(answer, this.questionOrder[this.questionNumber]);
    this.nextQuestion();
    this.inputFocus();
  }

  private init(): void {
    this.initTags();
    this.initQuestionOrder();
    this.initQuestionNumber();
    this.initShowStatistics();
  }

  private initTags(): void {
    this.tags = this.tagsService.get();
  }

  private initQuestionOrder(): void {
    this.questionOrder = this.questionOrderService.get();
  }

  private initQuestionNumber(): void {
    this.questionNumberService
      .watch()
      .pipe(distinctUntilChanged())
      .subscribe((questionNumber: number) => {
        this.questionNumber = questionNumber;
      });
  }

  private nextQuestion(): void {
    this.clearAnswerInput();

    if (this.scoreService.getQuestionsLeft()) {
      this.questionNumberService.nextQuestion();
    } else {
      this.testResultsService.generate();
      this.router.navigate(['result']).then(() => this.resetService.run());
    }
  }

  private clearAnswerInput(): void {
    this.answerInput = '';
  }

  private initShowStatistics(): void {
    this.settingService
      .watchShowStatistics()
      .pipe(distinctUntilChanged())
      .subscribe((showStatistics: boolean) => {
        this.showStatistics = showStatistics;
      });
  }

  private inputFocus(): void {
    if (this.input) {
      this.input.nativeElement.focus();
    }
  }

  public skipQuestion(): void {
    this.answerService.skipQuestion(this.questionOrder[this.questionNumber]);
    this.nextQuestion();
    this.inputFocus();
  }
}
