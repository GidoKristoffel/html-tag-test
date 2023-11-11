import { Injectable } from '@angular/core';
import { ELocalStorage, EPages } from "../../../interfaces/tags.interface";
import { CachingService } from "../../caching/caching.service";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {
  private currentPage: BehaviorSubject<EPages> = new BehaviorSubject<EPages>(EPages.MainMenu);

  constructor(
    private cachingService: CachingService,
  ) {
    this.initCaching();
  }

  private initCaching(): void {
    this.cachingService
      .init<EPages>(
        () => this.watch(),
        (saving: EPages | null): void => {
          if (saving) {
            this.set(saving);
          }
        },
        ELocalStorage.CurrentPage
      );
  }

  public get(): EPages {
    return this.currentPage.getValue();
  }

  public set(page: EPages): void {
    this.currentPage.next(page);
  }

  public watch(): Observable<EPages> {
    return this.currentPage;
  }
}
