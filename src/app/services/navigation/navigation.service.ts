import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { NavigationAccessService } from "./navigation-access/navigation-access.service";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    private navigationAccessService: NavigationAccessService,
  ) { }

  public toMainMenu(): void {
    this.navigationAccessService.allowAccess();
    this.router.navigate(['main-menu']).then(() => this.navigationAccessService.denyAccess());
  }

  public toTest(): void {
    this.navigationAccessService.allowAccess();
    this.router.navigate(['test']).then(() => this.navigationAccessService.denyAccess());
  }

  public toDictionary(): void {
    this.navigationAccessService.allowAccess();
    this.router.navigate(['dictionary']).then(() => this.navigationAccessService.denyAccess());
  }

  public toResult(): void {
    this.navigationAccessService.allowAccess();
    this.router.navigate(['result']).then(() => this.navigationAccessService.denyAccess());
  }


}
