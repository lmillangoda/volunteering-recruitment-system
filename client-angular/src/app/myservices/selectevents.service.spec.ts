import { TestBed } from '@angular/core/testing';

import { SelecteventsService } from './selectevents.service';

describe('SelecteventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelecteventsService = TestBed.get(SelecteventsService);
    expect(service).toBeTruthy();
  });
});
