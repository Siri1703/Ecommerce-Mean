import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookproducts',
  templateUrl: './bookproducts.component.html',
  styleUrls: ['./bookproducts.component.css']
})
export class BookproductsComponent implements OnInit {

  constructor(private ecom:EcomService,private router:Router) { }
l:any
user:any
uemail:any
productdetails:any
handler:any
finalpayment=0
cost=localStorage.getItem('amount')
  ngOnInit()  {
    this.l=localStorage.getItem('login')
    this.user=jwtDecode(this.l)
  this.uemail=this.user.email

this.ecom.allbooking(this.uemail).subscribe(data=>{
this.productdetails=data


for(let i=0;i<this.productdetails.length;i++)
{
this.finalpayment=this.finalpayment+this.productdetails[i].cost;
}
//alert("Your Items total: "+this.finalpayment);


})

this.loadstrip();
  }
pay(){
  alert("payment"+this.finalpayment);
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51JhEvLSEi7VH9daYWWuIseZuQTRRFllIVlaHU557o2q1anBr0TDfgNGmSLiSeZzBK145Xl430kGy9Hpe6AlDUa1x00FPz4ug7C',
    locale: 'auto',
    token: function (token: any) {
    
      console.log(token.id)
      alert('payment done!');
    }
  });

  handler.open({
    name: 'ecommerce',
    description: 'booking',
    amount: this.finalpayment
  });
}
loadstrip() {
     
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51JhEvLSEi7VH9daYWWuIseZuQTRRFllIVlaHU557o2q1anBr0TDfgNGmSLiSeZzBK145Xl430kGy9Hpe6AlDUa1x00FPz4ug7C',
        locale: 'auto',
        token: function (token: any) {
         
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }
     
    window.document.body.appendChild(s);
  }
}
payment:any
cod(){
  this.payment="cod";
  window.alert("Thank you for shopping!!!");
  this.router.navigateByUrl("/homecomponent");
  this.ecom.updatestatus(this.user,this.payment).subscribe(data=>{
    console.log(data);
  })
  
}
}
