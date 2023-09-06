import { Component, OnInit } from '@angular/core';
import { EDialog, ETag, IDialog, ITags } from "../../interfaces/tags.interface";
import { TagsService } from "../../services/tags/tags.service";
import { QuestionOrderService } from "../../services/question-order.service";
import { QuestionNumberService } from "../../services/question-number.service";
import { distinctUntilChanged } from "rxjs";
import { AnswerService } from "../../services/answer.service";
import { SettingsService } from "../../services/settings.service";
import { dialogs } from "../../../assets/tags";

@Component({
  selector: 'htt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tags!: ITags;
  public questionOrder: ArrayLike<ETag> = [];
  public questionNumber: number = 0;
  public answerInput: string = '';
  public showStatistics: boolean = false;
  public resetDialogs: IDialog = dialogs[EDialog.Reset];

  constructor(
    private tagsService: TagsService,
    private questionOrderService: QuestionOrderService,
    private questionNumberService: QuestionNumberService,
    private answerService: AnswerService,
    private settingService: SettingsService,
  ) {
  }

  ngOnInit() {
    this.init();
  }

  public answer(answer: string): void {
    this.answerService.giveAnswer(answer, this.questionOrder[this.questionNumber]);
    this.nextQuestion();
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
    this.questionNumberService.nextQuestion();
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
}
