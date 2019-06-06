import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { User } from "../../models/user";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public user: any = {
    name: '',
    role: '',
    email: '',
    password: ''
  };

  constructor(private httpClient:HttpClient, private navCtrl: NavController) {}

  submit() {
    console.log(`submitting ${this.user} to the server...`);
    console.log(this.user);
    this.httpClient.post('http://localhost:5000/users', this.user)
    .subscribe( (response: User) => {
      console.log(response.name);
      let navOptions: NavigationOptions = {
        queryParams: {
          person: response.name
        }
      };
      this.navCtrl.navigateForward('profile', navOptions);
      },
      (err) => {
        console.log(err);
        if (err.status == '400') {
          alert('Invalid Email');
        }
      }
    );
  }

}
