import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
import { Router } from '@angular/router';

import { DataServiceService } from '../../services/data-service.service';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private highchartsService: DataServiceService, public router: Router, private authService: AuthService) { }
  series: any[];
  chart = new Chart({
    chart: {
      type: 'area'
    },
    title: {
      text: 'Areachart'
    },
    credits: {
      enabled: false
    },
    series: []
  });

  ngOnInit() {
    this.series = this.highchartsService.getData();
    console.log('serires ', this.series);
    this.series.forEach((item) => {
      this.chart.addSerie(item);
    });
  }
  showFullHighchart() {
    this.router.navigate(['highchart']);
  }
  logout() {
    this.authService.logout();
  }
}
