import { NgModule , OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './addform/addform.component';
import { BarchartComponent } from './barchart/barchart.component';
import { MounthsComponent } from './mounths/mounths.component';

const routes: Routes = [
  {path:"add", component: AddformComponent} ,
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
