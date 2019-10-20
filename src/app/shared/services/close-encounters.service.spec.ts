import { TestBed } from '@angular/core/testing';

import { CloseEncountersService } from './close-encounters.service';

describe('CloseEncountersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloseEncountersService = TestBed.get(CloseEncountersService);
    expect(service).toBeTruthy();
  });
});
