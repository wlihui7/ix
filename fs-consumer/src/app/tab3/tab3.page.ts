import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Rental, User } from '../models';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public rentals: Array<Rental> = [];

  constructor(private navCtrl: NavController, private rentalServ: RentalService) {
    this.rentals = this.rentalServ.getAllRentals();
  }

  ngOnInit() {
  }
  enterExplore() {
    this.navCtrl.navigateForward('tab');
  }

  enterRental(rental: Rental) {
    const navOptions: NavigationOptions = {
      queryParams: {
        rentalID: rental.id
      }
    };
    this.navCtrl.navigateForward('rental', navOptions);
  }

}
