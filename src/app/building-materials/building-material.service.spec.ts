import { TestBed } from '@angular/core/testing';

import { BuildingMaterialService } from './building-material.service';

describe('BuildingMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildingMaterialService = TestBed.get(BuildingMaterialService);
    expect(service).toBeTruthy();
  });
});
