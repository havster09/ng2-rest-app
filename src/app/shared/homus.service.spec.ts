import { TestBed, inject } from '@angular/core/testing';

import { HomusService } from './homus.service';

describe('HomusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomusService]
    });
  });

  it('should ...', inject([HomusService], (service: HomusService) => {
    expect(service).toBeTruthy();
  }));
});
