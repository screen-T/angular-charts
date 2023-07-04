import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MounthsComponent } from './mounths/mounths.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LinechartsComponent } from './linecharts/linecharts.component';
import { PiechartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { TableDynamicDataComponent } from './table-dynamic-data/table-dynamic-data.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    MounthsComponent,
    LinechartsComponent,
    PiechartComponent,
    BarchartComponent,
    TableDynamicDataComponent,
    NavbarComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule, 
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
