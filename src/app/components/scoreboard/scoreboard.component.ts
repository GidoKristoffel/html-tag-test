import { Component, OnInit } from '@angular/core';
import { AnswerService } from "../../services/answer.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { ScoreService } from "../../services/score/score.service";
import { ICounter } from "../../interfaces/tags.interface";
import { Observable } from "rxjs";


interface ICounters {
  totalQuestions: ICounter;
  questionsLeft: ICounter;
  correctAnswer: ICounter;
  incorrectAnswer: ICounter;
  skippedQuestions: ICounter;
}

@UntilDestroy()
@Component({
  selector: 'htt-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  public counters: ICounters = {
    totalQuestions: {
      name: 'Всего вопросов',
      value: 0,
      className: '',
    },
    questionsLeft: {
      name: 'Осталось вопросов',
      value: 0,
      className: '',
    },
    correctAnswer: {
      name: 'Верно',
      value: 0,
      className: 'correct',
    },
    incorrectAnswer: {
      name: 'Не верно',
      value: 0,
      className: 'incorrect',
    },
    skippedQuestions: {
      name: 'Пропущено',
      value: 0,
      className: '',
    }
  };
  public readonly counterKeys: (keyof ICounters)[] = Object.keys(this.counters) as (keyof ICounters)[];

  constructor(
    private answerService: AnswerService,
    private scoreService: ScoreService,
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
}
