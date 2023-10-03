import { Injectable } from '@angular/core';
import { CryptoService } from "../../../crypto/crypto.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    private cryptoService: CryptoService,
  ) {}

  public getItem(key: string): string | null {
    return this.cryptoService.decrypt(localStorage.getItem(key) || "");
  }

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, this.cryptoService.encrypt(JSON.stringify(value)));
  }

  public removeItem(key: string): void {
    return localStorage.removeItem(key);
  }
}
