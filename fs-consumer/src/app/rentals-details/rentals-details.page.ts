import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../models';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-rentals-details',
  templateUrl: './rentals-details.page.html',
  styleUrls: ['./rentals-details.page.scss'],
})
export class RentalsDetailsPage implements OnInit {
  private rentalID: number;
  currentRental: Rental;

  constructor(private actRoute: ActivatedRoute, private rentalService: RentalService) {
    this.rentalService.getAllRentals();
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.rentalID = data.params.rentalID;

      this.currentRental = this.rentalService.findRentalById(this.rentalID);
    };

    this.actRoute.queryParamMap.subscribe(arrow);

  }

}
