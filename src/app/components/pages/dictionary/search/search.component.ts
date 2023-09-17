import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ETag } from "../../../../interfaces/tags.interface";

@Component({
  selector: 'htt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('filter') filterRef!: ElementRef;
  @Input() tagNames: ETag[] = [];
  @Output() tagNamesChange: EventEmitter<ETag[]> = new EventEmitter<ETag[]>();

  public searchTag: string = '';

  public search(): void {
    if (this.searchTag === '') {
      this.tagNames = Object.values(ETag);
    } else {
      this.tagNames = Object.values(ETag).filter((tag: ETag) => tag.includes(this.searchTag));
    }
    this.tagNamesChange.emit(this.tagNames);
  }

  public clear(): void {
    this.searchTag = '';
    this.search();
    this.filterRef.nativeElement.focus();
  }
}
