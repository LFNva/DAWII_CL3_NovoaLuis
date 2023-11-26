import { TestBed } from '@angular/core/testing';

import { EpisodiesService } from './episodies.service';

describe('EpisodiesService', () => {
  let service: EpisodiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
