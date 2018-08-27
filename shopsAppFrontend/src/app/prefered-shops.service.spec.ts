import { TestBed, inject } from '@angular/core/testing';

import { PreferedShopsService } from './prefered-shops.service';

describe('PreferedShopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreferedShopsService]
    });
  });

  it('should be created', inject([PreferedShopsService], (service: PreferedShopsService) => {
    expect(service).toBeTruthy();
  }));
});
