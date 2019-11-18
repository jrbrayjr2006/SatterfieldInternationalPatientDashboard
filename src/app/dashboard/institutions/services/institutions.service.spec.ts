import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InstitutionsService } from './institutions.service';

describe('InstitutionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: InstitutionsService = TestBed.get(InstitutionsService);
    expect(service).toBeTruthy();
  });
});

describe('PACT for Institutions service', () => {});