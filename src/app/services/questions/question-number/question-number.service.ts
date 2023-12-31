import { Injectable } from '@angular/core';
import { LocalStorageService } from "../../caching/storages/local-storage/local-storage.service";
import { ELocalStorage } from "../../../interfaces/tags.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { SaveService } from "../../caching/save/save.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionNumberService {
  private questionNumber: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private localStorageService: LocalStorageService,
    private saveService: SaveService,
  ) {
    this.init();
  }

  public watch(): Observable<number> {
    return this.questionNumber;
  }

  public set(questionNumber: number): void {
    this.questionNumber.next(questionNumber);
    this.saveService.saveLocalStorage(ELocalStorage.QuestionNumber, this.questionNumber.value);
  }

  public nextQuestion(): void {
    this.set(this.questionNumber.value + 1);
  }

  private init(): void {
    const questionNumber: number | null = this.getSaving();
    this.set(questionNumber || 0);
  }

  private getSaving(): number | null {
    let questionNumber: number | string | null = this.localStorageService.getItem(ELocalStorage.QuestionNumber);
    if (questionNumber) {
      return Number(JSON.parse(this.localStorageService.getItem(ELocalStorage.QuestionNumber) as string));
    }
    return null;
  }
}
