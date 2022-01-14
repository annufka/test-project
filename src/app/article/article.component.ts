import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: any = [];
  constructor(private apiArticle: ArticleService) { }
  ngOnInit(): void {
    this.getListAllArticles();
  }
  getListAllArticles(): void {
    this.apiArticle.getListAllArticles().subscribe(
      data => {
        console.log(data);
        this.articles = data.results;
        console.log(this.articles);
      },
      error => {
        console.log(error);
      }
    );
  }

}
