import { TestBed } from '@angular/core/testing';

import { ResourceListService } from './resource-list.service';

describe('ResourceListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceListService = TestBed.get(ResourceListService);
    expect(service).toBeTruthy();
  });
});
