import { Component } from '@angular/core';
import { TestResultsService } from "../../../services/test-results.service";
import {
  ETestResultStatus,
} from "../../../interfaces/tags.interface";
import { Router } from "@angular/router";
import { ResetService } from "../../../services/reset/reset.service";
import { NavigationService } from "../../../services/navigation/navigation.service";

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
    private navigationService: NavigationService,
  ) {}

  public backToMainMenu(): void {
    this.navigationService.toMainMenu();
    this.resetService.resetTestResult();
  }

  public changeTab(filter: ETestResultStatus[]): void {
    this.filter = filter;
  }
}
