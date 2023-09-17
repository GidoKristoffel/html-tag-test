import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  ETestResultCategories,
  ETestResultStatus,
  ITestResultStatistics
} from "../../../../interfaces/tags.interface";
import { TestResultsService } from "../../../../services/test-results.service";

@Component({
  selector: 'htt-statistic-tabs',
  templateUrl: './statistic-tabs.component.html',
  styleUrls: ['./statistic-tabs.component.scss']
})
export class StatisticTabsComponent implements OnInit {
  public statistics!: ITestResultStatistics;
  @Output() changeTab: EventEmitter<ETestResultStatus[]> = new EventEmitter<ETestResultStatus[]>();
  public readonly testResultCategories = ETestResultCategories;
  public selected: ETestResultCategories = ETestResultCategories.TotalQuestions;
  public tabs: {name: ETestResultCategories, label: string, statKey: keyof ITestResultStatistics}[] = [
    {
      name: this.testResultCategories.RightAnswers,
      label: 'Правильные ответы',
      statKey: 'rightAnswers',
    },
    {
      name: this.testResultCategories.WrongAnswers,
      label: 'Не правильные ответы',
      statKey: 'wrongAnswers',
    },
    {
      name: this.testResultCategories.SkippedAnswers,
      label: 'Пропущенные вопросы',
      statKey: 'skippedQuestions',
    },
    {
      name: this.testResultCategories.TotalQuestions,
      label: 'Всего вопросов',
      statKey: 'totalQuestions',
    },
  ];

  constructor(
    private testResultsService: TestResultsService,
  ) {}

  ngOnInit() {
    this.initStatistics();
  }

  private initStatistics(): void {
    this.statistics = this.testResultsService.getStatistics();
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

    this.changeTab.emit(filterStatus);
  }
}
