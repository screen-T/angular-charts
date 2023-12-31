import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  public data: ChartData<'pie', number[], string | string[]> = {
    labels: [ "data 1" , " data 2" ," data 3"],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
    
  
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  }
  public legend = true ; 
  public pieChartType: ChartType = 'pie';
}
