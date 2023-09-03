import { Component, OnInit } from '@angular/core';
import { AnswerService } from "../../services/answer.service";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: 'htt-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  public rightAnswers: number = 0;
  public wrongAnswers: number = 0;

  constructor(
    private answerService: AnswerService
  ) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.initRightAnswers();
    this.initWrongAnswers();
  }

  private initRightAnswers(): void {
    this.answerService
      .watchRightAnswers()
      .pipe(distinctUntilChanged())
      .subscribe((rightAnswers: number) => {
        this.rightAnswers = rightAnswers;
      });
  }

  private initWrongAnswers(): void {
    this.answerService
      .watchWrongAnswers()
      .pipe(distinctUntilChanged())
      .subscribe((wrongAnswers: number) => {
        this.wrongAnswers = wrongAnswers;
      });
  }
}
