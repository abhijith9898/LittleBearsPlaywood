import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { LittlebearServiceService } from 'src/app/littlebear-services/littlebear-service.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
//import {MessageService} from 'primeng/api';, private messageService: MessageService

@Component({
  selector: 'app-add-toys-catelogue',
  templateUrl: './add-toys-catelogue.component.html',
  styleUrls: ['./add-toys-catelogue.component.css']
})
export class AddToysCatelogueComponent implements OnInit {

  uploadedFiles: any[] = [];
  categoryList: any[] = [];
  selectedCategory: any;
  dataSource:any[]=[]

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3)]),
    warranty: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private primengConfig: PrimeNGConfig, private littleBearService: LittlebearServiceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.getToysCategory();
    
  }


  get f(){
    return this.myForm.controls;
  }

  getToysCategory(){
    try {
      this.littleBearService.getToysCategory().subscribe((result) => {
        console.log("TOY DATA",result);
        this.categoryList = result;
      })
    } catch (error) {
      console.log("error", error);
    }
  }

  onChangeCategory() {
    this.selectedCategory = this.myForm.get('category').value;
  }
     
  onFileChange(event, imageupload) {
    //debugger;
    try {
      console.log(this.uploadedFiles);
      this.uploadedFiles = [];
      if (event.files.length > 0) {
        const file = event.files[0];
        let data = {
          name : file.name,
          size : file.size,
          type : file.type
        };
        this.uploadedFiles[0] = data;
        this.myForm.patchValue({
          fileSource: file
        });
        imageupload.clear();
      }
    } catch (error) {
      console.log("error", error);
    }
  }
     
  submit() {
    //debugger;
    try {
      const formData = new FormData();
      formData.append('file', this.myForm.get('fileSource').value);
      formData.append('name', this.myForm.get('name').value);
      formData.append('description', this.myForm.get('description').value);
      formData.append('warranty', this.myForm.get('warranty').value);
      formData.append('categoryid', this.selectedCategory?.categoryid);
      this.littleBearService.addToysCatelogue(formData).subscribe((res) => {
        if(res) {
          console.log("ADD TOY", res);
          //this.messageService.add({ severity: 'success', summary: 'Added Successfully'});
          alert("Added successfully");
        }
      })
    } catch (error) {
      console.log("error", error);
    }
  }

  formClear() {
    //debugger;
    //this.myForm = null;
  }

}
