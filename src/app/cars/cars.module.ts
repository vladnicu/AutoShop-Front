import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { IndexCarsComponent } from './components/index-cars/index-cars.component';
import { ShowCarComponent } from './components/show-car/show-car.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    IndexCarsComponent,
    ShowCarComponent
  ],

  imports: [
    CommonModule,
    CarsRoutingModule,
    AgGridModule
  ]
})
export class CarsModule { }
