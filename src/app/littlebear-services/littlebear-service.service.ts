import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membership } from 'src/app/Models/lbpModels';
import { ToyType } from 'src/app/Models/lbpModels';
import { ToysCategory } from 'src/app/Models/lbpModels';

@Injectable({
  providedIn: 'root'
})
export class LittlebearServiceService {

  //API = "https://localhost:44386";
  API = "http://webapi.littlebearsplaywood.com"



  constructor(private http: HttpClient) { }

  public getMembership() {
    return this.http.get<Membership[]>(this.API + '/api/MembershipData');
  }

  public addToysCatelogue(toysData) {
    
    // let toy: ToyType[] = [{
    //   toytypeid: 94,
    //   warranty: 2,
    //   price: 24,
    //   toyname: 'naa new toy 8',
    //   numberoftoys: 2,
    //   manufacturer: 'aaa',
    //   currentavailability: 2,
    //   toyimage: 'string',
    //   toydescription: 'new description 8',
    //   categoryid: 1,
    //   isTobeDeleted: 0,
    //   Message:''
    // }];
  
    //return this.http.post<ToyType>(this.API + '/api/uploadImage', formData); 
    //return this.http.post<ToyType>(this.API + '/api/updateToy', toy.filter(x=>x.toytypeid==2)); 
    return this.http.post<ToyType>(this.API + '/api/updateToy', toysData); 
  }

  public uploadImage(formData) {
    return this.http.post<ToyType>(this.API + '/api/uploadImage', formData); 
  }
  

  public getToysCatelogue() {
    return this.http.get<ToyType[]>(this.API + '/api/toytypedata');      
  }

  public getToysCategory() {
    return this.http.get<ToysCategory[]>(this.API + '/api/toyscategorydata');      
  }


}
