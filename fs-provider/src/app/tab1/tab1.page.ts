import { Component } from '@angular/core';
import { Rental, User } from 'c:/Users/wangl/OneDrive/Desktop/iX/ix/fs-airbnb/src/app/models/index';
import { NavController } from '@ionic/angular';
import { RentalService } from '../services/rental.service';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public rentals: Array<Rental> = [];

  constructor(private navCtrl: NavController, private rentalServ: RentalService) {
    this.rentals = this.rentalServ.getAllRentals();
  }

  ngOnInit() {
  }
  createRental() {
    this.navCtrl.navigateForward('home/tabs/tab2');
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

