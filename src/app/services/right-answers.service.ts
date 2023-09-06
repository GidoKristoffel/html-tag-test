import { Injectable } from '@angular/core';
import { ELocalStorage, ETag } from "../interfaces/tags.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { SaveService } from "./save.service";
import { LoadService } from "./load/load.service";

@Injectable({
  providedIn: 'root'
})
export class RightAnswersService {
  private rightAnswers: BehaviorSubject<ETag[]> = new BehaviorSubject<ETag[]>([]);

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
    return this.rightAnswers.getValue();
  }

  public watch(): Observable<ETag[]> {
    return this.rightAnswers;
  }

  public set(value: ETag[]): void {
    this.rightAnswers.next(value);
    this.saveService.saveLocalStorage(ELocalStorage.RightAnswers, value);
  }

  private getSaving(): ETag[] | null {
    let questionOrder: ETag[] | string | null = this.loadService.loadLocalStorage(ELocalStorage.RightAnswers);
    if (questionOrder) {
      return JSON.parse(questionOrder as string) as ETag[];
    }
    return null;
  }
}
