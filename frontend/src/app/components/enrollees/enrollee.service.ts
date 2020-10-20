import { enrolleeResponse } from './entities/index';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  constructor(private http:HttpClient) { }

  private baseUrl = environment.SERVER_URL;

  public getEnrolleeList():Observable<enrolleeResponse[]>{
    return this.http.get<enrolleeResponse[]>(this.baseUrl+'/enrollees');
  }

  public getEnrolleeById(id:string):Observable<enrolleeResponse>{
    return this.http.get<enrolleeResponse>(this.baseUrl+`/enrollees/${id}`);
  }

  public updateEnrolleeById(enrollee:enrolleeResponse):Observable<enrolleeResponse>{
    let data = {
      "active": enrollee.active,
      "name": enrollee.name
    }
    return this.http.put<enrolleeResponse>(this.baseUrl+`/enrollees/${enrollee.id}`,data);
  }
}
