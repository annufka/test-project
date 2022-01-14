import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import {LoginComponent} from './login/login.component';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { ProfileComponent } from './profile/profile.component';
import {ShopComponent} from "./shop/shop.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'home', component: HomeComponent},
   {path: 'article', component: ArticleComponent},
   {path: 'login', component: LoginComponent},
   {path: 'filter/category', component: FilterCategoryComponent},
   {path: 'profile', component: ProfileComponent},
   {path: 'shop', component: ShopComponent},
   {path: 'cart', component: CartComponent},
   {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
