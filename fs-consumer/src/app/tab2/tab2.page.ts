import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RentalService } from '../services/rental.service';
import { Rental } from '../models';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  savedRentals: Array<Rental>;
  constructor(private navCtrl: NavController, private rentalServ: RentalService) {
    this.savedRentals = this.rentalServ.getSavedRentals();
  }

  ngOnInit() {
  }

  enterExplore() {
    this.navCtrl.navigateForward('tab/tabs/tab1');
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
