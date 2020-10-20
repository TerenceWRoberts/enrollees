import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolleesRoutingModule } from './enrollees-routing.module';
import { EnrolleeComponent } from './enrollee/enrollee.component';
import { FormsModule } from '@angular/forms';
import { AddEnrolleeComponent } from './add-enrollee/add-enrollee.component';


@NgModule({
  declarations: [EnrolleeComponent, AddEnrolleeComponent],
  imports: [
    CommonModule,
    FormsModule,
    EnrolleesRoutingModule
  ]
})
export class EnrolleesModule { }
