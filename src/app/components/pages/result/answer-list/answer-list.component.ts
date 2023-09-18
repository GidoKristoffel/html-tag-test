import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ETestResultStatus, ITestResultsAnswers } from "../../../../interfaces/tags.interface";
import { TestResultsService } from "../../../../services/test-results.service";

@Component({
  selector: 'htt-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit, OnChanges {
  @Input() filter: ETestResultStatus[] = [];
  public readonly testResultStatus = ETestResultStatus;
  public answers: ITestResultsAnswers[] = [];

  constructor(
    private testResultsService: TestResultsService,
  ) {}

  ngOnInit() {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filter']) {
      this.filterChange(changes['filter'].currentValue);
    }
  }

  private init(): void {
    this.initAnswers();
  }

  private initAnswers(): void {
    this.answers = this.testResultsService.getAnswers();
  }

  public filterChange(filterStatus: ETestResultStatus[]): void {
    this.answers = this.testResultsService.getAnswers().filter((answer: ITestResultsAnswers) => filterStatus.includes(answer.status));
  }
}
