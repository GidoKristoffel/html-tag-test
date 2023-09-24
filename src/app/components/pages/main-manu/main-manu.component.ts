import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { IMenu } from "../../../interfaces/tags.interface";
import { NavigationService } from "../../../services/navigation/navigation.service";

@Component({
  selector: 'htt-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.scss']
})
export class MainManuComponent {
  public readonly menu: IMenu[] = [
    {
      label: 'main-menu.test',
      icon: './assets/images/test.svg',
      action: () => this.startTest(),
    },
    {
      label: 'main-menu.dictionary',
      icon: './assets/images/dictionary.svg',
      action: () => this.openDictionary(),
    }
  ];

  constructor(
    private router: Router,
    private navigationService: NavigationService,
  ) {}

  public startTest(): void {
    this.navigationService.toTest();
  }

  public openDictionary(): void {
    this.navigationService.toDictionary();
  }
}
