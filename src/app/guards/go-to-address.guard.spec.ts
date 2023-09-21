import { TestBed } from '@angular/core/testing';

import { GoToAddressGuard } from './go-to-address.guard';

describe('GoToAddressGuard', () => {
  let guard: GoToAddressGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GoToAddressGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
