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
  public totalQuestionsCounter: number = 0;
  public questionsLeftCounter: number = 0;
  public skippedQuestionsCounter: number = 0;
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
    this.initTotalQuestionsCounter();
    this.initSkippedQuestions();
    this.initQuestionsLeftCounter();
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

  private initTotalQuestionsCounter(): void {
    this.scoreService
      .watchTotalQuestions()
      .pipe(untilDestroyed(this))
      .subscribe((totalQuestionsCount: number) => {
        this.totalQuestionsCounter = totalQuestionsCount;
      });
  }

  private initSkippedQuestions(): void {
    this.scoreService
      .watchSkippedQuestions()
      .pipe(untilDestroyed(this))
      .subscribe((skippedQuestionsCount: number) => {
        this.skippedQuestionsCounter = skippedQuestionsCount;
      });
  }

  private initQuestionsLeftCounter(): void {
    this.scoreService
      .watchQuestionsLeft()
      .pipe(untilDestroyed(this))
      .subscribe((questionsLeftCounter: number) => {
        this.questionsLeftCounter = questionsLeftCounter;
    });
  }
}
