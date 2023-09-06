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
  public wrongAnswers: number = 0;
  public totalQuestions: number = 0;
  public questionsLeft: number = 0;
  public skippedQuestions: number = 0;
  public correctAnswerCounter: number = 0;
  public incorrecAnswerCounter: number = 0;

  constructor(
    private answerService: AnswerService,
    private scoreService: ScoreService,
  ) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.initRightAnswersCounter();
    this.initWrongAnswers();
  }

  private initRightAnswersCounter(): void {
    this.scoreService
      .watchRightAnswers()
      .pipe(untilDestroyed(this))
      .subscribe((rightAnswers: number) => {
        this.correctAnswerCounter = rightAnswers;
      });
  }

  private initWrongAnswers(): void {
    this.scoreService
      .watchWrongAnswers()
      .pipe(untilDestroyed(this))
      .subscribe((wrongAnswers: number) => {
        this.incorrecAnswerCounter = wrongAnswers;
      });
  }
}
