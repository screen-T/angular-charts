import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  data: any[] = [];
  labels: any[] = [];
  type: ChartType = 'bar';
  options: any = {
    responsive: true,
    animation: {
      duration: 0 // Set duration to 0 to disable animation
    }
  };

  private previousData: any[] = [];

  constructor(private http: SharedService) { }

  ngOnInit() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 1000);
  }

  getData() {
    this.http.findall().subscribe((response: any) => {
      const newData = response.map((item: any) => item.data);
      const newLabels = response.map((item: any) => item.labels);

      if (!this.areArraysEqual(newData, this.previousData) || !this.areArraysEqual(newLabels, this.labels)) {
        this.data = [
          { data: newData, label: 'data 1', backgroundColor: 'rgb(102, 93, 162)' }
        ];
        this.labels = newLabels;
        this.previousData = newData;
      }
    });
  }

  areArraysEqual(array1: any[], array2: any[]): boolean {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    return true;
  }
}
