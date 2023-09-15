import { Component, OnInit } from '@angular/core';
import { TestResultsService } from "../../../services/test-results.service";
import {
  ETestResultCategories,
  ETestResultStatus,
  ITestResultsAnswers,
  ITestResultStatistics
} from "../../../interfaces/tags.interface";
import { Router } from "@angular/router";
import { ResetService } from "../../../services/reset/reset.service";

@Component({
  selector: 'htt-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public statistics!: ITestResultStatistics;
  public answers: ITestResultsAnswers[] = [];
  public readonly testResultCategories = ETestResultCategories;
  public readonly testResultStatus = ETestResultStatus;
  public selected: ETestResultCategories = ETestResultCategories.TotalQuestions;
  constructor(
    private testResultsService: TestResultsService,
    private router: Router,
    private resetService: ResetService,
  ) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.initStatistics();
    this.initAnswers();
  }

  private initStatistics(): void {
    this.statistics = this.testResultsService.getStatistics();
  }

  private initAnswers(): void {
    this.answers = this.testResultsService.getAnswers();
  }

  public select(category: ETestResultCategories): void {
    this.selected = category;
    this.filter(category);
  }

  private filter(category: ETestResultCategories): void {
    const filterStatus: ETestResultStatus[] = [];

    if (category === ETestResultCategories.RightAnswers) {
      filterStatus.push(ETestResultStatus.RightAnswer);
    } else if (category === ETestResultCategories.WrongAnswers) {
      filterStatus.push(ETestResultStatus.WrongAnswer);
    } else if (category === ETestResultCategories.SkippedAnswers) {
      filterStatus.push(ETestResultStatus.SkippedAnswer);
    } else {
      filterStatus.push(ETestResultStatus.RightAnswer, ETestResultStatus.WrongAnswer, ETestResultStatus.SkippedAnswer);
    }

    this.answers = this.testResultsService.getAnswers().filter((answer: ITestResultsAnswers) => filterStatus.includes(answer.status));
  }

  public backToMainMenu(): void {
    this.router.navigate(['main-menu']).then(() => this.resetService.resetTestResult());
  }
}
