

export class Membership {
    
    memberid: number;
    memcreationdate: Date;
    mindeposit: number;
    currentdeposit: string;
    phonenumber: number;
    address: string;
    membershipcanceldate: Date;
    GradeDescription: string;
    RecipeId: number;
    ItemDescription: string;
}

export class ToyType {
    
    toytypeid: number;
    warranty: number;
    price: number;
    toyname: string;
    numberoftoys: number;
    manufacturer: string;
    currentavailability: number;
    toyimage: string;
    toydescription: string;
    categoryid: number;
    isTobeDeleted: number;
    Message: any;
}

export class ToysCategory {
    
    categoryid: number;
    agegroup: string;
    categoryitemsid: number;    
}