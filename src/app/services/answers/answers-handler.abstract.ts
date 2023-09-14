import { BehaviorSubject, Observable } from "rxjs";
import { ELocalStorage, ETag } from "../../interfaces/tags.interface";
import { SaveService } from "../caching/save/save.service";
import { LoadService } from "../caching/load/load.service";

export abstract class AnswersHandler {
  private answers: BehaviorSubject<ETag[]> = new BehaviorSubject<ETag[]>([]);
  protected constructor(
    protected localStorageKey: ELocalStorage,
    protected saveService: SaveService,
    protected loadService: LoadService,
  ) {
    this.init();
  }

  private init(): void {
    const saving: ETag[] | null = this.getSaving();
    this.set(saving || []);
  }

  public get(): ETag[] {
    return this.answers.getValue();
  }

  public watch(): Observable<ETag[]> {
    return this.answers;
  }

  public set(value: ETag[]): void {
    this.answers.next(value);
    this.saveService.saveLocalStorage(this.localStorageKey, value);
  }

  private getSaving(): ETag[] | null {
    let questionOrder: ETag[] | string | null = this.loadService.loadLocalStorage(this.localStorageKey);
    if (questionOrder) {
      return JSON.parse(questionOrder as string) as ETag[];
    }
    return null;
  }
}
