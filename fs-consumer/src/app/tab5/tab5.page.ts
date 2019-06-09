import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
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
    // const getUser = (data: any) => {
    //   // console.log(data.params.id);
    //   // this.id = data.params.id;
    //   this.setUser(this.id);
    // };
    // this.actRoute.queryParamMap.subscribe(getUser);

  }

 



}


