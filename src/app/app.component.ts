import { Component } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { ActivatedRoute, Router } from "@angular/router";
//import {StyleClassModule} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'little-bears-playwood';
  menuItems: MegaMenuItem[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
  ){

  }

    ngOnInit() {        
        // this.menuItems = [
        //     {
        //         label: 'Home',
        //         routerLink: ["/home"],
        //     },
        //     {
        //         label: 'How it works',
        //         routerLink: ["/how-it-works"],
        //     },
        //     {
        //         label: 'Toys',
        //         items: [
        //             [
        //                 {
        //                     label: 'User 1',
        //                     items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
        //                 },
        //                 {
        //                     label: 'User 2',
        //                     items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
        //                 },
        //             ],
        //             [
        //                 {
        //                     label: 'User 3',
        //                     items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
        //                 },
        //                 {
        //                     label: 'User 4',
        //                     items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
        //                 }
        //             ],
        //             [
        //                 {
        //                     label: 'User 5',
        //                     items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
        //                 },
        //                 {
        //                     label: 'User 6',
        //                     items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
        //                 }
        //             ]
        //         ]
        //     },
        //     {
        //         label: 'Terms and Policies',
        //         routerLink: ["/policy"],
        //     },
        //     {
        //         label: 'About Us',
        //     }
        // ]      

        
    }

}
