import { Injectable } from '@angular/core';
import { ELocalStorage } from "../../interfaces/tags.interface";
import { Observable } from "rxjs";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { SaveService } from "./save/save.service";
import { LoadService } from "./load/load.service";

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor(
    private saveService: SaveService,
    protected loadService: LoadService,
  ) {}

  public init<T>(watchFunction: () => Observable<T>, setFunction: (value: T | null) => void, key: ELocalStorage): void {
    const saving: T | null = this.getSaving<T>(key);
    setFunction(saving);

    watchFunction()
      .pipe(untilDestroyed(this))
      .subscribe((value: T) => {
        this.saveService.saveLocalStorage(key, value);
      });
  }

  private getSaving<T>(key: ELocalStorage): T | null {
    let questionOrder: T | string | null = this.loadService.loadLocalStorage(key);
    if (questionOrder) {
      return JSON.parse(questionOrder as string) as T;
    }
    return null;
  }
}
