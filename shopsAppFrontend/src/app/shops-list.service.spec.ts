import { TestBed, inject } from '@angular/core/testing';

import { ShopsListService } from './shops-list.service';

describe('ShopsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopsListService]
    });
  });

  it('should be created', inject([ShopsListService], (service: ShopsListService) => {
    expect(service).toBeTruthy();
  }));
});
