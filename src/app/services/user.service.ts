import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getToken(Password:string, Username:string): Observable<any> {
    const body = {password:Password, username:Username};
    return this.http.post(this.baseurl + '/api/v1/auth-token/token/login/', body);
  }
  getProfile(Token: string): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/users/get/user/by/token/',
      {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + Token}});
  }
  patchUserProfile(Phone: string, Token: string): Observable<any> {
    const body = {phone: Phone};
    return this.http.patch(this.baseurl + '/api/v1/users/patch/user/profile/', body,
      {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + Token}}
    );
  }

  updatePhoto(Photo: File, Token: string): Observable<any> {
    const body = new FormData();
    body.append('photo', Photo);
    // body.append('code', '111');
    return this.http.patch(this.baseurl + '/api/v1/users/patch/user/profile/to/'+'1/', body);
  }
}
