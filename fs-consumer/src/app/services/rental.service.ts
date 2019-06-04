import { Injectable } from '@angular/core';
import { Rental, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentals: Array<Rental> = new Array<Rental>();

  constructor() {
    const rental1 = new Rental('Back to Lisbon', 'Lisbon', 500);
    rental1.id = 1;
    const rental2 = new Rental('Wang Fu Hotel', 'Beijing', 60);
    rental2.id = 2;
    const rental3 = new Rental('Hill College House', 'Philadelphia', 120);
    rental3.id = 3;

    this.rentals.push(rental1, rental2, rental3);
   }

   getAllRentals(): Array<Rental> {
    return this.rentals;
   }

   findRentalById(id: number): Rental {
     let ret: Rental;
     this.rentals.forEach(
      (rental: Rental) => {
        if (rental.id === id) {
          ret = rental;
        }
    });
     return ret;
   }

   getSavedRentals(): Array<Rental> {
    let ret: Array<Rental> = new Array<Rental>();
    const rental1 = new Rental('Back to Lisbon', 'Lisbon', 500);
    rental1.id = 1;
    const rental2 = new Rental('Wang Fu Hotel', 'Beijing', 60);
    rental2.id = 2;
    ret.push(rental1, rental2);
    return ret;
   }
}
