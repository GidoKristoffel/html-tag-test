import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'htt-main-manu',
  templateUrl: './main-manu.component.html',
  styleUrls: ['./main-manu.component.scss']
})
export class MainManuComponent {

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
