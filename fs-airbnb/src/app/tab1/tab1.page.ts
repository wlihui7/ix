import { Component } from '@angular/core';
import { Rental } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: Array<string>;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Beijing',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lisbon',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(value: string) {
    this.initializeItems();
    if (value && value.trim() !== '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(value.toLowerCase()) > -1);
      });
    }
  }
}
