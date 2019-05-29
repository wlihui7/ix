import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Rental, User } from '../models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public rentals: Array<Rental>;

  constructor(private navCtrl: NavController) {
    this.rentals = new Array<Rental>();
    let rental1 = new Rental('Back to Lisbon','Lisbon, Portgual', 100);
    let rental2 = new Rental('Wang Fu Hotel', 'Beijing, China', 50);
    this.rentals.push(rental1);
    this.rentals.push(rental2);
  }

  ngOnInit() {
  }
  enterExplore() {
    this.navCtrl.navigateForward('tab');
  }

  enterRental() {
    this.navCtrl.navigateForward('rental');
  }

}
