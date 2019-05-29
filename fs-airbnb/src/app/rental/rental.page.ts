import { Component, OnInit } from '@angular/core';
import { Rental, User} from '../models';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  public rental: Rental;
  constructor() { 
    this.rental = new Rental('Lisbon, Portugal');
  }

  ngOnInit() {
  }

}
