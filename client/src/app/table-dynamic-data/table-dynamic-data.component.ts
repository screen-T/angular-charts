import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-table-dynamic-data',
  templateUrl: './table-dynamic-data.component.html',
  styleUrls: ['./table-dynamic-data.component.css']
})
export class TableDynamicDataComponent implements OnInit{
  constructor(private http : SharedService){}
  dataContent : any=""
  ngOnInit(): void {

    this.http.findall().subscribe((response)=>{
      console.log("data of the table :",response)
      this.dataContent=response
    })
  }
}
