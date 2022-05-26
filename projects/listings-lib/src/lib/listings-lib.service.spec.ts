import { TestBed } from '@angular/core/testing';

import { ListingsLibService } from './listings-lib.service';

describe('ListingsLibService', () => {
  let service: ListingsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
