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
}
