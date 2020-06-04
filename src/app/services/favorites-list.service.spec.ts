import { TestBed } from '@angular/core/testing';

import { FavoritesListService } from './favorites-list.service';

describe('FavoritesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritesListService = TestBed.get(FavoritesListService);
    expect(service).toBeTruthy();
  });
});
