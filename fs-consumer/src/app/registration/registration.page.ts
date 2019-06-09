import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public user: User = new User();

  constructor(private navCtrl: NavController, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  enterProfile() {
    this.httpClient.post('http://localhost:5000/users', this.user)
    .subscribe( (response: User) => {
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

}
