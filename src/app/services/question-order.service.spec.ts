import { TestBed } from '@angular/core/testing';

import { QuestionOrderService } from './question-order.service';

describe('QuestionOrderService', () => {
  let service: QuestionOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
