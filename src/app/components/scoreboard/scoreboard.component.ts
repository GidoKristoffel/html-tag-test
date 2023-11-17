import { Component, DestroyRef, OnInit } from '@angular/core';
import { ScoreService } from "../../services/score/score.service";
import { Observable } from "rxjs";
import { ICounters } from "../../interfaces/tags.interface";
import { counters } from "../../data-structures/scoreboard.structure";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'htt-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  public readonly counterKeys: (keyof ICounters)[] = Object.keys(counters) as (keyof ICounters)[];
  public counters: ICounters = counters;

  constructor(
    private scoreService: ScoreService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.initRightAnswersCounter();
    this.initWrongAnswersCounter();
    this.initTotalQuestionsCounter();
    this.initSkippedQuestions();
    this.initQuestionsLeftCounter();
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
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((questionsLeftCounter: number): void => {
        this.counters[counterName].value =  questionsLeftCounter;
      });
  }
}
