import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ELocalStorage, ETag } from "../interfaces/tags.interface";
import { SaveService } from "./save.service";
import { LoadService } from "./load/load.service";

@Injectable({
  providedIn: 'root'
})
export class SkippedQuestionService {
  private skippedQuestions: BehaviorSubject<ETag[]> = new BehaviorSubject<ETag[]>([]);

  constructor(
    private saveService: SaveService,
    private loadService: LoadService,
  ) {
    this.init();
  }

  private init(): void {
    const saving: ETag[] | null = this.getSaving();
    this.set(saving || []);
  }

  public get(): ETag[] {
    return this.skippedQuestions.getValue();
  }

  public watch(): Observable<ETag[]> {
    return this.skippedQuestions;
  }

  public set(value: ETag[]): void {
    this.skippedQuestions.next(value);
    this.saveService.saveLocalStorage(ELocalStorage.SkippedQuestions, value);
  }

  private getSaving(): ETag[] | null {
    let skippedQuestions: ETag[] | string | null = this.loadService.loadLocalStorage(ELocalStorage.SkippedQuestions);
    if (skippedQuestions) {
      return JSON.parse(skippedQuestions as string) as ETag[];
    }
    return null;
  }
}
