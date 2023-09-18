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
export class ResultComponent {
  public filter: ETestResultStatus[] = [];

  public readonly testResultStatus = ETestResultStatus;
  constructor(
    private testResultsService: TestResultsService,
    private router: Router,
    private resetService: ResetService,
  ) {}

  public backToMainMenu(): void {
    this.router.navigate(['main-menu']).then(() => this.resetService.resetTestResult());
  }

  public changeTab(filter: ETestResultStatus[]): void {
    this.filter = filter;
  }
}
