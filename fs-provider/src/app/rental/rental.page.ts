import { Component, OnInit } from '@angular/core';
import { Rental, User, Review } from 'c:/Users/wangl/OneDrive/Desktop/iX/ix/fs-airbnb/src/app/models/index';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  rental: Rental;
  navCtrl: NavController;

  constructor(navCtrl: NavController) {
    this.rental = new Rental('Back to Lisbon', 'Lisbon, Portugal', 200);
    const Leah: User = new User('Leah', 'Wang');
    const Anna: User = new User('Anna', 'Collins');
    const review1: Review = new Review(Leah, this.rental, 'it was good');
    const review2: Review = new Review(Anna, this.rental, 'it was bad');
    this.rental.addReview(review1);
    this.rental.addReview(review2);
    this.navCtrl = navCtrl;
  }


  ngOnInit() {
  }

  createRental() {
    this.navCtrl.navigateForward('home/tabs/tab2');
  }

}
