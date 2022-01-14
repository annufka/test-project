import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseurl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getListAllArticles(): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/article/get/list/all/articles/');
  }
  getListAllCategory(): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/article/get/list/all/category/');
  }

}
