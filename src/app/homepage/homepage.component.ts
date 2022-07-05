import { Component, OnInit } from '@angular/core';
import * as animateText from 'src/assets/js/customScript.js';
import { HttpClient } from '@angular/common/http';
import { LittlebearServiceService } from 'src/app/littlebear-services/littlebear-service.service';
declare var animateText: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {  
  products:any[]=[];
  responsiveOptions:any[]=[];
  newAddedToys: any[]=[];
  toyUrlHead:string = "http://";

  constructor(private littleBearService: LittlebearServiceService,private http: HttpClient) { }

    ngOnInit(): void {


        this.getProductCatelog();
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

        // this.products = [
        //     {
        //         name: 'RC Car',
        //         price: '1',
        //         inventoryStatus: 'IN STOCK',
        //         image: 'http://webapi.littlebearsplaywood.com/userimage/Mypicture.png'
        //     },
        //     {
        //         breakpoint: 'Doll',
        //         price: '2',
        //         inventoryStatus: 'IN STOCK',
        //         image: 'https://i.pinimg.com/originals/a9/5f/c0/a95fc0264ce57314a3c9f710d0d5a454.jpg'
        //     },
        //     {
        //         breakpoint: 'Play Yard',
        //         price: '4',
        //         inventoryStatus: 'IN STOCK',
        //         image: 'https://m.media-amazon.com/images/I/71vPwEa7FjS._SL1500_.jpg'
        //     },
        //     {
        //         name: 'Chair Set',
        //         price: '3',
        //         inventoryStatus: 'IN STOCK',
        //         image: 'https://ii1.pepperfry.com/media/catalog/product/k/i/1100x1210/kids-activity-table---chair-set-in-pink-colour-by-urbancart-kids-activity-table---chair-set-in-pink--acxb7p.jpg'
        //     },
        //     {
        //         breakpoint: 'Twin Stroller',
        //         price: '5',
        //         inventoryStatus: 'IN STOCK',
        //         image: 'https://m.media-amazon.com/images/I/61ovxsHSvIL._SY606_.jpg'
        //     },
        //     {
        //         breakpoint: 'Musical Walker',
        //         price: '8',
        //         inventoryStatus: 'IN STOCK',
        //         image: 'https://img.joomcdn.net/af5423c5b65f3521802e436da14df1aaf2807eb3_original.jpeg'
        //     }
        // ];
        setTimeout(function () {
            new animateText();
        }, 3000)
    }

    getProductCatelog(){
        try {
            this.littleBearService.getToysCatelogue().subscribe((result) => {
                debugger;
              console.log("TOY DATA",result);
              let data = result;
              this.newAddedToys = data.slice(-7);
            })
        } catch(error) {
            console.log("error",error)
        }
    }

}
