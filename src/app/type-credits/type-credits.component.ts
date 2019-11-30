import { Component, OnInit } from "@angular/core";
import { CreditService } from "../services/credit.service";

@Component({
  selector: "app-type-credits",
  templateUrl: "./type-credits.component.html",
  styleUrls: ["./type-credits.component.css"]
})
export class TypeCreditsComponent implements OnInit {
  constructor(private creditServie: CreditService) {}
  credits;
  fileList = new Array<any>();
  urls = new Array<any>();
  files = new Array<any>();
  filename: any;
  text: any ;
  imgURL= new Array<any>();
  tmp; templa; pdf;
  name: String ;
  images ;
  ngOnInit() {
 
  }
  onFilesChange(fileList) {
   
    this.urls = [];
    this.fileList= fileList;
    console.log("ff",this.fileList);
    let j = 0;
    for(let i = 0 ; i<this.fileList.length; i++) {
      let chaine:string = this.fileList[i].name;
     let result = chaine.split('.')
      if(result[1]=='jpg' ||result[1]=='JPG'|| result[1]=='png' || result[1]=='jpeg'){
    const reader = new FileReader();
    reader.readAsDataURL(this.fileList[i]);
    reader.onload = (_event) => { 
      this.imgURL[j] = reader.result; 
      j++
    }
      }
    }
    this.filename = this.fileList[0].name
   
      this.creditServie.upload_file(this.fileList[0]).subscribe(
      next => console.log(next)
  );


 


   

  }
 onFilesChangef(event) {
    this.fileList = event.target.files;
   
    console.log(this.fileList)
    let j = 0;
    for(let i = 0 ; i<this.fileList.length; i++) {
      let chaine:string = this.fileList[i].name;
     let result = chaine.split('.')
      if(result[1]=='jpg' ||result[1]=='JPG' || result[1]=='png' || result[1]=='jpeg'){
    const reader = new FileReader();
    reader.readAsDataURL(this.fileList[i]);
    reader.onload = (_event) => { 
      this.imgURL[j] = reader.result; 
      j++
    }
      }
    }
   this.filename = this.fileList[0].name
   
        this.creditServie.upload_file(this.fileList[0]).subscribe(
     next => console.log(next)
    );


  }
  compare() {

    this.creditServie.compare(this.filename).subscribe(
      images => {this.images = images; console.log(this.text);}
      );
  }
  delete () {
    this.fileList = []
    this.imgURL= []
  }
}
