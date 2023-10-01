import { Injectable } from '@angular/core';
import { LocalStorageService } from "../storages/local-storage/local-storage.service";
import { ELocalStorage } from "../../../interfaces/tags.interface";
import { CryptoService } from "../../crypto/crypto.service";

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  constructor(
    private localStorageService: LocalStorageService,
    private cryptoService: CryptoService,
  ) {}

  public saveLocalStorage(key: ELocalStorage, value: any): void {
    this.localStorageService.setItem(key, this.cryptoService.encryptData(value));
  }
}
