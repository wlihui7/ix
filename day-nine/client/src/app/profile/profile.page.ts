import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from "../../models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;
  name: string;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    const findRentalById = (data: any) => {
      console.log(data.params.person);
      this.name = data.params.person;
    };
    this.actRoute.queryParamMap.subscribe(findRentalById);
  }

}
