import { DestroyRef, Injectable } from '@angular/core';
import { tags } from "../../../assets/tags";
import { BehaviorSubject, merge, Observable } from "rxjs";
import { ETag } from "../../interfaces/tags.interface";
import { RightAnswersService } from "../answers/right-answers/right-answers.service";
import { WrongAnswersService } from "../answers/wrong-answers/wrong-answers.service";
import { SkippedAnswersService } from "../answers/skipped-question/skipped-answers.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private totalQuestions: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private rightAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private wrongAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private questionsLeft: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private skippedQuestions: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private rightAnswersService: RightAnswersService,
    private wrongAnswersService: WrongAnswersService,
    private skippedAnswersService: SkippedAnswersService,
    private destroyRef: DestroyRef
  ) {
    this.init();
  }

  private init(): void {
    this.initTotalQuestions();
    this.initRightAnswers();
    this.initWrongAnswers();
    this.initSkippedQuestions();
    this.initQuestionsLeft();
  }

  // ---------------------------------------Init---------------------------------------

  private initTotalQuestions(): void {
    this.setTotalQuestions(Object.keys(tags).length);
  }

  private initRightAnswers(): void {
    this.rightAnswersService
      .watch()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((rightAnswers: ETag[]): void => {
        this.setRightAnswers(rightAnswers.length);
      });
  }

  private initWrongAnswers(): void {
    this.wrongAnswersService
      .watch()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((wrongAnswers: ETag[]): void => {
        this.setWrongAnswers(wrongAnswers.length);
      });
  }

  private initQuestionsLeft(): void {
    merge(
      this.watchTotalQuestions().pipe(takeUntilDestroyed(this.destroyRef)),
      this.watchRightAnswers().pipe(takeUntilDestroyed(this.destroyRef)),
      this.watchWrongAnswers().pipe(takeUntilDestroyed(this.destroyRef)),
      this.watchSkippedQuestions().pipe(takeUntilDestroyed(this.destroyRef)),
    ).subscribe((): void => {
      const questionsLeft: number =
        this.getTotalQuestions() - this.getRightAnswers() - this.getWrongAnswers() - this.getSkippedQuestions();
      this.setQuestionsLeft(questionsLeft);
    });
  }

  private initSkippedQuestions(): void {
    this.skippedAnswersService
      .watch()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((skippedQuestion: ETag[]) => {
        this.setSkippedQuestions(skippedQuestion.length);
      });
  }

  // --------------------------------------Watch--------------------------------------

  public watchTotalQuestions(): Observable<number> {
    return this.totalQuestions;
  }

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

  // -------------------------------------Get-------------------------------------

  private getTotalQuestions(): number {
    return this.totalQuestions.getValue();
  }

  private getRightAnswers(): number {
    return this.rightAnswers.getValue();
  }

  private getWrongAnswers(): number {
    return this.wrongAnswers.getValue();
  }

  public getQuestionsLeft(): number {
    return this.questionsLeft.getValue();
  }

  private getSkippedQuestions(): number {
    return this.skippedQuestions.getValue();
  }

  // ----------------------------------------Set----------------------------------------

  private setTotalQuestions(value: number): void {
    this.totalQuestions.next(value);
  }

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
}
