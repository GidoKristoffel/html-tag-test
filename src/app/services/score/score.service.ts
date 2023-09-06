import { Injectable } from '@angular/core';
import { tags } from "../../../assets/tags";
import { BehaviorSubject, Observable } from "rxjs";
import { SaveService } from "../save.service";
import { ETag } from "../../interfaces/tags.interface";
import { RightAnswersService } from "../right-answers.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { WrongAnswersService } from "../wrong-answers.service";

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private totalQuestions: number = 0;
  private rightAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private wrongAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private questionsLeft: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private skippedQuestions: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor(
    private saveService: SaveService,
    private rightAnswersService: RightAnswersService,
    private wrongAnswersService: WrongAnswersService,
  ) {
    this.init();
  }

  private init(): void {
    this.initTotalQuestions();
    this.initRightAnswers();
    this.initWrongAnswers();
  }

  // ---------------------------------------Init---------------------------------------

  private initTotalQuestions(): void {
    this.totalQuestions = Object.keys(tags).length;
  }

  private initRightAnswers(): void {
    this.rightAnswersService
      .watch()
      .pipe(untilDestroyed(this))
      .subscribe((rightAnswers: ETag[]) => {
        this.setRightAnswers(rightAnswers.length);
      });
  }

  private initWrongAnswers(): void {
    this.wrongAnswersService
      .watch()
      .pipe(untilDestroyed(this))
      .subscribe((wrongAnswers: ETag[]) => {
        this.setWrongAnswers(wrongAnswers.length);
      });
  }

  private initQuestionsLeft(): void {

  }

  private initSkippedQuestions(): void {

  }

  // ----------------------------------------Set----------------------------------------

  private setRightAnswers(value: number): void {
    this.rightAnswers.next(value);
  }

  private setWrongAnswers(value: number): void {
    this.wrongAnswers.next(value);
  }

  private setQuestionsLeft(value: number): void {
    this.questionsLeft.next(value);
  }

  private setSkippedQuestions(value: number): void {
    this.skippedQuestions.next(value);
  }

  // --------------------------------------Watch--------------------------------------

  public watchRightAnswers(): Observable<number> {
    return this.rightAnswers;
  }

  public watchWrongAnswers(): Observable<number> {
    return this.wrongAnswers;
  }

  public watchQuestionsLeft(): Observable<number> {
    return this.questionsLeft;
  }

  public watchSkippedQuestions(): Observable<number> {
    return this.skippedQuestions;
  }
}
