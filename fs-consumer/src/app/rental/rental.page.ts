import { Component, OnInit } from '@angular/core';
import { Rental, User, Review, Booking } from '../models';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {
  rentalID: number;
  rental: Rental = new Rental();
  userID: number;
  booking: Booking = new Booking();
  dateFrom: string;
  dateTo: string;

  constructor(private actRoute: ActivatedRoute, private httpClient: HttpClient) {
  }


  ngOnInit() {
    this.userID = parseInt(localStorage.getItem('user_id'));
    this.rentalID = parseInt(localStorage.getItem('rental_id'));
    console.log("rental id", this.rentalID);
    console.log("user id", this.userID);

    // const findRental = (data: any) => {
    //   this.rentalID = data.params.rentalID;

    //   this.setRental(this.rentalID);
    // };
    // this.actRoute.queryParamMap.subscribe(findRental);

    this.checkBooking();
  }

  setRental(id: number) {
    console.log('Set rental in rental page\'s id: ', id);
    this.httpClient.get(`http://localhost:5000/properties/${id}`)
    .subscribe( (response: Rental) => {
      console.log('rental page get response: ', response);
      this.rental = response;
      if (!this.rental) {
        alert('Rental Not Found!');
      }
    });
  }

  checkBooking() {
    console.log("rental.consumerID", this.rental.consumerID);
    console.log("this.userID", this.userID);
    if (this.rental.consumerID == this.userID) {
      this.httpClient.get(`http://localhost:5000/properties/${this.rentalID}/${this.userID}`)
      .subscribe ( (response: any) => {
        this.booking.rentalID = this.rentalID;
        this.booking.userID = this.userID;
        this.booking.dateFrom = response.dateFrom;
        this.booking.dateTo = response.dateTo;
      });
    }
  }

  makeBooking() {
    this.booking.rentalID = this.rentalID;
    this.booking.userID = this.userID;
    this.booking.dateFrom = this.dateFrom;
    this.booking.dateTo = this.dateTo;
    this.rental.consumerID = this.userID;
    this.httpClient.post(`http://localhost:5000/properties/${this.rentalID}/bookings`, this.booking)
    .subscribe( (response: Booking) => {
      alert("Booking successful!");
    });
  }

}
