import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {
  constructor(private highchartsService: DataServiceService) { }
  series: any[];
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: []
  });

  ngOnInit() {
    this.series = this.highchartsService.getData();
    console.log('series ', this.series);
    this.series.forEach((item) => {
      this.chart.addSerie(item);
    });
  }

}
