import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerService } from './logger.service';
import { BuildingMaterialListComponent } from './building-materials/building-material-list/building-material-list.component';
import { BuildingMaterialComponent } from './building-materials/building-material/building-material.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingMaterialComponent,
    BuildingMaterialListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
