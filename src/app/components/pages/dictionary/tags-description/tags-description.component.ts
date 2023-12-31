import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { ELang, ETag, ITags } from "../../../../interfaces/tags.interface";
import { TagsService } from "../../../../services/tags/tags.service";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'htt-tags-description',
  templateUrl: './tags-description.component.html',
  styleUrls: ['./tags-description.component.scss']
})
export class TagsDescriptionComponent implements OnInit {
  @Input() tagNames: ETag[] = [];

  public selectedTag!: ETag;
  public description: string = '';
  public tags!: ITags;
  private currentLang: ELang = this.translateService.currentLang as ELang || ELang.English;

  constructor(
    private tagsService: TagsService,
    private translateService: TranslateService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.initTags();
    this.initTranslate();
  }

  private initTags(): void {
    this.tags = this.tagsService.get();
  }

  private initTranslate(): void {
    this.translateService
      .onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event: LangChangeEvent): void => {
        if ((<any>Object).values(ELang).includes(event.lang)) {
          this.currentLang = event.lang as ELang;
        }

        if (this.selectedTag) {
          this.selectTag(this.selectedTag);
        }
      });
  }

  public selectTag(tagName: ETag): void {
    this.selectedTag = tagName;
    this.description = this.tags[this.selectedTag].question[this.currentLang].toLowerCase();
  }
}
