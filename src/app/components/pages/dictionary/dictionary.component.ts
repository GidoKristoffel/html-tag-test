import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ETag, ITags } from "../../../interfaces/tags.interface";
import { TagsService } from "../../../services/tags/tags.service";
import { Router } from "@angular/router";

@Component({
  selector: 'htt-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  @ViewChild('filter') filterRef!: ElementRef;
  public tags!: ITags;
  public tagNames: ETag[] = [];
  public selectedTag!: ETag;
  public description: string = '';
  public searchTag: string = '';

  constructor(
    private tagsService: TagsService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.initTags();
  }

  private initTags(): void {
    this.tags = this.tagsService.get();
    this.tagNames = Object.values(ETag);
  }

  public selectTag(tagName: ETag): void {
    this.selectedTag = tagName;
    this.description = this.tags[this.selectedTag].question.ru.toLowerCase();
  }

  public backToMainMenu(): void {
    this.router.navigate(['main-menu']).then();
  }

  public search(): void {
    if (this.searchTag === '') {
      this.tagNames = Object.values(ETag);
    } else {
      this.tagNames = Object.values(ETag).filter((tag: ETag) => tag.includes(this.searchTag));
    }
  }

  public clear(): void {
    this.searchTag = '';
    this.search();
    this.filterRef.nativeElement.focus();
  }
}
