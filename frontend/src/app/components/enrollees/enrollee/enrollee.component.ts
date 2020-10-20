import { enrolleeResponse } from './../entities/index';
import { EnrolleeService } from './../enrollee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss']
})
export class EnrolleeComponent implements OnInit {

  constructor(private svcEnrolee:EnrolleeService) { }

  public listData:enrolleeResponse[] = [];
  public tableHeaders:string[] = ["Id","Name","Activation Status", "Birthdate","Control"];

  ngOnInit(): void {
    this.svcEnrolee.getEnrolleeList().subscribe(res => {
      this.listData = res;
    },err  => console.error('Error while getEnrolleeList'))
  }

}
