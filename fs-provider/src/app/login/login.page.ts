import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../../../fs-consumer/src/app/models';
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
      console.log('login\'s id:', response.id);
      localStorage.setItem('user_id', '' + response.id);
      // const navOptions: NavigationOptions = {
      //   queryParams: {
      //     id: response.id
      //   }
      // };
      this.navCtrl.navigateForward('tab/tabs/tab3');
    },
      (err) => {
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
