import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ICar } from '../../models/car';
import { ColDef } from 'ag-grid-community';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-cars',
  templateUrl: './index-cars.component.html',
  styleUrls: ['./index-cars.component.scss']
})
export class IndexCarsComponent implements OnInit {

  cars: ICar[] = [];

  columnDefs: ColDef[] = [
    { field: 'id', filter: true, sortable: true  },
    { field: 'brand', filter: true },
    { field: 'model' },
    { field: 'model' },
    { field: 'buildYear' },
    { field: 'stock' },

];


  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(
      res => {
        this.cars = res;
      }
    );
  }

  createCar() {
    const car: ICar = {
      brand: 'VW',
      model: '343',
      buildYear: 2022,
      stock: 3
    };

    this.carService.createCar(car).subscribe(
      res => this.cars?.push(res),
    );
  }

  deleteCar(car: ICar) {
    this.carService.deleteCar(car.id).subscribe(
      res => {
        const carIndex = this.cars.indexOf(car);
        this.cars.splice(carIndex, 1);
      }
    )
  }

  showCar(car: ICar) {
    this.router.navigate([`/cars/${car.id}`]);
  }

}
