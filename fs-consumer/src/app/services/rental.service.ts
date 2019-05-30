import { Injectable } from '@angular/core';
import { Rental } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentals: Array<Rental> = new Array<Rental>();

  constructor() {

   }

   getAllRentals(): Array<Rental> {
    const rental1 = new Rental();
    rental1.name = 'Back to Lisbon';
    rental1.id = 1;
    const rental2 = new Rental();
    rental2.name = 'Wang Fu Hotel';
    rental2.id = 2;
    const rental3 = new Rental();
    rental3.name = 'Hill College House';
    rental3.id = 3;

    this.rentals.push(rental1, rental2, rental3);
    return this.rentals;
   }

   findRentalById(id: number): Rental {
    this.rentals.forEach(
      (rental: Rental) => {
        if (rental.id === id) {
          return rental;
        }
    });
    return null;
   }
}
