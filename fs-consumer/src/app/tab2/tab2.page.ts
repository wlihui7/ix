import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RentalService } from '../services/rental.service';
import { Rental } from '../models';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  savedRentals: Array<Rental>;
  constructor(private navCtrl: NavController, private rentalServ: RentalService, private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:5000/properties')
    .subscribe( (response: any) => {
      this.savedRentals = response;
  });
}

  ngOnInit() {
  }

  enterExplore() {
    this.navCtrl.navigateForward('tab/tabs/tab1');
  }

  enterRental(rental: Rental) {
    localStorage.setItem('rental_id', '' + rental.id);
    // const navOptions: NavigationOptions = {
    //   queryParams: {
    //     rentalID: rental.id
    //   }
    // };
    this.navCtrl.navigateForward('rental');
  }
}
