import { Injectable } from '@angular/core';
import { Rental, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentals: Array<Rental> = new Array<Rental>();

  constructor() {
    const rental1 = new Rental();
    rental1.id = 1;
    rental1.name = 'Back to Lisbon';
    rental1.location = 'Lisbon';
    rental1.price = 500;
    const rental2 = new Rental();
    rental2.id = 2;
    rental2.name = 'Wang Fu Hotel';
    rental2.location = 'Beijing';
    rental2.price = 60;

    this.rentals.push(rental1, rental2);
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
    const rental1 = new Rental();
    rental1.name = 'Back to Lisbon';
    rental1.location = 'Lisbon';
    rental1.price = 500;
    const rental2 = new Rental();
    rental2.id = 2;
    rental2.name = 'Wang Fu Hotel';
    rental2.location = 'Beijing';
    rental2.price = 60;
    ret.push(rental1, rental2);
    return ret;
   }
}
