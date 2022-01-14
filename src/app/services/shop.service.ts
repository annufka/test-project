import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseurl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getListAllProducts(): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/shop/get/list/all/products/');
  }
}
