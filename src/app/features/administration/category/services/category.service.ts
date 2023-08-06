import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService{

  constructor(http:HttpClient) {
    super(http,`${environment.endpoint_url}/category`);
  }
 
  // getTeacher() {
  //   return this.http.get<TeacherModel[]>(`${environment.endpoint_url}/Teachers`);
  // }
}
