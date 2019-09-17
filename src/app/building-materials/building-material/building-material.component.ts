import { Component, OnInit, Input } from '@angular/core';
import { BuildingMaterial } from '../building-material.model';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-building-material',
  templateUrl: './building-material.component.html',
  styleUrls: ['./building-material.component.css']
})
export class BuildingMaterialComponent implements OnInit {
  @Input()
  model: BuildingMaterial;
  constructor(private loggerService : LoggerService) { }

  ngOnInit() {
    this.loggerService.log(this.model.name)
  }
}
