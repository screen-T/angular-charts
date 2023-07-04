import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MounthsComponent } from './mounths/mounths.component';

const routes: Routes = [
  {path : "mounths" , component:MounthsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




}
