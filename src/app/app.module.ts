import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MounthsComponent } from './mounths/mounths.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { LinechartsComponent } from './linecharts/linecharts.component';
import { PiechartComponent } from './piechart/piechart.component';
@NgModule({
  declarations: [
    AppComponent,
    MounthsComponent,
    LinechartsComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
