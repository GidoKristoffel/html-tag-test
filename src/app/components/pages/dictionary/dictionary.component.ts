import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ETag, ITags } from "../../../interfaces/tags.interface";
import { TagsService } from "../../../services/tags/tags.service";
import { Router } from "@angular/router";
import { NavigationService } from "../../../services/navigation/navigation.service";

@Component({
  selector: 'htt-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  public tagNames: ETag[] = [];

  constructor(
    private tagsService: TagsService,
    private router: Router,
    private navigationService: NavigationService,
  ) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.tagNames = Object.values(ETag);
  }

  public backToMainMenu(): void {
    this.navigationService.toMainMenu();
  }
}
