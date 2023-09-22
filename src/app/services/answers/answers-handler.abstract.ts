import { BehaviorSubject, Observable } from "rxjs";
import { ELocalStorage, ETag } from "../../interfaces/tags.interface";
import { CachingService } from "../caching/caching.service";

export abstract class AnswersHandler {
  private answers: BehaviorSubject<ETag[]> = new BehaviorSubject<ETag[]>([]);
  protected constructor(
    protected localStorageKey: ELocalStorage,
    protected cachingService: CachingService,
  ) {
    this.initCaching();
  }

  private initCaching(): void {
    this.cachingService
      .init<ETag[]>(
        () => this.watch(),
        (saving: ETag[] | null) => {
          if (saving) {
            this.set(saving)
          }
        },
        this.localStorageKey
      );
  }

  public get(): ETag[] {
    return this.answers.getValue();
  }

  public watch(): Observable<ETag[]> {
    return this.answers;
  }

  public set(value: ETag[]): void {
    this.answers.next(value);
  }
}
