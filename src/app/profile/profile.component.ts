import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  token: any;
  profile: any;
  formProfile = new FormGroup({
    phone: new FormControl(null)
  });
  baseurl = environment.apiUrl;
  // @ts-ignore
  fileToUpload: File = null;
  imageUrl = '';
  constructor(private apiUser: UserService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("my-token");
    if (this.token.length > 5) {
      this.getProfile(this.token);

    } else {
      window.location.href = '/login';
    }

  }
  getProfile(Token: string): void {
    this.apiUser.getProfile(Token).subscribe(
      data => {
        console.log(data);
        this.profile = data;
        this.formProfile = new FormGroup({
          phone: new FormControl(data.phone)
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  patch() {
    console.log("Hello");
    this.patchUserProfile(this.formProfile.value.phone, this.token);
  }

  patchUserProfile(Phone: string,Token: string): void {
    this.apiUser.patchUserProfile(Phone, Token).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  handleFileInput(files: any) {
    console.log(files);
    this.fileToUpload = files.files.item(0);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  update() {
    console.log("Photo");
    this.updatePhoto(this.fileToUpload, this.token);
  }

  updatePhoto(Photo: File, Token: string): void {
    this.apiUser.updatePhoto(Photo, Token).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
