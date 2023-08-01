import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class NewService extends BaseService {
  constructor(http: HttpClient) {
    super(http, `${environment.endpoint_url}/news`);
  }

  
  // getNewCategories() {
  //   return this.http.get<NewModel[]>(`${environment.endpoint_url}/newcategories`).pipe(map((data) => data));
  // }
  // getNew(){
  //     return this.http.get(`${environment.endpoint_url}/homes/new-list`);
  // }
}
