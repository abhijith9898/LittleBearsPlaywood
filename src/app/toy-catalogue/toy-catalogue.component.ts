import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-toy-catalogue',
  templateUrl: './toy-catalogue.component.html',
  styleUrls: ['./toy-catalogue.component.css']
})
export class ToyCatalogueComponent implements OnInit {

  products: any[] = [];

  sortOptions: any[] = [];

  sortOrder: number;

  sortField: string;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    // this.productService.getProducts().then(data => this.products = data);
    this.products = [
      {
        name: 'RC Car',
        description: "Ride",
        price: '1',
        inventoryStatus: 'IN STOCK',
        image: 'https://image.made-in-china.com/2f0j00oEvUgnQaaZzw/12V-Low-Price-Kids-Electric-Battery-Kids-Toys-Car-2019-Baby-Car-for-Children-Driving-Ride-on-Electric-Toy-Car-for-Kids-to-Drive.jpg'
      },
      {
        breakpoint: 'Doll',
        description: "Play",
        price: '2',
        inventoryStatus: 'IN STOCK',
        image: 'https://i.pinimg.com/originals/a9/5f/c0/a95fc0264ce57314a3c9f710d0d5a454.jpg'
      },
      {
        breakpoint: 'Play Yard',
        description: "Play",
        price: '4',
        inventoryStatus: 'IN STOCK',
        image: 'https://m.media-amazon.com/images/I/71vPwEa7FjS._SL1500_.jpg'
      },
      {
        name: 'Chair Set',
        description: "play",
        price: '3',
        inventoryStatus: 'IN STOCK',
        image: 'https://ii1.pepperfry.com/media/catalog/product/k/i/1100x1210/kids-activity-table---chair-set-in-pink-colour-by-urbancart-kids-activity-table---chair-set-in-pink--acxb7p.jpg'
      },
      {
        name: 'Twin Stroller',
        description: "play away",
        price: '5',
        inventoryStatus: 'IN STOCK',
        image: 'https://m.media-amazon.com/images/I/61ovxsHSvIL._SY606_.jpg'
      },
      {
        name: 'Musical Walker',
        description: "Musical Walker",
        category: "Puzzle",
        price: '8',
        inventoryStatus: 'IN STOCK',
        image: 'https://img.joomcdn.net/af5423c5b65f3521802e436da14df1aaf2807eb3_original.jpeg'
      }
    ];



    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
