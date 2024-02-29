import { Injectable } from '@angular/core';
import mockData from './../data/catalog.json';
import { delay, of } from 'rxjs';

@Injectable()
export class DataService {

  constructor() { }

  getProductsByCategory() {
    return of(mockData).pipe(delay(100));
  }
}
