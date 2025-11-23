import { TestBed } from '@angular/core/testing';

import { Ova } from './ova';

describe('Ova', () => {
  let service: Ova;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ova);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
