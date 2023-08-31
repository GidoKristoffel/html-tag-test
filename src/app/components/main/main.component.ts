import { Component, OnInit } from '@angular/core';
import { ETag, ITags } from "../../interfaces/tags.interface";
import { TagsService } from "../../services/tags.service";
import { QuestionOrderService } from "../../services/question-order.service";

@Component({
  selector: 'htt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tags!: ITags;
  public questionOrder: ArrayLike<ETag> = [];
  public questionNumber: number = 0;

  constructor(
    private tagsService: TagsService,
    private questionOrderService: QuestionOrderService
  ) {
  }

  ngOnInit() {
    this.init();
  }

  public answer(): void {
    this.nextQuestion();
  }

  private init(): void {
    this.initTags();
    this.initQuestionOrder();
  }

  private initTags(): void {
    this.tags = this.tagsService.get();
  }

  private initQuestionOrder(): void {
    this.questionOrder = this.questionOrderService.get();
  }

  private nextQuestion(): void {
    this.questionNumber++;
  }
}
