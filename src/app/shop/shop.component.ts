import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../services/article.service";
import {ShopService} from "../services/shop.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: any;
  productList: any = [];
  constructor(private apiShop: ShopService) { }

  ngOnInit(): void {
  this.getListAllProducts();
  this.getProduct();
  }
  getListAllProducts(): void {
    this.apiShop.getListAllProducts().subscribe(
      data => {
        console.log(data);
        this.products = data;
        console.log(this.products);
      },
      error => {
        console.log(error);
      }
    );
  }

  addCart(item: any): void {
    if (this.productList.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      let flag = false;
      for (let i = 0; i < this.productList.length; i++)
      {
        if (this.productList[i].id === item.id) {
          console.log('dell');
          this.productList.push({id: item.id, count: this.productList[i].count + 1,  name: item.name, price: item.price});
          this.productList.splice(i, 1);
          flag = true;
        }
      }
      if (!flag) {
        this.productList.push({id: item.id, count: 1,  name: item.name, price: item.price});
      }
    } else {
      this.productList.push({id: item.id, count: 1,  name: item.name, price: item.price});
    }

    localStorage.setItem('cart', JSON.stringify(this.productList));
    window.location.href = '/cart';
  console.log(this.productList);
  }

  getProduct() {
    // @ts-ignore
    this.productList = JSON.parse(localStorage.getItem("cart"));
    console.log(this.productList);
  }
}
