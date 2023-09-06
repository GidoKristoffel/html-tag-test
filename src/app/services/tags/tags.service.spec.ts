import { TestBed } from '@angular/core/testing';

import { TagsService } from './tags.service';
import { tags } from "../../../assets/tags";

describe('TagsService', () => {
  let service: TagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get tags', () => {
    const serviceTags = service.get();
    expect(serviceTags).toEqual(tags);
  });
});
