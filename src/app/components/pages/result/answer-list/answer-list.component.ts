import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ELang, ETestResultStatus, ITestResultsAnswers } from "../../../../interfaces/tags.interface";
import { TestResultsService } from "../../../../services/test-results.service";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'htt-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit, OnChanges {
  @Input() filter: ETestResultStatus[] = [];
  public readonly testResultStatus = ETestResultStatus;
  public answers: ITestResultsAnswers[] = [];
  public currentLang: ELang = this.translateService.currentLang as ELang || ELang.English;

  constructor(
    private testResultsService: TestResultsService,
    private translateService: TranslateService,
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
    this.initTranslate();
  }

  private initAnswers(): void {
    this.answers = this.testResultsService.getAnswers();
  }

  public filterChange(filterStatus: ETestResultStatus[]): void {
    this.answers = this.testResultsService.getAnswers().filter((answer: ITestResultsAnswers) => filterStatus.includes(answer.status));
  }

  private initTranslate(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      if ((<any>Object).values(ELang).includes(event.lang)) {
        this.currentLang = event.lang as ELang;
      }
    });
  }
}
