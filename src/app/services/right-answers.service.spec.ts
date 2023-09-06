import { TestBed } from '@angular/core/testing';

import { RightAnswersService } from './right-answers.service';

describe('RightQuestionsService', () => {
  let service: RightAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
