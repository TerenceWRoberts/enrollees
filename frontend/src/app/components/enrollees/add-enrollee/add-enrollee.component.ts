import { enrolleeResponse } from './../entities/index';
import { EnrolleeService } from './../enrollee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-enrollee',
  templateUrl: './add-enrollee.component.html',
  styleUrls: ['./add-enrollee.component.scss']
})
export class AddEnrolleeComponent implements OnInit {

  constructor(private svcEnrolee:EnrolleeService, 
    private activeRoute:ActivatedRoute,
    private route:Router) { }
  editForm:enrolleeResponse = {name:'',active: false};


  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if(params.id != undefined && params.id != '' && params.id != null)
        this.editForm.id = params.id;
        this.loadEditEnrollee(params.id);
    })
  }

  loadEditEnrollee(id){
    this.svcEnrolee.getEnrolleeById(id).subscribe(res => {
      this.editForm.name = res.name;
      this.editForm.active = res.active;     
    },err => console.error('Error while getEnrolleeById',err))
  }

  saveUpdates(){
    if(this.editForm.name == '' || this.editForm.name.trim() == '') return; //invalid 
    this.svcEnrolee.updateEnrolleeById(this.editForm).subscribe(res => {
      //success so redirecting to main page
      this.route.navigate(['']);
    },err => console.error('Error while updateEnrolleeById',err));
  }

}

