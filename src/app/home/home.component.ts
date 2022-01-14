import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: any;
  profile: any;
  constructor(private apiProfile: UserService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("my-token");
    this.getProfile(this.token);
  }

  testFunc(): void {
    console.log('Hello');
  }
  getProfile(Token: string): void {
    this.apiProfile.getProfile(Token).subscribe(
      data => {
        console.log(data);
        this.profile=data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
