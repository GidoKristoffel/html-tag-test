import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { ELocalStorage } from "../interfaces/tags.interface";
import { SaveService } from "./save.service";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private showStatistics: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private localStorageService: LocalStorageService,
    private saveService: SaveService,
  ) {
    this.init();
  }

  public toggleShowStatistics(): void {
    this.setShowStatistics(!this.getShowStatistics());
  }

  public getShowStatistics(): boolean {
    return this.showStatistics.getValue();
  }

  public watchShowStatistics(): Observable<boolean> {
    return this.showStatistics;
  }

  public setShowStatistics(value: boolean): void {
    this.showStatistics.next(value);
    this.saveService.saveLocalStorage(ELocalStorage.ShowStatistics, value);
  }

  private init(): void {
    this.initShowStatistics();
  }

  private initShowStatistics(): void {
    let showStatistics: boolean = this.localStorageService.getItem(ELocalStorage.ShowStatistics) === 'true';
    this.setShowStatistics(showStatistics);
  }
}
