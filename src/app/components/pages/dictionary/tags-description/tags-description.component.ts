import { Component, Input, OnInit } from '@angular/core';
import { ETag, ITags } from "../../../../interfaces/tags.interface";
import { TagsService } from "../../../../services/tags/tags.service";

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

  constructor(
    private tagsService: TagsService,
  ) {}

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.tags = this.tagsService.get();
  }

  public selectTag(tagName: ETag): void {
    this.selectedTag = tagName;
    this.description = this.tags[this.selectedTag].question.ru.toLowerCase();
  }
}
