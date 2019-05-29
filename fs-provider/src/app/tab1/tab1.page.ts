import { Component } from '@angular/core';
import { Rental, User } from 'c:/Users/wangl/OneDrive/Desktop/iX/ix/fs-airbnb/src/app/models/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
rental: Rental;
provider: User;

  constructor() {
    this.rental = new Rental('Back to Lisbon', 'Lisbon, Portugal', 200);
    this.provider = new User('Leah', 'Wang');
    this.provider.addRental(this.rental);
  }

}
