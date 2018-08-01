import { Injectable } from '@angular/core';
import {Chart} from 'angular-highcharts';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  getData() {
    return [{
      name: 'Line 1',
      data: [1, 0, 4]
    }, {
      name: 'Line 2',
      data: [5, 7, 3]
    }];
  }
}
