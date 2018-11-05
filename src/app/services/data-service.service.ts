import { Injectable } from '@angular/core';
import {Chart} from 'angular-highcharts';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private nameSource = new BehaviorSubject('default message');
  currentUsername = this.nameSource .asObservable();
  private subject = new Subject<any>();
  constructor() { }

  changeUserName(name: string) {
    this.nameSource .next(name);
  }
  setUsername(name: string) {
    // this.subject.next( name);
    console.log('setUsername', this.subject.next(name));
  }
  getUsername(): Observable<any> {
    console.log('getUsername', this.subject.asObservable());
    return this.subject.asObservable();
  }
  clearUserName() {
    this.subject.next();
  }

  getData() {
    return [{
      name: 'Line 8',
      data: [21, 22, 11]
    }, {
      name: 'Line 9',
      data: [15, 20, 13]
    }, {
      name: 'Line 10',
      data: [13, 19, 17]
    }, {
      name: 'Line 11',
      data: [8, 12, 22]
    }, {
      name: 'Line 12',
      data: [24, 22, 12],
      lineWidth: 5
    }];
  }
}
