import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {
  public runArray<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
