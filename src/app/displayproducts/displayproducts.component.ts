import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';
import { FormsModule } from '@angular/forms';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {
  details:Array<any>=[];
  userreceived:any
  totprice:any
  noofitems:any
  l:any
  constructor(private ecom:EcomService,private router:Router) { }

  ngOnInit() {
    //this.noofitems=0;
    this.l=localStorage.getItem('login')
    this.user=jwtDecode(this.l)
  this.uemail=this.user.email

    this.ecom.allbooking(this.uemail).subscribe(data=>{
      this.noofitems=data.length
      console.log(data);
    })
      
  }
  
disp(pr:any)
{
  
  console.log(pr.value);
  this.ecom.displayproducts(pr.value).subscribe(data =>{
    console.log(data);
this.details=data;
this.userreceived=data;
if(this.details.length==0)
{
  alert("sorrY!! no products available");
}
    
  })

 
}
user:any
total=0;
c:any
t:any
uemail:any
sum(cost:any,id:any,name:any){
  this.noofitems=this.noofitems+1;
  this.t=localStorage.getItem('login');
  this.user=jwtDecode(this.t)
  this.uemail=this.user.email
  this.c=cost
  console.log("hiii");
  console.log(id);
  this.total=this.total+this.c;
  console.log(this.total);
  alert(this.total);
  this.ecom.bookproducts(id,name,cost,this.uemail).subscribe(data=>{
    console.log(data.message);
  })
   
}
sub(cost:any,id:any,name:any){
  this.noofitems=this.noofitems-1;
  this.t=localStorage.getItem('login');
  this.user=jwtDecode(this.t)
  this.uemail=this.user.email
  this.c=cost
  console.log("hiii");
  this.total=this.total-this.c;
  console.log(this.total);
  alert(this.total)
  this.ecom.cancelbooking(id,this.uemail).subscribe(data=>{
    console.log(data.message);
  })
   
}
book()
{
  console.log(this.total);
  localStorage.setItem("amount",this.total.toString());
  this.router.navigateByUrl("/bookproducts");
}


}
