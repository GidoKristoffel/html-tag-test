import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ELocalStorage, ETag } from "../interfaces/tags.interface";
import { SaveService } from "./save.service";
import { LoadService } from "./load/load.service";

@Injectable({
  providedIn: 'root'
})
export class WrongAnswersService {
  private wrongAnswers: BehaviorSubject<ETag[]> = new BehaviorSubject<ETag[]>([]);

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
    return this.wrongAnswers.getValue();
  }

  public watch(): Observable<ETag[]> {
    return this.wrongAnswers;
  }

  public set(value: ETag[]): void {
    this.wrongAnswers.next(value);
    this.saveService.saveLocalStorage(ELocalStorage.WrongAnswers, value);
  }

  private getSaving(): ETag[] | null {
    let questionOrder: ETag[] | string | null = this.loadService.loadLocalStorage(ELocalStorage.WrongAnswers);
    if (questionOrder) {
      return JSON.parse(questionOrder as string) as ETag[];
    }
    return null;
  }
}
