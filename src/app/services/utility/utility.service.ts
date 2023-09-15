import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public initializeObjectWithEmptyStrings<T>(keys: string[]): T {
    const obj: any = {};

    keys.forEach((key: string) => {
      obj[key] = '';
    });

    return obj as T;
  }
}
