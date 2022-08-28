import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { LittlebearServiceService } from 'src/app/littlebear-services/littlebear-service.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MessageService,ConfirmationService} from 'primeng/api';
//var parseXML = require('xml-parse-from-string')
//import { parseXML } from 'xml-parse-from-string'

@Component({
  selector: 'app-add-toys-catelogue',
  templateUrl: './add-toys-catelogue.component.html',
  styleUrls: ['./add-toys-catelogue.component.css'],
  providers: [MessageService,ConfirmationService],
})
export class AddToysCatelogueComponent implements OnInit {

  uploadedFiles: any[] = [];
  categoryList: any[] = [];
  selectedCategory: any;
  dataSource:any[]=[];
  toysList:any[]=[];
  isEditMode:boolean = false;
  isSpinner: boolean;

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3)]),
    warranty: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  deleteToysList: any[]=[];
  responseList: any[]=[];

  constructor(private primengConfig: PrimeNGConfig,private messageService: MessageService,private confirmationService: ConfirmationService, private littleBearService: LittlebearServiceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.getToysCategory();
    this.constructDefaultRowsInTable();
    
  }

  constructDefaultRowsInTable() {
    if (
        this.toysList === undefined ||
        this.toysList.length === 0
    ) {
        this.toysList = [];
        this.addNewRow();
    }
  }

  addNewRow(focus?) {
    let toysList: any[] = [];
    toysList = this.toysList;
    this.constructToyObj(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      toysList
    );
    this.toysList = [...this.toysList];

    if (focus) {
      if (toysList.length > 0) {
          let length = toysList.length;
          setTimeout(() => {
              document.getElementById("row" + length).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
          }, 100
          );
          setTimeout(() => document.getElementById("row" + length).focus());
      }
  }
  }

  constructToyObj(name, description, category, warranty, imageUrl, list) {
    const curcondittion: any = {
      name: name,
      description: description,
      category: category,
      warranty: warranty,
      toyimage: imageUrl,
    };
    list.push(curcondittion);
  }

  onEditclick() {
    this.isEditMode = true;
  }

  onCancelclick() {
    this.isEditMode = false;
    this.toysList = [];
    this.deleteToysList = [];
    this.constructDefaultRowsInTable();
        this.getToysList()
   
  }

  onFileSelect(event, rowData){}

  toggleMenu(menu, event, rowData) {

    // this.items.forEach((menuItem) => {
    //     menuItem.title = rowData.fileId;
    // });
    // menu.toggle(event);
}

cancelfiledown(rowData) {
  //this.deleteQualiContent(rowData);
  rowData.toyimage = "";
  rowData.fileName = "";
}

// deleteQualiContent(dataObj) {
//   for (const iterator of this.responseData.academicRegisterVO) {
//       iterator.lact = 0;
//       this.qualificationTempList.push(iterator);
//   }
// }

deleteRow(dataObj) {
  debugger;
  if (dataObj.toytypeid !== undefined) {
      const labelStatus = "Do you want to Delete?";
      this.confirmationService.confirm({
          message: labelStatus,
          header: "Confirmation",
          icon: "pi pi-exclamation-triangle",
          accept: async () => {
              try {
                  const index = this.toysList.indexOf(dataObj);
                  this.toysList = this.toysList.filter(
                      (val, i) => i !== index
                  );

                  if (this.toysList.length === 0) {
                      this.addNewRow();
                  }
                  let tempData = this.responseList.find(element => element.toytypeid === dataObj.toytypeid)
                  if (tempData) {
                      tempData.isTobeDeleted = 1;
                      // console.log("s", tempData);
                      this.deleteToysList.push(tempData);

                  }

                  this.isSpinner = false;
                  this.messageService.add({
                      severity: "success",
                      summary: "Deleted",
                  });


              } catch (e) {
                  this.isSpinner = false;
                  console.log("Error:", e.message);

              }
          },
      });
  } else {
      const index = this.toysList.indexOf(dataObj);
      this.toysList = this.toysList.filter(
          (val, i) => i !== index
      );

      if (this.toysList.length === 0) {
          this.addNewRow();
      }
  }

}


  get f(){
    return this.myForm.controls;
  }

  getToysCategory(){
    try {
      this.isSpinner = true;
      this.littleBearService.getToysCategory().subscribe((result) => {
        console.log("category data",result);
        this.categoryList = result;
        this.getToysList();
      },
      (error) => {
        console.log("error", error);
        this.isSpinner = false;
      })
      this.isSpinner = false;
    } catch (error) {
      console.log("error", error);
      this.isSpinner = false;
    }
  }

  getToysList(){
    try {
      this.isSpinner = true;
      this.littleBearService.getToysCatelogue().subscribe((result) => {
        console.log("TOY DATA",result);
        this.responseList = result;
        this.toysList = result;
        if(this.toysList.length!=0){
          for(const iterator of this.toysList){
            if(iterator.categoryid){
              iterator.category = this.categoryList.find(element=> element.categoryid == iterator.categoryid);
              iterator.fileName = 'image';
            }
          }
        }
        this.isSpinner = false;
      },(error)=>{
        console.log("error",error)
        this.isSpinner = false;
      })
    } catch (error) {
      console.log("error", error);
      this.isSpinner = false;
    }
  }

  onChangeCategory(rowData) {
    rowData.updated = true;
  }
     


  onToyImageUpload(event, fileUp, rowData) {
    debugger
    this.confirmationService.confirm({
        message: "Are you sure you want to Upload ?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: async () => {
            try {
              if (event.files.length > 0) {
                const file = event.files[0];
                
                this.myForm.patchValue({
                  fileSource: file
                });
                const formData = new FormData();
                formData.append('file', this.myForm.get('fileSource').value);
                this.isSpinner = true;
                this.littleBearService.uploadImage(formData).subscribe((res) => {
                  if(res) {
                    console.log("ADD IMAGE", res.Message);
                    this.messageService.add({ severity: 'success', summary: 'Image Uploaded'});
                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(res.Message,"text/xml");
                    rowData.toyimage = xmlDoc.getElementsByTagName("urlPath")[0].childNodes[0].nodeValue;
                    let message = xmlDoc.getElementsByTagName("message")[0].childNodes[0].nodeValue;
                    rowData.fileName = xmlDoc.getElementsByTagName("fileName")[0].childNodes[0].nodeValue;
                    rowData.updated = true;
                    
                  }
                })
                fileUp.clear();
                this.isSpinner = false;
              }
            } catch (e) {
                console.log("Error:", e.message);
            }
        },
        reject: () => {
            fileUp.clear();
            return;
        },
    });
  }
     
 

  save(){
    
    this.confirmationService.confirm({
      message: "Are you sure you want to Save ?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        try {
          debugger;
          let addUpdateList = [];
          for(const iterator of this.toysList) {
            let toysObj:any = {};
            if(iterator.toytypeid == undefined || iterator.updated == true) {
               if(iterator.toytypeid != undefined) {
                toysObj.toytypeid = iterator.toytypeid;
               } else {
                toysObj.toytypeid = 0;
               }
               toysObj.warranty = iterator.warranty;
               toysObj.price = 24;
               toysObj.toyname = iterator.toyname;
               toysObj.numberoftoys = 2;
               toysObj.manufacturer = "aa";
               toysObj.currentavailability = 2;
               toysObj.toyimage = iterator.toyimage;
               toysObj.toydescription = iterator.toydescription;
               toysObj.categoryid = iterator.category.categoryid;
               toysObj.isTobeDeleted = 0;
               addUpdateList.push(toysObj);
            }
          }
          addUpdateList = [...this.deleteToysList, ...addUpdateList];
          this.littleBearService.addToysCatelogue(addUpdateList).subscribe((res) => {
            if (res) {
              console.log("ADD TOY", res);
              debugger;
              this.messageService.add({ severity: 'success', summary: 'Saved Successfully'});
              this.getToysList();
            }
          })    
    
        } catch (error) {
          console.log("error",error)
        }
      },
      reject: () => {
          return;
      },
  });
  }

  textChange(rowData) {
    console.log("CHANGE WORKED",rowData);
    rowData.updated = true;
  }

  formClear() {
    //debugger;
    //this.myForm = null;
  }


}
