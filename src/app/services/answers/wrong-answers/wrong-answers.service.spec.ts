import { TestBed } from '@angular/core/testing';

import { WrongAnswersService } from './wrong-answers.service';

describe('WrongAnswersService', () => {
  let service: WrongAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrongAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
