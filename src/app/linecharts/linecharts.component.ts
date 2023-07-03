import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-linecharts',
  templateUrl: './linecharts.component.html',
  styleUrls: ['./linecharts.component.css']
})
export class LinechartsComponent {
  public lineChartData:Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Data 1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Data 2' }
  ];

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartColors:Array<any>  = [
    {
      borderColor: 'rgba(0, 123, 255, 0.8)',
      backgroundColor: 'rgba(0, 123, 255, 0.3)',
    },
    {
      borderColor: 'rgba(255, 0, 123, 0.8)',
      backgroundColor: 'rgba(255, 0, 123, 0.3)',
    }
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
}
