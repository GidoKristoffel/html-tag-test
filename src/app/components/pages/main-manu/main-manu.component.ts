import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { IMenu } from "../../../interfaces/tags.interface";

@Component({
  selector: 'htt-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.scss']
})
export class MainManuComponent {
  public readonly menu: IMenu[] = [
    {
      label: 'Начать тест',
      icon: './assets/images/test.svg',
      action: () => this.startTest(),
    },
    {
      label: 'Словарь тэгов',
      icon: './assets/images/dictionary.svg',
      action: () => this.openDictionary(),
    }
  ];

  constructor(
    private router: Router,
  ) {}

  public startTest(): void {
    this.router.navigate(['test']).then();
  }

  public openDictionary(): void {
    this.router.navigate(['dictionary']).then();
  }
}
