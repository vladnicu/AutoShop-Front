import { Injectable } from '@angular/core';
import { ICar } from '../models/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  createCar(car: ICar | undefined): Observable<ICar> {
    return this.http.post<ICar>('http://tmsv00007:2222' + '/cars', car);
  }

  getCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>('http://tmsv00007:2222' + '/cars');
  }

  deleteCar(id: number | undefined): Observable<ICar> {
    return this.http.delete<ICar>('http://tmsv00007:2222' + '/cars/' + id);
  }

  getCar(id: number): Observable<ICar> {
    return this.http.get<ICar>('http://tmsv00007:2222' + `/cars/${id}`);
}
}
