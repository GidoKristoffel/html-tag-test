import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public initializeObjectWithEmptyStrings<T>(keys: string[]): T {
    const obj: any = {};

    keys.forEach((key: string): void => {
      obj[key] = '';
    });

    return obj as T;
  }

  public isEnumContains<T extends Record<string, string>>(value: string, enumType: T): value is T[keyof T] {
    const enumValues: string[] = Object.keys(enumType)
      .filter((key: string): boolean => typeof enumType[key] === 'string')
      .map((key: string) => enumType[key]);

    return enumValues.includes(value);
  }
}
