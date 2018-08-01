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
    },{
      name: 'Line 3',
      data: [6,3,2]
    }, {
      name: 'Line 4',
      data: [,1,10,6]
    },{
      name: 'Line 5',
      data: [1, 2, 4]
    }, {
      name: 'Line 6',
      data: [9,1,4]
    }, {
      name: 'Line 7',
      data: [11,7,2]
    }, {
      name: 'Line 8',
      data: [21,22,11]
    }, {
      name: 'Line 9',
      data: [15,20,13]
    }, {
      name: 'Line 10',
      data: [13,19,17]
    }, {
      name: 'Line 11',
      data: [8,12,22]
    }, {
      name: 'Line 12',
      data: [24,22,12]
    }, {
      name: 'Line 13',
      data: [12,4,21]
    }, {
      name: 'Line 14',
      data: [1,5,9]
    }, {
      name: 'Line 15',
      data: [1,22,12]
    }, {
      name: 'Line 16',
      data: [5, 7, 13]
    }];
  }
}
