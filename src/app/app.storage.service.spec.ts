import { TestBed } from '@angular/core/testing';

import { BestScoreManager } from './app.storage.service';

describe('App.StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestScoreManager = TestBed.get(BestScoreManager);
    expect(service).toBeTruthy();
  });
});
