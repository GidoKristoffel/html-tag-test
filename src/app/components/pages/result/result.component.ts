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
  public answers: ITestResultsAnswers[] = [];
  public readonly testResultStatus = ETestResultStatus;
  constructor(
    private testResultsService: TestResultsService,
    private router: Router,
    private resetService: ResetService,
  ) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.initAnswers();
  }

  private initAnswers(): void {
    this.answers = this.testResultsService.getAnswers();
  }

  public backToMainMenu(): void {
    this.router.navigate(['main-menu']).then(() => this.resetService.resetTestResult());
  }

  public changeTab(filterStatus: ETestResultStatus[]): void {
    this.answers = this.testResultsService.getAnswers().filter((answer: ITestResultsAnswers) => filterStatus.includes(answer.status));
  }
}
