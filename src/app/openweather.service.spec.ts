import { TestBed } from '@angular/core/testing';

import { OpenweatherService } from './openweather.service';

describe('OpenweatherService', () => {
  let service: OpenweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
