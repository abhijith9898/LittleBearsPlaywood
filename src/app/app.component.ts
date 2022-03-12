import { Component } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
//import {StyleClassModule} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'little-bears-playwood';
  menuItems: MegaMenuItem[];
  responsiveOptions:any[]=[];
  products:any[]=[];

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Home',
                // items: [
                //     [
                //         {
                //             label: 'Video 1',
                //             items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                //         },
                //         {
                //             label: 'Video 2',
                //             items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                //         }
                //     ],
                //     [
                //         {
                //             label: 'Video 3',
                //             items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                //         },
                //         {
                //             label: 'Video 4',
                //             items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                //         }
                //     ]
                // ]
            },
            {
                label: 'Products',
                items: [
                    [
                        {
                            label: 'User 1',
                            items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                        },
                        {
                            label: 'User 2',
                            items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                        },
                    ],
                    [
                        {
                            label: 'User 3',
                            items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                        },
                        {
                            label: 'User 4',
                            items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'User 5',
                            items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                        },
                        {
                            label: 'User 6',
                            items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'About Us',
                // items: [
                //     [
                //         {
                //             label: 'Event 1',
                //             items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                //         },
                //         {
                //             label: 'Event 2',
                //             items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                //         }
                //     ],
                //     [
                //         {
                //             label: 'Event 3',
                //             items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                //         },
                //         {
                //             label: 'Event 4',
                //             items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                //         }
                //     ]
                // ]
            },
            {
                label: 'Play Guide',
                // items: [
                //     [
                //         {
                //             label: 'Setting 1',
                //             items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                //         },
                //         {
                //             label: 'Setting 2',
                //             items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                //         },
                //         {
                //             label: 'Setting 3',
                //             items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                //         }
                //     ],
                //     [
                //         {
                //             label: 'Technology 4',
                //             items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                //         }
                //     ]
                // ]
            }
        ]

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];

        this.products = [
            {
                name: 'RC Car',
                price: '$1',
                inventoryStatus: 'IN STOCK',
                image:'https://image.made-in-china.com/2f0j00oEvUgnQaaZzw/12V-Low-Price-Kids-Electric-Battery-Kids-Toys-Car-2019-Baby-Car-for-Children-Driving-Ride-on-Electric-Toy-Car-for-Kids-to-Drive.jpg'
            },
            {
                breakpoint: 'Doll',
                price: '$2',
                inventoryStatus: 'IN STOCK',
                image:'https://i.pinimg.com/originals/a9/5f/c0/a95fc0264ce57314a3c9f710d0d5a454.jpg'
            },
            {
                breakpoint: 'Play Yard',
                price: '$4',
                inventoryStatus: 'IN STOCK',
                image:'https://m.media-amazon.com/images/I/71vPwEa7FjS._SL1500_.jpg'
            },
            {
                name: 'Chair Set',
                price: '$3',
                inventoryStatus: 'IN STOCK',
                image:'https://ii1.pepperfry.com/media/catalog/product/k/i/1100x1210/kids-activity-table---chair-set-in-pink-colour-by-urbancart-kids-activity-table---chair-set-in-pink--acxb7p.jpg'
            },
            {
                breakpoint: 'Twin Stroller',
                price: '$5',
                inventoryStatus: 'IN STOCK',
                image:'https://m.media-amazon.com/images/I/61ovxsHSvIL._SY606_.jpg'
            },
            {
                breakpoint: 'Musical Walker',
                price: '$8',
                inventoryStatus: 'IN STOCK',
                image:'https://img.joomcdn.net/af5423c5b65f3521802e436da14df1aaf2807eb3_original.jpeg'
            }
        ];
    }
}
