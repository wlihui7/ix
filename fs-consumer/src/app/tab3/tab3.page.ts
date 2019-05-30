import { Component } from '@angular/core';
import { Rental } from '../models';
import { NavController } from '@ionic/angular';
import { PropertyBindingType } from '@angular/compiler';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  rentals: Array<Rental>;

  constructor(private navCtrl: NavController) {
    this.rentals = new Array<Rental>();

    const rental1 = new Rental('Back to Lisbon');
    const rental2 = new Rental('Wang Fu Hotel');

    this.rentals.push(rental1, rental2);

  }

  navToRental(rental: Rental) {
    const navOptions: NavigationOptions = {
      queryParams: {
        rentalName: rental.name
      }
    };
    this.navCtrl.navigateForward('rental-details', navOptions);
  }

}
