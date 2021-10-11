import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EcomService } from '../ecom.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-productsupload',
  templateUrl: './productsupload.component.html',
  styleUrls: ['./productsupload.component.css']
})
export class ProductsuploadComponent  {
  myform:FormGroup 
  constructor(private ecom:EcomService,private formbuilder:FormBuilder) { 
    this.myform = this.formbuilder.group({
    
      id:[''],
      name:[''],
      desc:[''],
      cost:[''],
      image: ['']
    })
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myform.get('image').setValue(file);
    }
  }
    
  
addproduct(products:any){
  const formdata:any=new FormData();

  
  formdata.append('id', this.myform.get('id').value);
  formdata.append('name', this.myform.get('name').value);
  formdata.append('desc', this.myform.get('desc').value);
  formdata.append('cost', this.myform.get('cost').value);
  formdata.append('image', this.myform.get('image').value);
  console.log(formdata.get("id"));
  console.log(this.myform.get('id').value)
  console.log(products.value);
  console.log(products.value.image);

 
  this.ecom.addproducts(formdata).subscribe(data=>{
    console.log(data.message);
    alert(data.message);
   
    
  })
   

}
}
