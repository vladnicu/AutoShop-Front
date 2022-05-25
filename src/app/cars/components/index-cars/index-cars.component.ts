import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { ICar } from '../../models/car';

@Component({
  selector: 'app-index-cars',
  templateUrl: './index-cars.component.html',
  styleUrls: ['./index-cars.component.scss']
})
export class IndexCarsComponent implements OnInit {

  cars: ICar[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(
      res => {
        this.cars = res;
      }
    );
  }

  createCar() {
    const car: ICar = {
      brand: 'BMW',
      model: 'x6',
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
        const carIndex = this.cars?.indexOf(car);
        this.cars?.splice(carIndex, 1);
      }
    )
  }

}
