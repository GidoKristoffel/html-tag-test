import { Injectable } from '@angular/core';
import { ELocalStorage, ETag } from "../../interfaces/tags.interface";
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

  public init(watchFunction: () => Observable<ETag[]>, setFunction: (value: ETag[]) => void, key: ELocalStorage): void {
    const saving: ETag[] | null = this.getSaving(key);
    setFunction(saving || []);

    watchFunction()
      .pipe(untilDestroyed(this))
      .subscribe((value: ETag[]) => {
        this.saveService.saveLocalStorage(key, value);
      });
  }

  private getSaving(key: ELocalStorage): ETag[] | null {
    let questionOrder: ETag[] | string | null = this.loadService.loadLocalStorage(key);
    if (questionOrder) {
      return JSON.parse(questionOrder as string) as ETag[];
    }
    return null;
  }
}
