import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();

  constructor(private navCtrl: NavController, private httpClient: HttpClient) {}

  ngOnInit() {
  }
  enterExplore() {
    this.httpClient.post('http://localhost:5000/auth/login', this.user)
    .subscribe( (response: User) => {
      console.log("get's user: ", this.user, "get's response: ", response);
      const navOptions: NavigationOptions = {
        queryParams: {
          id: response.id
        }
      };
      this.navCtrl.navigateForward('tab/tabs/tab5', navOptions);
    },
      (err) => {
        console.log(err);
        alert(err.error.msg);
        // if (err.status == '400') {
        //   alert('Invalid Email');
        // }
      }
    );
  }
    // this.navCtrl.navigateForward('tab/tabs/tab1');
  // }

  enterLogin() {
    this.navCtrl.navigateForward('registration');
  }
}
