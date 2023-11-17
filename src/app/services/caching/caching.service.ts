import { DestroyRef, Injectable } from '@angular/core';
import { ELocalStorage } from "../../interfaces/tags.interface";
import { Observable } from "rxjs";
import { SaveService } from "./save/save.service";
import { LoadService } from "./load/load.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  constructor(
    private saveService: SaveService,
    protected loadService: LoadService,
    private destroyRef: DestroyRef
  ) {}

  public init<T>(watchFunction: () => Observable<T>, setFunction: (value: T | null) => void, key: ELocalStorage): void {
    const saving: T | null = this.getSaving<T>(key);
    setFunction(saving);

    watchFunction()
      .pipe(takeUntilDestroyed(this.destroyRef))
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
