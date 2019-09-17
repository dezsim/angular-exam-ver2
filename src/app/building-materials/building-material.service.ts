import { Injectable } from '@angular/core';
import { BuildingMaterial } from './building-material.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingMaterialService {
  constructor() { }

  getBuildingMaterials(): Observable<BuildingMaterial[]> {
    return of([
      new BuildingMaterial('micro rock', 'The revenge of Jumurdzsák OBS'),
      new BuildingMaterial('sand', 'RIP Nemecsek OBS'),
      new BuildingMaterial('clay', 'OBS')
    ]);
  }
}
