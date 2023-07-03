import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions, Colors } from 'chart.js';
@Component({
  selector: 'app-mounths',
  templateUrl: './mounths.component.html',
  styleUrls: ['./mounths.component.css']
})
export class MounthsComponent {
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40] , label: 'pink data' },
    {data : [11 , 12 , 50 , 1 , 17 , 12, 19] , label : "blue data" }
  ];
  public data: Array<any> = [
    
  ]
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions: any = {
    responsive: true,
    tooltips: {
      enabled: true, // Show or hide tooltips on hover
      // Additional options for tooltips
    },
    hover: {
      mode: 'nearest', // Interaction mode on hover: 'nearest', 'index', 'point', 'dataset'
      // Additional options for hover
    },
  
 

   
    
  };

  public lineChartLegend = true;
  public lineChartType: 'line' = 'line';
}
