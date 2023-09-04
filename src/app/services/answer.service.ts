import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ELocalStorage, ETag } from "../interfaces/tags.interface";
import { TagsService } from "./tags.service";
import { LocalStorageService } from "./local-storage.service";
import { SaveService } from "./save.service";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private rightAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private wrongAnswers: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private tagsService: TagsService,
    private localStorageService: LocalStorageService,
    private saveService: SaveService,
  ) {
    this.init();
  }

  public giveAnswer(answer: string, questionIndex: ETag): void {
    const question = this.tagsService.get()[questionIndex];

    if (question.answer === answer) {
      this.setRightAnswers(this.rightAnswers.getValue() + 1);
    } else {
      this.setWrongAnswers(this.wrongAnswers.getValue() + 1);
    }
  }

  public watchRightAnswers(): Observable<number> {
    return this.rightAnswers;
  }

  public watchWrongAnswers(): Observable<number> {
    return this.wrongAnswers;
  }

  public setRightAnswers(value: number): void {
    this.rightAnswers.next(value);
    this.saveService.saveLocalStorage(ELocalStorage.RightAnswers, value);
  }

  public setWrongAnswers(value: number): void {
    this.wrongAnswers.next(value);
    this.saveService.saveLocalStorage(ELocalStorage.WrongAnswers, value);
  }

  private init(): void {
    this.initRightAnswers();
    this.initWrongAnswers();
  }

  private initRightAnswers(): void {
    let rightAnswers: number | string | null = this.localStorageService.getItem(ELocalStorage.RightAnswers);
    this.setRightAnswers(rightAnswers ? +rightAnswers : 0);
  }

  private initWrongAnswers(): void {
    let wrongAnswers: number | string | null = this.localStorageService.getItem(ELocalStorage.WrongAnswers);
    this.setWrongAnswers(wrongAnswers ? +wrongAnswers : 0);
  }
}
