import { Component, OnInit } from '@angular/core';
import { AnswerService } from "../../services/answer.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { ScoreService } from "../../services/score/score.service";

@UntilDestroy()
@Component({
  selector: 'htt-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  public totalQuestionsCount: number = 0;
  public questionsLeftCount: number = 0;
  public skippedQuestionsCount: number = 0;
  public correctAnswerCounter: number = 0;
  public incorrectAnswerCounter: number = 0;

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
    this.initTotalQuestions();
  }

  private initRightAnswersCounter(): void {
    this.scoreService
      .watchRightAnswers()
      .pipe(untilDestroyed(this))
      .subscribe((rightAnswers: number) => {
        this.correctAnswerCounter = rightAnswers;
      });
  }

  private initWrongAnswersCounter(): void {
    this.scoreService
      .watchWrongAnswers()
      .pipe(untilDestroyed(this))
      .subscribe((wrongAnswers: number) => {
        this.incorrectAnswerCounter = wrongAnswers;
      });
  }

  private initTotalQuestions(): void {
    this.scoreService
      .watchTotalQuestions()
      .pipe(untilDestroyed(this))
      .subscribe((totalQuestionsCount: number) => {
        this.totalQuestionsCount = totalQuestionsCount;
      });
  }
}
