import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationAccessService } from "../services/navigation/navigation-access/navigation-access.service";
import { CurrentPageService } from "../services/navigation/current-page/current-page.service";
import { EPages } from "../interfaces/tags.interface";

@Injectable({
  providedIn: 'root'
})
export class GoToAddressGuard  {

  constructor(
    private navigationAccessService: NavigationAccessService,
    private currentPageService: CurrentPageService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.routeConfig?.path === this.currentPageService.get() || this.navigationAccessService.get()) {
      return true;
    }

    this.router.navigate([this.currentPageService.get() || EPages.MainMenu]).then();
    return false;
  }
}
