import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { LittlebearServiceService } from 'src/app/littlebear-services/littlebear-service.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

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
  toyCatelogData: any[]=[];
  toyUrlHead:string = "http://";


  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private littleBearService: LittlebearServiceService, private primengConfig: PrimeNGConfig,private http: HttpClient) { }

  ngOnInit() {

  
    this.getProductCatelog();

    
    // this.sortOptions = [
    //   { label: 'Price High to Low', value: '!price' },
    //   { label: 'Price Low to High', value: 'price' }
    // ];

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

  getProductCatelog(){
    try {
      this.littleBearService.getToysCatelogue().subscribe((result) => {
        debugger;
        console.log("TOY DATA",result);
        this.toyCatelogData = result;
      })
    } catch (error) {
      console.log("error", error);
    }
  }

}
