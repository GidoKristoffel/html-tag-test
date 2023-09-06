import { Injectable } from '@angular/core';
import { LocalStorageService } from "../local-storage.service";
import { ELocalStorage } from "../../interfaces/tags.interface";

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  constructor(
    private localStorageService: LocalStorageService,
  ) {}

  public loadLocalStorage(key: ELocalStorage): string | null {
    return this.localStorageService.getItem(key);
  }
}
