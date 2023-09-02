import { Injectable } from '@angular/core';
import { LocalStorageService } from "./local-storage.service";
import { ELocalStorage, ETag } from "../interfaces/tags.interface";

@Injectable({
  providedIn: 'root'
})
export class QuestionNumberService {
  private questionNumber = 0;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.init();
  }

  public get(): number {
    return this.questionNumber;
  }

  public set(questionNumber: number): void {
    this.questionNumber = questionNumber;
    this.save(this.questionNumber);
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
