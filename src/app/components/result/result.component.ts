import { Component, OnInit } from '@angular/core';
import { TestResultsService } from "../../services/test-results.service";
import {
  ETag,
  ETestResultCategories,
  ITestResultsAnswers,
  ITestResultStatistics
} from "../../interfaces/tags.interface";

@Component({
  selector: 'htt-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public statistics!: ITestResultStatistics;
  public answers: ITestResultsAnswers[] = [];
  public readonly testResultCategories = ETestResultCategories;
  public selected: ETestResultCategories = ETestResultCategories.TotalQuestions;
  constructor(
    private testResultsService: TestResultsService,
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
    // this.answers = this.testResultsService.getAnswers();
    this.answers = [
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Big,
        userAnswer: '<big>',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: 'userAnswer222',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: '',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: 'userAnswer222',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: 'userAnswer222',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: 'userAnswer222',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: 'userAnswer222',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: 'userAnswer222',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: 'userAnswer222',
      },
      {
        question: {
          en: 'question question question question question question question 222 222',
          ua: 'question question question question question question question 222 222',
          ru: 'question question question question question question question 222 222',
        },
        trueAnswer: ETag.Colgroup,
        userAnswer: 'userAnswer222',
      }
    ];
  }

  public select(category: ETestResultCategories): void {
    this.selected = category;
  }
}
