import { Component, OnInit } from '@angular/core';
import { ETag } from "../../../interfaces/tags.interface";
import { NavigationService } from "../../../services/navigation/navigation.service";

@Component({
  selector: 'htt-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  public tagNames: ETag[] = [];

  constructor(
    private navigationService: NavigationService,
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.tagNames = Object.values(ETag);
  }

  public backToMainMenu(): void {
    this.navigationService.toMainMenu();
  }
}
