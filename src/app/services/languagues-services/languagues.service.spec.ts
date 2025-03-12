import { TestBed } from '@angular/core/testing';

import { LanguaguesService } from './languagues.service';

describe('LanguaguesService', () => {
  let service: LanguaguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguaguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
