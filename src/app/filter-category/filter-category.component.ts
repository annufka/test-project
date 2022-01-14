import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../services/article.service";


@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit {

  categories: any = [];
  constructor(private apiArticle: ArticleService) { }

  ngOnInit(): void {
      this.getListAllCategory();
    }
  getListAllCategory(): void {
      this.apiArticle.getListAllCategory().subscribe(
        data => {
          console.log(data);
          this.categories = data;
          console.log(this.categories);
        },
        error => {
          console.log(error);
        }
      );
    }

  setCategory(id: string): void {
    console.log(id)
  }
}
