import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'' ,redirectTo:'enrollees', pathMatch:'full'},
  {path:'enrollees',  loadChildren: () => import('./components/enrollees/enrollees.module').then(m => m.EnrolleesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
