import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { SharedService } from '../shared.service';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  res: any = "";
  dataSets: any[] = [];
  labels: any[] = [];
  type: ChartType = "bar";
  options: any = {
    responsive: true
  };
  data: any[] = [];

  constructor(private http: SharedService) { }

  ngOnInit() {
    this.http.findall().subscribe((response: any) => {
      this.res = response;
      console.log(response[0].data);
      for (let item of response) {
        console.log(item.data);
        this.dataSets.push(item.data);
        this.labels.push(item.labels);
      }
      console.log("dataSets",this.dataSets)
      this.data = [
        { data: this.dataSets, label: "data 1", backgroundColor: "rgb(102, 93, 162)" }
      ];
      console.log(this.labels)
      console.log(this.data)
    });
  }
}
