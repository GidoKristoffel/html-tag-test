import { Component, OnInit } from '@angular/core';
import { ETag, ITags } from "../../interfaces/tags.interface";
import { TagsService } from "../../services/tags.service";
import { QuestionOrderService } from "../../services/question-order.service";
import { QuestionNumberService } from "../../services/question-number.service";
import { distinctUntilChanged } from "rxjs";
import { AnswerService } from "../../services/answer.service";

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

  constructor(
    private tagsService: TagsService,
    private questionOrderService: QuestionOrderService,
    private questionNumberService: QuestionNumberService,
    private answerService: AnswerService,
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
}
