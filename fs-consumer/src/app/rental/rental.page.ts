import { Component, OnInit } from '@angular/core';
import { Rental, User, Review } from '../models';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {
  private rentalID: number;
  rental: Rental;

  rentals: Array<Rental> = new Array<Rental>();

  constructor(private actRoute: ActivatedRoute, private rentalServ: RentalService) {
    console.log(this.rentalServ.rentals.length);
  }


  ngOnInit() {
    const findRental = (data: any) => {
      this.rentalID = data.params.rentalID;

      this.rental = this.rentalServ.findRentalById(this.rentalID);
      if (!this.rental) {
        alert("Rental Not Found!");
      }
    };

    this.actRoute.queryParamMap.subscribe(findRental);
  }

}
