import { TestBed } from '@angular/core/testing';

import { NavigationAccessService } from './navigation-access.service';

describe('NavigationAccessService', () => {
  let service: NavigationAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
