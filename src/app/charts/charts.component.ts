import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  // http://valor-software.com/ng2-charts/
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit() {
    this.randomize();
    this.randomizeBar();
  }

  public randomize(): void {
    const lines = 2;
    const data: Array<any> = new Array(lines);
    for (let i = 0; i < lines; i++) {
      data[i] = {data: new Array(this.lineChartLabels.length), label: 'Label ' + (i + 1)};
      for (let j = 0; j < this.lineChartLabels.length; j++) {
        data[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = data;
  }

  public randomize2(): void {
    const days = 31;
    const lines = 2;
    const data: Array<any> = new Array(lines);
    for (let i = 0; i < lines; i++) {
      data[i] = {data: new Array(days), label: 'Label ' + (i + 1)};
      data[i].data[0] = 5;
      for (let j = 1; j < days; j++) {
        data[i].data[j] = data[i].data[j - 1] + Math.floor((Math.random() * 3) - 1);
        if (data[i].data[j] < 0) {
          data[i].data[j] = 0;
        }
      }
    }
    this.lineChartData = data;
  }

  public randomizeBar(): void {
    const max = 100;
    const groups = 8;
    const bar = 2;
    const data = [];
    let group;
    this.barChartLabels = [];
    for (let j = 0; j < groups; j++) {
      this.barChartLabels.push(2006 + j + '');
    }
    for (let i = 0; i < bar; i++) {
      group = [];
      for (let j = 0; j < groups; j++) {
        group.push(Math.round(Math.random() * max));
      }
      data.push({ 'data': group, 'label': 'Series ' + (i + 1)});
    }
    this.barChartData = data;
  }
}
