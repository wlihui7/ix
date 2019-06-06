import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  user: User = new User();
  id: number;

  constructor(private actRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    const getUser = (data: any) => {
      console.log(data.params.id);
      this.id = data.params.id;
      this.setUser(this.id);
    };
    this.actRoute.queryParamMap.subscribe(getUser);

  }

  setUser(id: number) {
    this.httpClient.get(`http://localhost:5000/users/${id}`)
    .subscribe( (response: User) => {
      console.log(response[0]);
      this.user = response[0];
  });



}

}
