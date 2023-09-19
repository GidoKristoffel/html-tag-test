import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationAccessService {
  private navigationAccess: boolean = false;

  public get(): boolean {
    return this.navigationAccess;
  }

  public allowAccess(): void {
    this.set(true);
  }

  public denyAccess(): void {
    this.set(false);
  }

  private set(access: boolean): void {
    this.navigationAccess = access;
  }
}
