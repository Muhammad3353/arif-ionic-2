import { TestBed } from '@angular/core/testing';

import { EverythingProductService } from './everything-product.service';

describe('EverythingProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EverythingProductService = TestBed.get(EverythingProductService);
    expect(service).toBeTruthy();
  });
});
