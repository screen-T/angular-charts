import { NgModule , OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { MounthsComponent } from './mounths/mounths.component';

const routes: Routes = [
  {path:"data1" , component:BarchartComponent} , 
  {path : "mounths" , component:MounthsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{ 
ngOnInit(): void {
  
}



}
