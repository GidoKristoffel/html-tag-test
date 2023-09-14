import { Injectable } from '@angular/core';
import { LocalStorageService } from "../storages/local-storage/local-storage.service";
import { ELocalStorage } from "../../../interfaces/tags.interface";

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor(
    private localStorageService: LocalStorageService,
  ) {}

  public saveLocalStorage(key: ELocalStorage, value: any): void {
    this.localStorageService.setItem(key, value);
  }
}
