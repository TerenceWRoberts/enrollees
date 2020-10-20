import { AddEnrolleeComponent } from './add-enrollee/add-enrollee.component';
import { EnrolleeComponent } from './enrollee/enrollee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:EnrolleeComponent},
  {path:':id',component:AddEnrolleeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolleesRoutingModule { }
