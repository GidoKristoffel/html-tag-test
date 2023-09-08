import { TestBed } from '@angular/core/testing';

import { SkippedQuestionService } from './skipped-question.service';

describe('SkippedQuestionService', () => {
  let service: SkippedQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkippedQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
