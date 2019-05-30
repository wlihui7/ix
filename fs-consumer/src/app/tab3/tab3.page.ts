import { Component } from '@angular/core';
import { Rental } from '../models';
import { NavController } from '@ionic/angular';
import { PropertyBindingType } from '@angular/compiler';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  rentals: Array<Rental> = [];

  constructor(private navCtrl: NavController, private rentalService: RentalService) {
    this.rentals = this.rentalService.getAllRentals();
  }

  navToRental(rental: Rental) {
    const navOptions: NavigationOptions = {
      queryParams: {
        rentalName: rental.name,
        rentalID: rental.id
      }
    };
    this.navCtrl.navigateForward('rentals-details', navOptions);
  }

}
