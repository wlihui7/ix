import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../../fs-consumer/src/app/models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user: User = new User();
  id: string;

  constructor(private actRoute: ActivatedRoute, private httpClient: HttpClient, private navCtrl: NavController) { }

  setUser(id: number) {
    this.httpClient.get(`http://localhost:5000/users/${id}`)
    .subscribe( (response: User) => {
      // console.log(response);
      this.user = response;
  });
}

  ngOnInit() {
    this.id = localStorage.getItem('user_id');
    console.log(this.id);
    if (!this.id) {
      this.navCtrl.navigateForward('');
    } else {
      this.httpClient.get(`http://localhost:5000/users/${this.id}`)
      .subscribe( (response: User) => {
      // console.log(response);
        this.user = response;
    });
    }
  }

}
