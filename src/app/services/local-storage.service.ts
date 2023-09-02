import { Injectable } from '@angular/core';
import { ELocalStorage, ETag } from "../interfaces/tags.interface";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}
