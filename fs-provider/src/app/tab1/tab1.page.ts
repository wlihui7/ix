import { Component } from '@angular/core';
import { Rental, User } from 'c:/Users/wangl/OneDrive/Desktop/iX/ix/fs-consumer/src/app/models/index';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  savedRentals: Array<Rental>;
  constructor(private navCtrl: NavController, private httpClient: HttpClient) {
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

