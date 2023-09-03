import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";
import { ELocalStorage } from "../interfaces/tags.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionNumberService {
  private questionNumber: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.init();
  }

  public watch(): Observable<number> {
    return this.questionNumber;
  }

  public set(questionNumber: number): void {
    this.questionNumber.next(questionNumber);
    this.save(this.questionNumber.value);
  }

  public nextQuestion(): void {
    this.set(this.questionNumber.value + 1);
  }

  private getSaving(): number | null {
    let questionNumber: number | string | null = this.localStorageService.getItem(ELocalStorage.QuestionOrder);
    if (questionNumber) {
      return Number(JSON.parse(this.localStorageService.getItem(ELocalStorage.QuestionNumber) as string));
    }
    return null;
  }

  private save(questionNumber: number): void {
    this.localStorageService.setItem(ELocalStorage.QuestionNumber, questionNumber);
  }

  private init(): void {
    const questionNumber = this.getSaving();
    this.set(questionNumber || 0);
  }
}
