import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ShopService} from "../services/shop.service";
import {OrderService} from "../services/order.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Token} from "@angular/compiler";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = [];
  summ = 0;
  formOrder = new FormGroup({
    name: new FormControl(null),
    address: new FormControl(null),
    phone: new FormControl(null),
  });
  constructor(private apiUser: OrderService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    // @ts-ignore
    this.products = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < this.products.length; i++){
      this.summ += (this.products[i].price*this.products[i].count)
      console.log(this.products[i]);
    }
    console.log(this.products);
  }
  createOrder(Name: string, Address: string, Phone: string, Token: string): void {
    this.apiUser.createOrder(Name, Address, Phone, Token).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  order(): void {
    console.log(this.formOrder.value.name);
    console.log(this.formOrder.value.address);
    console.log(this.formOrder.value.phone);
    // @ts-ignore
    this.createOrder(this.formOrder.value.name, this.formOrder.value.address, this.formOrder.value.phone, localStorage.getItem("my-token"));
  }
}
