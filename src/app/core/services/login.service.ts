import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { removeSesionStorage, setSesionStorage } from '../utils/common-functions';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService  extends BaseService {
  private adminLogin = new BehaviorSubject({});
  public admin$ = this.adminLogin.asObservable();
  constructor(http:HttpClient) {
    super(http,`${environment.endpoint_url}/admins`);
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data).pipe(
      map((admin) => {
        //debugger;
        setSesionStorage('admin',admin)
        return admin;
      })
    );
  }
  logout() {
    removeSesionStorage('admin');
    this.adminLogin.next(null!);
  }
  test(){
    
    return ;
  }
  
}