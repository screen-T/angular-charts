import { Component } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {
  public data : Array<any> = [
    {data : [10 , 20 , 30 , 1 , 12 ] , label : "data 1" , backgroundColor: "rgb(102,93,162)" }
  ] ; 
  public lables : Array<any> = ["lun" , "mar" , "mer" , "jeu" , "vend"];
  public type : ChartType = "bar" ; 
  public options : any = {
    responsive: true,
  }

}
