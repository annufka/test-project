import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createOrder(Name: string, Address: string, Phone: string, Token:string): Observable<any> {
    const body = {name:Name, address:Address, phone: Phone};
    if (Token.length>5){
      return this.http.post(this.baseurl + '/api/v1/order/create/order/', body,
        {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + Token}});
    }else{
      return this.http.post(this.baseurl + '/api/v1/order/create/order/', body);
    }
  }
}
