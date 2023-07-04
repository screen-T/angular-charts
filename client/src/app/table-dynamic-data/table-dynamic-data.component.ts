import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-table-dynamic-data',
  templateUrl: './table-dynamic-data.component.html',
  styleUrls: ['./table-dynamic-data.component.css']
})
export class TableDynamicDataComponent implements OnInit {
  dataContent: any = '';
  oldDataContent: any = '';

  constructor(private http: SharedService) {}

  ngOnInit(): void {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 1000);
  }

  getData(): void {
    this.http.findall().subscribe((response: any) => {
      console.log('data of the table:', response);
      const newDataContent = JSON.stringify(response);

      // Compare the new data with the old data
      if (newDataContent !== this.oldDataContent) {
        this.dataContent = response;
        this.oldDataContent = newDataContent;
      }
    });
  }
  delete(id : any){
    
  }
}
