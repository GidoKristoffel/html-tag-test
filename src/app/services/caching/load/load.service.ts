import { Injectable } from '@angular/core';
import { LocalStorageService } from "../storages/local-storage/local-storage.service";
import { ELocalStorage } from "../../../interfaces/tags.interface";
import { CryptoService } from "../../crypto/crypto.service";

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  constructor(
    private localStorageService: LocalStorageService,
    private cryptoService: CryptoService,
  ) {}

  public loadLocalStorage(key: ELocalStorage): string | null {
    const data = this.localStorageService.getItem(key);
    return data ? this.cryptoService.decryptData(data) : null;
  }
}
