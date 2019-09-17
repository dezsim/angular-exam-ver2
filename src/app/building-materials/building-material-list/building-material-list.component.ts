import { Component, OnInit } from '@angular/core';
import { BuildingMaterial } from '../building-material.model';
import { Brick } from '../brick.model';
import { BuildingMaterialService } from '../building-material.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-building-material-list',
  templateUrl: './building-material-list.component.html',
  styleUrls: ['./building-material-list.component.css']
})
export class BuildingMaterialListComponent implements OnInit {
  private buildingMaterials = [
    new BuildingMaterial('rock', 'black'),
    new BuildingMaterial('sand', 'gray'),
    new BuildingMaterial('clay', 'white')
  ];

  private bricks = [
    new Brick('Type 1'),
    new Brick('Supreme'),
    new Brick('Sweater'),
  ];


  constructor(private buildingMaterialService : BuildingMaterialService) { }

  ngOnInit() {
    this.buildingMaterialService.getBuildingMaterials().subscribe(bm => this.buildingMaterials = bm);
    console.log(this.buildingMaterials);
  }

}
