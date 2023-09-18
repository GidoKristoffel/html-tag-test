import { Component, OnInit } from '@angular/core';
import { AnswerService } from "../../services/answers/answer/answer.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { ScoreService } from "../../services/score/score.service";
import { distinctUntilChanged, Observable } from "rxjs";
import { ICounters } from "../../interfaces/tags.interface";
import { counters } from "../../data-structures/scoreboard.structure";
import { SettingsService } from "../../services/settings.service";

@UntilDestroy()
@Component({
  selector: 'htt-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  public readonly counterKeys: (keyof ICounters)[] = Object.keys(counters) as (keyof ICounters)[];
  public counters: ICounters = counters;
  public showStatistics: boolean = false;

  constructor(
    private answerService: AnswerService,
    private scoreService: ScoreService,
    private settingService: SettingsService,
  ) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.initRightAnswersCounter();
    this.initWrongAnswersCounter();
    this.initTotalQuestionsCounter();
    this.initSkippedQuestions();
    this.initQuestionsLeftCounter();
    this.initShowStatistics();
  }

  private initRightAnswersCounter(): void {
    this.initCounter(() => this.scoreService.watchRightAnswers(), 'correctAnswer');
  }

  private initWrongAnswersCounter(): void {
    this.initCounter(() => this.scoreService.watchWrongAnswers(), 'incorrectAnswer');
  }

  private initTotalQuestionsCounter(): void {
    this.initCounter(() => this.scoreService.watchTotalQuestions(), 'totalQuestions');
  }

  private initSkippedQuestions(): void {
    this.initCounter(() => this.scoreService.watchSkippedQuestions(), 'skippedQuestions');
  }

  private initQuestionsLeftCounter(): void {
    this.initCounter(() => this.scoreService.watchQuestionsLeft(), 'questionsLeft');
  }

  private initCounter(watchFunction: () => Observable<number>, counterName: keyof ICounters): void {
    watchFunction()
      .pipe(untilDestroyed(this))
      .subscribe((questionsLeftCounter: number) => {
        this.counters[counterName].value =  questionsLeftCounter;
      });
  }

  private initShowStatistics(): void {
    this.settingService
      .watchShowStatistics()
      .pipe(distinctUntilChanged())
      .subscribe((showStatistics: boolean) => {
        this.showStatistics = showStatistics;
      });
  }
}
