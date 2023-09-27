import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { NavigationAccessService } from "./navigation-access/navigation-access.service";
import { CurrentPageService } from "./current-page/current-page.service";
import { EPages } from "../../interfaces/tags.interface";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    private navigationAccessService: NavigationAccessService,
    private currentPageService: CurrentPageService,
  ) { }

  public toMainMenu(): void {
    this.navigationAccessService.allowAccess();
    this.router.navigate([EPages.MainMenu]).then(() => {
      this.navigationAccessService.denyAccess();
      this.currentPageService.set(EPages.MainMenu);
    });
  }

  public toTest(): void {
    this.navigationAccessService.allowAccess();
    this.router.navigate([EPages.Test]).then(() => {
      this.navigationAccessService.denyAccess();
      this.currentPageService.set(EPages.Test);
    });
  }

  public toDictionary(): void {
    this.navigationAccessService.allowAccess();
    this.router.navigate([EPages.Dictionary]).then(() => {
      this.navigationAccessService.denyAccess();
      this.currentPageService.set(EPages.Dictionary);
    });
  }

  public toResult(): void {
    this.navigationAccessService.allowAccess();
    this.router.navigate([EPages.Result]).then(() => {
      this.navigationAccessService.denyAccess();
      this.currentPageService.set(EPages.Result);
    });
  }
}
