import { TestBed } from '@angular/core/testing';

import { SkippedAnswersService } from './skipped-answers.service';

describe('SkippedAnswersService', () => {
  let service: SkippedAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkippedAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
